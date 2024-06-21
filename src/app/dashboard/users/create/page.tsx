'use client'
import React from 'react'
import { permissions } from '@/config/index';
import withAuthorization from '../../../withAuthorization';
import * as Repo from '@/repository'

import CreateOrUpdateForm from './src/createOrUpdateForm'


const UserCreatePage: React.FC = () => {
    return (
        <div>
            <title>Kullanıcı Ekle - BRH Takip</title>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    )
}

export default withAuthorization([permissions.CREATE_USERS])(UserCreatePage)