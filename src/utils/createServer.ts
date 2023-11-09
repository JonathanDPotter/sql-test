import express from "express";
import path from "path";
import indexRoutes from "../routes/index.routes";

const createServer = () => {
  const server = express();
  server.use(express.json());
  server.use(express.static(path.join(__dirname, "../static")));
  server.use(indexRoutes);
  return server;
};

export default createServer;
