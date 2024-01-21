import z from "zod";

const UserAuthBody = z.object({
  email: z.string().min(1).email("Formato de email inválido!"),
  password: z.string().min(6),
});

export { UserAuthBody };
