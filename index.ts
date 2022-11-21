import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { db } from "./db";
import cors from "cors";
import { config } from "dotenv";

config();

const corsOptions = {
    origin: process.env.FRONT_URL,
    methods: ["HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Origin",
      "Authorization",
      "Accept",
      "Accept-Version",
      "Date",
      "X-CSRF-Token",
      "X-Requested-With",
      "X-HTTP-Method-Override",
      "X-Api-Version",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
};

const jsonParser = bodyparser.json()

const server = express();
const port = process.env.API_PORT || 5000;


server.use(cors(corsOptions));
server.options("*", cors(corsOptions));
server.use(express.urlencoded({ extended: true }));

server.use("/api", jsonParser, require("./routes"));
server.use((req: Request, res: Response) => res.status(404).send("Not found"));

db.sequelize.sync().then(()=> {
    server.listen(port, () => console.log(`Listening on port ${port}`));
})
