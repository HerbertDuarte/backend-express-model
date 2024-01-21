import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "@/modules/auth/dtos/UserPayloadDto";
import { RequestWithUser } from "@/interfaces/RequestWithUser";

export function verifyToken(
  request: RequestWithUser,
  response: Response,
  next: NextFunction
) {
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
}
