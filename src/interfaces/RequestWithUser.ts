import { Request } from "express";
import { UserPayload } from "@/modules/auth/dtos/UserPayloadDto";
import { z } from "zod";
export interface RequestWithUser extends Request {
  user: z.infer<typeof UserPayload>;
  params: {
    id?: string
  }
}
