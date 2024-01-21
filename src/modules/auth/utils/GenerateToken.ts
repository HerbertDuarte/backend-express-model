import jwt from "jsonwebtoken";
import { UserPayload } from "../dtos/UserPayloadDto";
import { z } from "zod";
export function generateToken(payload : z.infer<typeof UserPayload>) {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 604800,
    // token válido por uma semana
  });

  return token;
}
