'use client'
import React, { useEffect } from 'react'
import { permissions } from '@/config/index';
import withAuthorization from '../../withAuthorization';
import * as Repo from '@/repository'
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';
import UsersView from './src/usersView'

const UsersPage: React.FC = () => {
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
        <div>
            <title>Sistem Kullanıcıları - BRH Takip</title>
            
            <UsersView />
        </div>
    )
}

export default withAuthorization([permissions.VIEW_USERS])(UsersPage)
