'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import * as Repo from '@/repository'
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    
    const fetchAndSetUsers = async () => {
        dispatch(setIsFetching(true));
        const users = await Repo.UserRepository.getUsersByClient('BRH_ADMIN');

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