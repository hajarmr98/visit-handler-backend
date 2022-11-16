import express, { Request, Response } from "express";

const server = express();
const port = process.env.API_PORT || 5000;

server.use("/api", require("./routes"));
server.use((req: Request, res: Response) => res.status(404).send("Not found"));

server.listen(port, () => console.log(`Listening on port ${port}`));