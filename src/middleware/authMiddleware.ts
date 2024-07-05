import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.ts";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({
      message: "No Token Provided",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      message: "Invalid Token",
    });
  }
};
