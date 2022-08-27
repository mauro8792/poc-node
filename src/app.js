import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";

import  mainRouter  from "./routes/index.js";

dotenv.config();

export default async function app() {
    const app = express();
    app.use(morgan("dev"));    
    app.use(express.json());
    mainRouter(app) 
    
    return app
}