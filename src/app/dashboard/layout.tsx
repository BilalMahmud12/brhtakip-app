'use client'
import React, { useEffect } from 'react';
import * as Repo from '@/repository/index';
import { usePathname } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth'
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setUserData } from '@/lib/features/userSlice';
import { setCurrentPageTitle } from '@/lib/features/globalSlice';
import { setClientProfiles } from '@/lib/features/clientSlice';
import AppHeader from '@/components/custom/header';
import SideNav from "@/components/custom/sideNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const currentPageTitle = useAppSelector((state: RootState) => state.global.currentPageTitle);

    useEffect(() => {
        const pageTitle = document.getElementsByTagName('title')[0].innerText;
        const currentTitle: string = pageTitle?.split(' - ')[0] as string || '';

        if (pageTitle && currentTitle !== currentPageTitle) {
            dispatch(setCurrentPageTitle(currentTitle));
        }
    }, [pathname]);

    useEffect(() => {
        const currentUser = async () => {
            const user = await getCurrentUser();

            dispatch(setUserData({
                id: user?.userId,
                name: '',
                email: user?.signInDetails?.loginId || '',
                role: '',
                status: '',
                isClient: false,
                clientId: null,
            }));
        }

        const fetchData = async () => {
            const clientsData = await Repo.ClientProfileRepository.getClientProfiles();
            dispatch(setClientProfiles(clientsData || []))
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
                    {children}
                </div>
            </div>
        </>
    );
}