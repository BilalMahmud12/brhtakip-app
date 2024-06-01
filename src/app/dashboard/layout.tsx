'use client'
import React, { useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth'
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";

import * as Repo from '@/repository/index';
import { useStore } from '@/stores/utils/useStore';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const {
        userStore,
        clientProfileStore
    } = useStore();

    useEffect(() => {
        const currentUser = async () => {
            const user = await getCurrentUser();

            userStore.setUserData({
                id: user?.userId,
                name: '',
                email: user?.signInDetails?.loginId || '',
                role: '',
                status: '',
                isClient: false,
                clientId: null,
            });
        }

        const fetchData = async () => {
            const clientsData = await Repo.ClientProfileRepository.getClientProfiles();
            clientProfileStore.initStore({ clientProfiles: clientsData || [] });
            console.log('clientsData', clientsData);
        }

        currentUser();
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
                    <div className='px-8 py-4'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    );
}