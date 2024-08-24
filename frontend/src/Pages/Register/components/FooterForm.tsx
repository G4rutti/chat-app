import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const FooterForm = () => {
    return (
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
    )
}

export default FooterForm