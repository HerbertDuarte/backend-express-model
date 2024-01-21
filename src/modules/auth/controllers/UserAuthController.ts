import prisma from "@/database/prisma";
import { UserAuthBody } from "../dtos/UserAuthDto";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/GenerateToken";
import { UserPayload } from "../dtos/UserPayloadDto";
import { RequestWithUser } from "@/interfaces/RequestWithUser";

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
      
      response.status(200).json({
        access_token: token,
        user : payload
      });
    } catch (e) {}
  }
}
