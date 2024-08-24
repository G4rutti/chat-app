/* eslint-disable react-hooks/rules-of-hooks */
import { useToast } from "@/components/ui/use-toast"
import { useSignUp } from "@/hooks/signUp"



export const typesOfSignUp = () => {
    const { signUpWithGoogle, error, signUpWithGithub } = useSignUp()
    const { toast } = useToast()
    
    const signUpGoogle = async () => {
        try {
            await signUpWithGoogle()
            toast({
                title: "Tudo ocorreu perfeitamente",
                description: `Bem vindo!`,
            })
        } catch{
            toast({
                variant: "destructive",
                title: "Alguma coisa deu errado!",
                description: `${error ? error : "Erro desconhecido"}`,
            })
        }
    }
    
    const signUpGithub = async () => {
        try {
            await signUpWithGithub()
            toast({
                title: "Tudo ocorreu perfeitamente",
                description: `Bem vindo!`,
            })
        } catch {
            toast({
                variant: "destructive",
                title: "Alguma coisa deu errado!",
                description: `${error ? error : "Erro desconhecido"}`,
            })
        }
    }

    return {signUpGithub, signUpGoogle}
}
