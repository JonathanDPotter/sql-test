import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  HOSTNAME,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_SCHEMA,
} = process.env;

const server = {
  hostname: HOSTNAME,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOSTNAME}:${PORT}/`
      : `https://${HOSTNAME}:${PORT}/`,
};

const db = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  localAddress: DB_HOST,
  port: parseInt(DB_PORT!),
};

const config = { server, db };

export default config;
