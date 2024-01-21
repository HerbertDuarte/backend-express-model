import prisma from "@/database/prisma";
import { Request, Response } from "express";

export class FindUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const data = await prisma.users.findUniqueOrThrow({
        where: { id },
      });
      response.json(data);
    } catch (e) {
      if (e.code === "P2025") {
        response.status(404).json({
          ...e,
          message: "O usuário não foi encontrado!",
        });
      } else {
        response.status(400).json({
          ...e,
          message: "Erro ao buscar usuário!",
        });
      }
    }
  }
}
