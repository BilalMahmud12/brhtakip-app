'use client'
import React from 'react'
//import { permissions } from '@/config/index';
//import WithAuthorization from '../../withAuthorization';
import UsersView from './src/UsersView'

const UsersPage: React.FC = () => {
    return (
        <React.Fragment>
            <title>Sistem Kullanıcıları - BRH Takip</title>
            
            <UsersView />
        </React.Fragment>
    )
}

export default UsersPage

//export default WithAuthorization([permissions.VIEW_USERS])(UsersPage)
