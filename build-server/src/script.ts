import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


const s3Client = new S3Client({
    region: '',
    credentials: {
        accessKeyId: '',
        secretAccessKey: ''
    }
})

async function init() {
    console.log("Executing script.js....");
    const outDirPath = path.join(__dirname, "output");

    const p = exec(`cd ${outDirPath} && pnpm install && pnpm run build`);

    // LOGS CAPTURING
    p.stdout.on("data", function (data) {
        console.log(data.toString());
    });
    p.stdout.on("error", function (data) {
        console.log("ERROR", data.toString());
    });
    p.on("close", function () {
        console.log("Build Compelete");
        const distFolderPath = path.join(__dirname, "output", "dist");

        // arr of content
        const distFolderContent = fs.readdir(distFolderPath, {
            recursive: true,
        });
        for(const filePath of distFolderContent){
            // skip the dir paths, as we need to upload file paths to S3 not __dir
            if (fs.lstatSync(filePath).isDirectory()) continue;
        }
    });
}
