import config from "../../config/default.js";
import { Sequelize } from "sequelize";

const { database, username, password, host, dialect } = config.database;

const Database = new Sequelize(database, username, password, {
  host,
  dialect,
  // port: 3306,
  define: { timestamps: true },
  dialectOptions: { decimalNumbers: true },
  logging: false,
});
Database.sync()
await Database.sync({ force: true });
export { Database };
