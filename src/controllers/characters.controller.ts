import { Request, Response, NextFunction } from "express";
import {
  getCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} from "../services/characters.service";

const getCharactersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.status(200).json(await getCharacters(id));
  } catch (error: any) {
    next(error);
  }
};

const addCharacterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(await addCharacter(req.body));
  } catch (error: any) {
    next(error);
  }
};

const updateCharacterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.status(200).json(await updateCharacter(id, req.body));
  } catch (error: any) {
    next(error);
  }
};

const deleteCharacterHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.status(200).json(await deleteCharacter(id));
  } catch (error: any) {
    next(error);
  }
};

export default {
  getCharactersHandler,
  addCharacterHandler,
  updateCharacterHandler,
  deleteCharacterHandler,
};
