import env from "dotenv";
import config from "../../config/default.js";

env.config();

const dbConfig = config.database;
console.log("config", dbConfig);

export default {
  development: dbConfig,
};
