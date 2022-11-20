import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { db } from "./db";

var jsonParser = bodyparser.json()

const server = express();
const port = process.env.API_PORT || 5000;

server.use("/api", jsonParser, require("./routes"));
server.use((req: Request, res: Response) => res.status(404).send("Not found"));

db.sequelize.sync().then(()=> {
    server.listen(port, () => console.log(`Listening on port ${port}`));
})
