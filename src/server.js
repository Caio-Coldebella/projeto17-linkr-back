import express, { json } from "express";
import cors from "cors";
import router from "./routers/index.js";
import dotenv from "dotenv";
dotenv.config({path:'.env'})

const server = express();

server.use(json());
server.use(cors());
server.use(router);

const PORT = 5000; //process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server listen running on port: ${PORT}`);
});