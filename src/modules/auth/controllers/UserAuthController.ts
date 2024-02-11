import prisma from "@/database/prisma";
import { UserAuthBody } from "../dtos/UserAuthDto";
import { Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/GenerateToken";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import logger from "@/utils/Loggers/logger";
import { ZodError } from "zod";
export class UserAuthController {
  async handle(request: RequestWithUser, response: Response) {
    try {
      const { email, password } = UserAuthBody.parse(request.body);
      const userFound = await prisma.users.findUnique({
        where: { email },
      });
      if (!userFound || !(await bcrypt.compare(password, userFound.password))) {
        return response.status(401).json({
          message: "Email and/or password are wrong",
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
    } catch (e) {
      if (e instanceof ZodError) {
        return response.status(401).json({
          ...e,
          message: "Invalid data to login",
        });
      }
      return response.status(500).json({
        ...e,
        message : "Internal server error"
      })
    }
  }
}
