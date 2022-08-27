import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT ?? 3001,
  env: process.env.NODE_ENV ?? "development",
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: "0",
  },
};
