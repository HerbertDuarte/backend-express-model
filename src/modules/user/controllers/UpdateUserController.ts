import prisma from "@/database/prisma";
import { Request, Response } from "express";
import { UpdateUserBody } from "../../user/dtos/UpdateUserDto";
export class UpdateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const body = UpdateUserBody.parse(request.body);

      const data = await prisma.users.update({
        where: { id },
        data: {
          ...body,
        },
      });

      response.json(data);
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao atualizar o usuário!",
      });
    }
  }
}
