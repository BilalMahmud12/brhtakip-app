'use client'
import { useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import { Authenticator, useAuthenticator, Loader } from '@aws-amplify/ui-react';
import Logo from "@/components/core/logo";
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { loadUserData } from "@/services/userService";

const DASHBOARD_URL: string = '/dashboard';

export default function Login() {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const { user } = useAuthenticator((context) => [context.user]);
    
    useEffect(() => {
        if (user) {
            const loadUser = async () => {
                const success = await loadUserData(dispatch);
                if (success) {
                    setTimeout(() => {
                        router.push(DASHBOARD_URL)
                    }, 2500);
                } else {
                    // Handle error (e.g., show error message or log out user)
                }
            };
            loadUser();
        }
    }, [user, dispatch, router])

    return (
        <>
            <title>Panel Girişi - BRH Takip</title>
            {user ? (
                <div className='relative z-50 max-w-xl mx-auto px-8 py-10 bg-white rounded-2xl'>
                    <div className="flex items-center justify-center mb-4">
                        <Logo />
                    </div>
                    <div className='text-center text-sm mb-4'>Lütfen bekleyiniz, Panele yönlendiriliyor...</div>
                    <div className='flex items-center'>
                        <Loader
                                size="small"
                            variation="linear"
                        />
                    </div>
                </div>
            ) : (
                <div className="relative z-50 max-w-xl mx-auto px-8 py-10 bg-white rounded-2xl">
                    <div>
                        <div className="flex items-center mb-5">
                            <Logo />
                        </div>

                        <div className='mb-6 h-[340px]'>
                            <Authenticator hideSignUp />
                        </div>

                        <div className='text-xs text-center px-6'>
                            <p className='text-red-500'>
                                © 2024 BRH Reklam. Tüm hakları saklıdır. İzinsiz erişim veya kullanım yasaktır. Bu uygulama BRH Reklam ve yetkili temsilcileri tarafından işletilmektedir.
                            </p>
                            <br />

                            <p className='text-gray-500 hidden'>
                                Bu hizmete erişerek Kullanım Koşullarımızı kabul etmiş olursunuz ve Gizlilik Politikamızı kabul ettiğinizi beyan etmiş olursunuz. Daha fazla bilgi için web sitemizi ziyaret edin: www.brhreklam.com
                            </p>

                            <p className='text-gray-500'>
                                Destek veya sorularınız için lütfen bize ulaşın:
                                <br />
                                E-posta: support@brhreklam.com
                                <br />
                                Telefon: +90 216 324 28 80
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}