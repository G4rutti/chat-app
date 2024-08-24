import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const schema = z.object({
    email: z.string().email({ message: "Insira um email válido" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
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
            <h1 className='text-slate-700 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-[70px] mb-[88px] medium-h:mt-[20px] medium-h:mb-[55px]'>Chat-app</h1>
            <FormProvider {...form}>
                <main className='max-w-[384px] w-[100%]'>
                    <div className='flex justify-between mb-[18px]'>
                        <h2 className='text-slate-600 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
                            Log-in
                        </h2>
                        <Button className='bg-slate-600 w-[94px]'>Cadastre-se</Button>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[12px]">
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
                        <Button type="submit" className='mt-[8px] h-[56px] text-xl font-semibold tracking-tight bg-slate-900'>Continue</Button>
                    </form>
                    <div className='mt-[35px]'>
                        <p className='leading-7 [&:not(:first-child)]:mt-6 text-slate-500 flex gap-1 mb-[28px]'>Esqueceu sua senha?
                            <span className='text-slate-900 underline cursor-pointer'>Redefinir senha</span>
                        </p>
                        <div className="flex items-center justify-center mb-[59px] medium-h:mb-[30px]">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-400">Outros meios</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Button className='flex gap-[13px] items-center justify-center h-[56px] max-w-[384px] w-[100%] text-xl font-semibold tracking-tight bg-transparent border-slate-600 border text-slate-600'><FcGoogle />Google</Button>
                            <Button className='flex gap-[13px] items-center justify-center mt-[12px] max-w-[384px] w-[100%] h-[56px] text-xl font-semibold tracking-tight bg-transparent border-slate-600 border text-slate-600'><FaGithub />Github</Button>
                            <p className='mt-[73px] medium-h:mt-[30px] text-slate-300'>@2024 Produzido por Davi Garutti Diniz</p>
                        </div>
                    </div>
                </main>

            </FormProvider>
        </div>
    );
};

export default Formulario;
