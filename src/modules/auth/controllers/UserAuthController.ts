import prisma from "@/database/prisma";
import { UserAuthBody } from "../dtos/UserAuthDto";
import { Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/GenerateToken";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import logger from "@/utils/Loggers/logger";
export class UserAuthController {
  async handle(request: RequestWithUser, response: Response) {
    const { email, password } = UserAuthBody.parse(request.body);

    try {
      const userFound = await prisma.users.findUnique({
        where: { email },
      });
      if (!userFound || !(await bcrypt.compare(password, userFound.password))) {
        return response.status(401).json({
          message: "Email e/ou senha estão incorretos!",
        });
      }
      const payload = {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
      };

      const token = generateToken(payload);
      request.user = payload;

      logger.debug(`DEBUG [LOGIN] [USER] ID ${userFound.id}`);
      response.status(200).json({
        access_token: token,
        user: payload,
      });
    } catch (e) {}
  }
}
