import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';

import HeaderForm from './HeaderForm';
import FooterForm from './FooterForm';
import { FormValues, schema } from '../schema';


const Formulario = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (data: FormValues) => {
        console.log("SUCCESS", data);
    }

    return (
        <div className='flex flex-col max-w-[642px] w-[100%]  items-center px-8'>
            <h1 className='text-slate-700 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-[70px] mb-[88px] medium-h:mt-[20px] medium-h:mb-[55px]'>Chat-app</h1>
            <FormProvider {...form}>
                <main className='max-w-[384px] w-[100%]'>
                    <HeaderForm />
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
                    <FooterForm />
                </main>

            </FormProvider>
        </div>
    );
};

export default Formulario;
