'use client'
import React, { useEffect } from 'react'
import { permissions } from '@/config/index';
import withAuthorization from '../../withAuthorization';
import * as Repo from '@/repository'
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { setUsers, setIsFetching } from '@/reduxStore/features/userSlice';
import UserProfileView from './src/userProfileView';

const UserProfilePage: React.FC = () => {

    return (
        <div>
            <title>Kullanıcı Profili - BRH Takip</title>
            <UserProfileView />
        </div>
    )
}

export default UserProfilePage