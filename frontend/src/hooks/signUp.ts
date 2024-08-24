import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, UserCredential, signInWithPopup } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, providerGithub, providerGoogle, storage } from '../database/db';

interface SignUpData {
    email: string;
    password: string;
    username: string;
    photo: File;
}

interface UseSignUpReturn {
    signUp: (data: SignUpData) => Promise<void>;
    progress: number;
    error: string | null;
    isLoading: boolean;
    signUpWithGoogle: () => Promise<void>
    signUpWithGithub: () => Promise<void>
}

export const useSignUp = (): UseSignUpReturn => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const signUp = async ({ email, password, username, photo }: SignUpData): Promise<void> => {
        setIsLoading(true);
        setError(null);

        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const storageRef = ref(storage, `users/${user.uid}/profile.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, photo);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progressPercent);
                },
                (uploadError) => {
                    setError(`Failed to upload image: ${uploadError.message}`);
                    setIsLoading(false);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL,
                    });
                    setIsLoading(false);
                }
            );

            setIsLoading(false);

        } catch (error) {
            setError(`Failed to sign up: ${error}`);
            setIsLoading(false);
        }
    };

    const signUpWithGoogle = async () => {
        try {
            setIsLoading(true);
            setError(null);

            await signInWithPopup(auth, providerGoogle)
            setIsLoading(false)

        } catch (error) {
            setError(`Failed to sign up: ${error}`);
            setIsLoading(false);

        }
    }

    const signUpWithGithub = async () => {
        try {
            setIsLoading(true);
            setError(null);

            await signInWithPopup(auth, providerGithub)
            setIsLoading(false)

        } catch (error) {
            setError(`Failed to sign up: ${error}`);
            setIsLoading(false);

        }
    }

    return { signUp, progress, error, isLoading, signUpWithGoogle, signUpWithGithub };
};
