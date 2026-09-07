import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import mime from "mime-types";
import { Kafka } from "kafkajs";

const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const PROJECT_ID = process.env.PROJECT_ID;
const DEPLOYEMENT_ID = process.env.DEPLOYEMENT_ID;

const kafka = new Kafka({
  clientId: `docker-build-server-${DEPLOYEMENT_ID}`,
  brokers: [process.env.CLIENT_ID!],
  ssl: {
    ca: [fs.readFileSync(path.join(__dirname, "kafka.pem"), "utf-8")],
  },
  sasl:{
    mechanism: "plain",
    username: process.env.CLIENT_USERNAME!,
    password: process.env.CLIENT_SECRET!,
  }
});

const producer = kafka.producer();

async function publishLog(log: any) {
  await producer.send({
    topic: `container-logs`,
    messages: [
      {
        key: "log",
        value: JSON.stringify({ PROJECT_ID, DEPLOYEMENT_ID, log }),
      },
    ],
  });
}

async function init() {
  await producer.connect();

  console.log("Executing script.js");
  await publishLog("Build Started...");
  const outDirPath = path.join(__dirname, "output");

  const p = exec(`cd ${outDirPath} && npm install && npm run build`);

  p.stdout!.on("data", function (data) {
    console.log(data.toString());
    publishLog(data.toString());
  });

  p.stdout!.on("error", async function (data) {
    console.log("Error", data.toString());
    await publishLog(`error: ${data.toString()}`);
  });

  p.on("close", async function () {
    console.log("Build Complete");
    await publishLog(`Build Complete`);
    const distFolderPath = path.join(__dirname, "output", "dist");
    const distFolderContents = fs.readdirSync(distFolderPath, {
      recursive: true,
    });

    await publishLog(`Starting to upload`);
    for (const file of distFolderContents) {
      if (typeof file === "string") {
        const filePath = path.join(distFolderPath, file);
        if (fs.lstatSync(filePath).isDirectory()) continue; // to know if its dir, then skip -> s3 needs script not dir.

        console.log("uploading", filePath);
        await publishLog(`uploading ${file}`);

        const command = new PutObjectCommand({
          Bucket: "vercel-clone-objectstorage-output",
          Key: `__outputs/${PROJECT_ID}/${file}`,
          Body: fs.createReadStream(filePath),
          ContentType: mime.lookup(filePath) || "application/octet-stream",
        });

        await s3Client.send(command);
        publishLog(`uploaded ${file}`);
        console.log("uploaded", filePath);
      }
    }
    await publishLog(`Done`);
    console.log("Done...");
    process.exit(0);
  });
}

init();
