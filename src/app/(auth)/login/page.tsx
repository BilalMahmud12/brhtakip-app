'use client'
import React from "react";
import { useRouter } from "next-nprogress-bar";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signIn, type SignInInput } from 'aws-amplify/auth';

import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { loadUserData } from "@/services/userService";
import AuthenticationForm from '../src/authenticationForm';
import { toast } from 'sonner';

const DASHBOARD_URL: string = '/dashboard';

export default function Login() {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();

    const [loading , setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);
    const [success, setSuccess] = React.useState<boolean>(false);
    const { user } = useAuthenticator((context) => [context.user]);

    async function handleSignIn({ username, password }: SignInInput) {
        setLoading(true);
        try {
            if (user) {
                router.push(DASHBOARD_URL);
                return true;
            }
            
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log('isSignedIn', isSignedIn);
            console.log('nextStep', nextStep);

            if (isSignedIn) {
                setSuccess(true);
                setError(false);
                const success = await loadUserData(dispatch);
                if (success) {
                    router.push(DASHBOARD_URL);
                } else {
                    setLoading(false);
                    toast.error('Kullanıcı bilgileri yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                }
            }

            setLoading(false);
            return isSignedIn;

        } catch (error) {
            setLoading(false);
            setError(true);
            console.log('error signing in', error);
        }
    }

    return (
        <>
            <title>Giriş Yap - BRH Takip</title>
            
            <AuthenticationForm
                onSubmit={(authData) => handleSignIn({ username: authData.email, password: authData.password })}
                isLoading={loading}
                success={success}
                error={error}
            />
        </>
    )
}