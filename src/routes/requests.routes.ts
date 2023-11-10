import { Router } from "express";
import controller from "../controllers/requests.controller";

const router = Router();

router.get("/", controller.getRequests);

export default router;
