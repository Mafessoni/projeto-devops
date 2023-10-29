import { join } from "path";
import { ConnectionOptions } from "typeorm";
require("dotenv").config();

export default {
  type: "mysql",
  host: process.env.DB_SERVIDOR || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123",
  database: process.env.DB_DATABASE || "database1",
  entities: [join(__dirname, "..", "/entities/**/*")],
  migrations: [join(__dirname, "..", "/database/migrations/*")],
} as ConnectionOptions;
