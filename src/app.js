import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";

import mainRouter from "./routes/index.js";
import { Database } from "./setUp/Database/index.js";

dotenv.config();

export default async function app() {
  const app = express();
  app.use(morgan("dev"));
  app.use(express.json());

  try {
    await Database.authenticate();
    Database.sync();
    console.log("Database connection successful");
  } catch (error) {
    console.log("Error: ", error);
  }

  mainRouter(app);

  return app;
}
