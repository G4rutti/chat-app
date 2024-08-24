import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const schema = z.object({
    Imagem: z.string()
        .url({ message: "Insira uma URL válida" })
        .regex(/\.(jpg|jpeg|png|gif)$/i, { message: "A URL deve apontar para uma imagem (jpg, jpeg, png, gif)" }),
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

type FormValues = z.infer<typeof schema>;

const Formulario = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = () => {
        console.log('acsdas')
    }

    return (
        <div className='flex flex-col max-w-[642px] w-[100%]  items-center px-8'>
            <h1 className='text-slate-700 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-[70px] mb-[88px] medium-h:mt-[20px] medium-h:mb-[35px]'>Registre-se</h1>
            <FormProvider {...form}>
                <main className='max-w-[384px] w-[100%]'>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[12px] medium-h:gap-[4px] ">
                        <FormField
                            control={form.control}
                            name="Imagem"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Foto de perfil</FormLabel>
                                    <FormControl>
                                        <Input className='border-[#64748B]' placeholder="Ficheiro..." type='file' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='border-[#64748B]' placeholder="Digite seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='border-[#64748B]' placeholder="Digite seu email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <PasswordInput className='border-[#64748B]' placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <PasswordInput className='border-[#64748B]' placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='mt-[8px] h-[56px] text-xl font-semibold tracking-tight bg-slate-900'>Continue</Button>
                    </form>
                    <div className='mt-[35px]'>
                        <div className="flex items-center justify-center mb-[30px]">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-400">Outros meios</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center w-full flex-row gap-4'>
                                <Button className='flex gap-[13px] items-center justify-center h-[56px] max-w-[384px] w-[100%] text-xl font-semibold tracking-tight bg-transparent border-slate-600 border text-slate-600'><FcGoogle />Google</Button>
                                <Button className='flex gap-[13px] items-center justify-center max-w-[384px] w-[100%] h-[56px] text-xl font-semibold tracking-tight bg-transparent border-slate-600 border text-slate-600'><FaGithub />Github</Button>
                            </div>
                        </div>
                    </div>
                </main>

            </FormProvider>
        </div>
    );
};

export default Formulario;
