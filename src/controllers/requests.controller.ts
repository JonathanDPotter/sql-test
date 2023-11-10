import { Request, Response, NextFunction } from "express";
import { getAllRequests } from "../services/requests.service";

const getRequests = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json(await getAllRequests());
  } catch (error: any) {
    next(error);
  }
};

export default { getRequests };