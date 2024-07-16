'use client'
import React, { useEffect } from 'react'
import { permissions } from '@/config/index';
import withAuthorization from '../../withAuthorization';
import * as Repo from '@/repository'
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';
import UsersView from './src/usersView'

export default function UserLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch<AppDispatch>();

    // TODO - Fetch users according to current user's role and client Profile
    const fetchAndSetUsers = async () => {
        dispatch(setIsFetching(true));
        const users = await Repo.UserRepository.getAllUsers();

        if (users) {
            dispatch(setUsers(users));
        }

        dispatch(setIsFetching(false));
    }

    useEffect(() => {
        fetchAndSetUsers();
    }, [])
    return (
        <div className=''>
            {children}
        </div>
    )
}