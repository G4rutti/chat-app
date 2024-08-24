import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'


const HeaderForm = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between mb-[18px]'>
            <h2 className='text-slate-600 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
                Log-in
            </h2>
            <Button className='bg-slate-600 w-[94px]' onClick={() => navigate("/cadastrar")}>Cadastre-se</Button>
        </div>
    )
}

export default HeaderForm