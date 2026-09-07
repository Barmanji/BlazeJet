import path from "node:path";
console.log("__dirname =", __dirname);
console.log("import.meta.dirname =", import.meta.dirname);
console.log("joined =", path.join(__dirname, "../prisma/ca.pem"));
