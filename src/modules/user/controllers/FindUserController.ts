import prisma from "@/database/prisma";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import { Response } from "express";

export class FindUserController {
  async handle(request: RequestWithUser, response: Response) {
    try {
      const paramsId = request.params.id;
      const { id } = request.user;

      if (paramsId === id) {
        const data = await prisma.users.findUniqueOrThrow({
          where: { id },
        });
        response.json({ ...data, password: undefined });
      } else {
        response.status(401).json({
          message: "Você não tem permissões para realizar essa consulta!",
        });
      }
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
