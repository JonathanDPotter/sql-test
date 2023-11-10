import express from "express";
import path from "path";
import indexRoutes from "../routes/index.routes";
import logger from "../middleware/logger";
import errorHandler from "../middleware/errorHanlder";

const createServer = () => {
  const server = express();
  server.use(express.json());
  server.use(express.static(path.join(__dirname, "../static")));
  server.use(logger);
  server.use(indexRoutes);
  server.use(errorHandler);
  return server;
};

export default createServer;
