import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "@/modules/auth/dtos/UserPayloadDto";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import logger from "@/utils/Loggers/logger";

export function authGuard(
  request: RequestWithUser,
  response: Response,
  next: NextFunction
) {

  try {
    const rawToken = request.headers.authorization;
  if (!rawToken) {
    return response.status(401).end();
  }
  const token = rawToken.toString().replace("Bearer ", "");
  jwt.verify(token.toString(), process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return response.status(401).end();
    }

    const { id, name, email } = UserPayload.parse(decoded);
    request.user = { id, name, email };
    next();
  });
  } catch (error) {
    logger.error("[HeartBeat] UNKNOW ERROR")
  } 
  
}
