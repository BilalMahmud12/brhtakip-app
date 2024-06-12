'use client'
import React, { useEffect } from 'react';
import * as Repo from '@/repository/index';
import { usePathname } from 'next/navigation';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setUserProfile } from '@/lib/features/userSlice';
import { setCurrentPageTitle } from '@/lib/features/globalSlice';
import { setClientProfiles } from '@/lib/features/clientSlice';
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";

import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider"
import { loadUserData } from '@/services/userService';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const currentPageTitle = useAppSelector((state: RootState) => state.global.currentPageTitle);
    const { user } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        if (user) {
            const loadUser = async () => {
                await loadUserData(dispatch);
            };

            loadUser();
        }
    }, [user, dispatch])

    useEffect(() => {
        const pageTitle = document.getElementsByTagName('title')[0]?.innerText;
        const currentTitle: string = pageTitle?.split(' - ')[0] as string || '';

        if (pageTitle && currentTitle !== currentPageTitle) {
            dispatch(setCurrentPageTitle(currentTitle));
        }
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            const clientsData = await Repo.ClientProfileRepository.getClientProfiles();
            dispatch(setClientProfiles(clientsData || []))
        }

        fetchData();
    }, []);
    
    return (
        <>
            <AppHeader />
            <div className="grid grid-cols-5 xl:grid-cols-6 bg-[#f2f3f3]">
                <div className='col-span-1 bg-white'>
                    <SideNav />
                </div>
                <div className="col-span-4 xl:col-span-5">
                    {children}
                </div>
            </div>
        </>
    );
}