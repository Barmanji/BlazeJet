import "dotenv/config";
import express, { type Response, type Request } from "express";
import { generateSlug } from "random-word-slugs";
import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import { Server } from "socket.io";
import cors from "cors";
import { z } from "zod";
import { PrismaClient } from "./generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { createClient } from "@clickhouse/client";
import { Kafka } from "kafkajs";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 9000;

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
const prisma = new PrismaClient({ adapter });

const io = new Server({ cors: { origin: "*" } });

const kafka = new Kafka({
  clientId: `api-server`,
  brokers: [process.env.CLIENT_ID!],
  ssl: {
    ca: [fs.readFileSync(path.join(__dirname, "../prisma/ca.pem"), "utf-8")],
  },
  sasl:{
    mechanism: "plain",
    username: process.env.CLIENT_USERNAME!,
    password: process.env.CLIENT_SECRET!,
  }
});

const client = createClient({
  host: process.env.CLICKHOUSE_CLIENT_ID || "http://localhost:8123", // Points to your local engine
  database: "default",
  username: "default",       // Changed from avnadmin to your local default user
  password: "secure123",     // Your new local password
});

const consumer = kafka.consumer({ groupId: "api-server-logs-consumer" });

io.on("connection", (socket) => {
  socket.on("subscribe", (channel) => {
    socket.join(channel);
    socket.emit("message", JSON.stringify({ log: `Subscribed to ${channel}` }));
  });
});

io.listen(9002);

const ecsClient = new ECSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

const config = {
  CLUSTER: process.env.CLUSTER!,
  TASK: process.env.TASK!,
};

app.use(express.json());
app.use(cors());

app.post("/project", async (req: Request, res: Response) => {
  const schema = z.object({
    name: z.string().optional(),
    gitURL: z.string(),
    slug: z.string().optional(),
  });
  const safeParseResult = schema.safeParse(req.body);

  if (safeParseResult.error)
    return res.status(400).json({ error: safeParseResult.error });

  const { name, gitURL, slug } = safeParseResult.data;
  const subDomain = slug || generateSlug();

  const project = await prisma.project.create({
    data: {
      name: name || subDomain,
      gitURL,
      subDomain,
    },
  });

  return res.json({
    status: "success",
    data: { projectSlug: subDomain, url: `http://${subDomain}.localhost:8000` },
  });
});

app.post("/deploy", async (req: Request, res: Response) => {
  const { projectId } = req.body;

  const project = await prisma.project.findUnique({ where: { id: projectId } });

  if (!project) return res.status(404).json({ error: "Project not found" });

  // Check if there is no running deployement
  const deployment = await prisma.deployement.create({
    data: {
      project: { connect: { id: projectId } },
      status: "QUEUED",
    },
  });

  // Spin the container
  const command = new RunTaskCommand({
    cluster: config.CLUSTER,
    taskDefinition: config.TASK,
    launchType: "FARGATE",
    count: 1,
    networkConfiguration: {
      awsvpcConfiguration: {
        assignPublicIp: "ENABLED",
        subnets: [
                 ],
        securityGroups: [""],
      },
    },
    overrides: {
      containerOverrides: [
        {
          name: "builder-image",
          environment: [
            { name: "GIT_REPOSITORY__URL", value: project.gitURL },
            { name: "PROJECT_ID", value: projectId },
            { name: "DEPLOYEMENT_ID", value: deployment.id },
            { name: "CLIENT_ID", value: process.env.CLIENT_ID! },
            { name: "CLIENT_USERNAME", value: process.env.CLIENT_USERNAME! },
            { name: "CLIENT_SECRET", value: process.env.CLIENT_SECRET! },
            { name: "AWS_ACCESS_KEY_ID", value: process.env.AWS_ACCESS_KEY_ID! },
            {
              name: "AWS_SECRET_ACCESS_KEY",
              value: process.env.AWS_SECRET_ACCESS_KEY!,
            },
          ],
        },
      ],
    },
  });

  await ecsClient.send(command);

  return res.json({ status: "queued", data: { deploymentId: deployment.id } });
});

app.get("/logs/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const logs = await client.query({
    query: `SELECT event_id, deployment_id, log, timestamp from log_events where deployment_id = {deployment_id:String}`,
    query_params: {
      deployment_id: id,
    },
    format: "JSONEachRow",
  });

  const rawLogs = await logs.json();

  return res.json({ logs: rawLogs });
});

async function initkafkaConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topics: ["container-logs"], fromBeginning: true });

  await consumer.run({
    eachBatch: async function ({
      batch,
      heartbeat,
      commitOffsetsIfNecessary,
      resolveOffset,
    }) {
      const messages: any = batch.messages;
      console.log(`Recv. ${messages.length} messages..`);
      for (const message of messages) {
        if (!message.value) continue;
        const stringMessage = message.value.toString();
        const { PROJECT_ID, DEPLOYEMENT_ID, log } = JSON.parse(stringMessage);
        console.log({ log, DEPLOYEMENT_ID });
        try {
          const { query_id } = await client.insert({
            table: "log_events",
            values: [
              { event_id: uuidv4(), deployment_id: DEPLOYEMENT_ID, log },
            ],
            format: "JSONEachRow",
          });
          console.log(query_id);
          resolveOffset(message.offset);
          await commitOffsetsIfNecessary(message.offset);
          await heartbeat();
        } catch (err) {
          console.log(err);
        }
      }
    },
  });
}

initkafkaConsumer();

app.listen(PORT, () => console.log(`API Server Running..${PORT}`));
