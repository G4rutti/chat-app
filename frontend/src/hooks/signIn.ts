import { auth } from "@/database/db";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"


interface ISignin{
    email: string;
    password: string;
}

export const useSignIn = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const signIn = async ({ email, password }: ISignin) => {
        setLoading(true);
        setError(null); // Resetando o erro antes de tentar o login

        try {
            await signInWithEmailAndPassword(auth, email, password);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || "Erro desconhecido");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, signIn };
};