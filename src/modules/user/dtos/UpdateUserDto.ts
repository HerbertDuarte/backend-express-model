import z from "zod";
const status = ["enable", "disable"] as const;

const UpdateUserBody = z.object({
  name: z.string().optional(),
  email: z.string().min(1).email("Formato de email inválido!").optional(),
  password: z.string().min(6).optional(),
  status : z.enum(status),
});


export { UpdateUserBody };
