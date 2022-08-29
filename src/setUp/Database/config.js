import env from "dotenv";
import config from "../../config/default.js";

env.config();

const dbConfig = config.database;

export default {
  development: dbConfig,
};
