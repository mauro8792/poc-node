import config from "../../config/default.js";
import { Sequelize } from "sequelize";

const { database, username, password, host, dialect } = config.database;

const Database = new Sequelize(database, username, password, {
  host,
  dialect,
  define: { timestamps: true },
  dialectOptions: { decimalNumbers: true },
  logging: false,
});

export { Database };
