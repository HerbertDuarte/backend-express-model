import prisma from "@/database/prisma";
import { Request, Response } from "express";
export class DeleteUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await prisma.users.delete({
        where: { id },
      });

      response.json({
        message: "Usuário deletado com sucesso",
      });
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao deletar o usuário!",
      });
    }
  }
}
