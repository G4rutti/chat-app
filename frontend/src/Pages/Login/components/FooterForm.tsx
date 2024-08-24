import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const FooterForm = () => {
    return (
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
    )
}

export default FooterForm