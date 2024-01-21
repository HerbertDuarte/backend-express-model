import prisma from "@/database/prisma";
import { CreateUserBody } from "../dtos/CreateUserDto";
import { Request, Response } from "express";
import bcrypt from "bcrypt"
export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, password, email } = CreateUserBody.parse(request.body);

      const encryptedPassword = await bcrypt.hash(password, 10);
      const data = await prisma.users.create({
        data: {
          name,
          password : encryptedPassword,
          email,
        },
      });

      response.json(data);
    } catch (e) {
      if (e.meta.target?.includes("email")) {
        response.status(400).json({
          ...e,
          message: "Erro ao criar usuário. Esse email já foi cadastrado!",
        });
      } else {
        response.status(400).json({
          ...e,
          message: "Erro ao criar usuário!",
        });
      }
    }
  }
}
