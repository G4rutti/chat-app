import { z } from "zod";

export const schema = z.object({
    Imagem: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'File size should be less than 5MB' })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Apenas PNG e JPEG são permitidos',
    }),
    email: z.string()
        .email({ message: "Insira um email válido" }),
    nome: z.string()
        .nonempty({ message: "Digite um nome" })
        .min(4, { message: "O nome deve ter pelo menos 4 caracteres" }),
    password: z.string()
        .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z.string()
        .min(6, { message: "A confirmação da senha deve ter pelo menos 6 caracteres" }),   
          
}).refine(data => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"], // O erro será associado ao campo `confirmPassword`
});

export type FormValues = z.infer<typeof schema>;