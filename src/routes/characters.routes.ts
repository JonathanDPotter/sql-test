import { NextFunction, Request, Response, Router } from "express";
import controller from "../controllers/characters.controller";

const router = Router();

router.get("/:id?", controller.getCharactersHandler);

router.post("/", controller.addCharacterHandler);

router.put("/:id", controller.updateCharacterHandler);

router.delete(
  "/:id", controller.deleteCharacterHandler);

export default router;
