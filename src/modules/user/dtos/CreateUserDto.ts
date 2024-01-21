import z from "zod";

const CreateUserBody = z.object({
  name: z.string(),
  email: z.string().min(1).email("Formato de email inválido!"),
  password: z.string().min(6),
});

export { CreateUserBody };
