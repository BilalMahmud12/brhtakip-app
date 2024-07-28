'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import * as Repo from '@/repository'
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const isBRHAdmin = currentUserProfile?.clientprofileID === 'BRH_ADMIN';

    console.log('currentUserProfile', currentUserProfile);

    
    const fetchAndSetUsers = async () => {
        dispatch(setIsFetching(true));
        const users = await Repo.UserRepository.getUsersByClient(isBRHAdmin ? 'BRH_ADMIN' : currentUserProfile?.clientprofileID as string);

        if (users) {
            dispatch(setUsers(users));
        }

        dispatch(setIsFetching(false));
    }

    React.useEffect(() => {
        fetchAndSetUsers();
    }, [pathname]);

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}