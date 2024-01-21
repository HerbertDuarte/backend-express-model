import prisma from "@/database/prisma";
import { Request, Response } from "express";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    try {
      const data = await prisma.users.findMany();
      response.json(data);
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao listar os usuários!",
      });
    }
  }
}
