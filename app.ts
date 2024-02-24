import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import db from "./src/firebaseInit";
import router from "./src/routes";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 5000;
app.use("/", router);

app.listen(port, () => console.log(`The server is running on port ${port}`));