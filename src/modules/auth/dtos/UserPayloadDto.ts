import z from "zod";

const UserPayload = z.object({
  id : z.string().cuid(),
  name: z.string(),
  email: z.string().min(1).email("Formato de email inválido!"),
});

export { UserPayload };
