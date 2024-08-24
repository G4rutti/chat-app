import { z } from "zod";

export const schema = z.object({
    email: z.string().email({ message: "Insira um email válido" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export type FormValues = z.infer<typeof schema>;