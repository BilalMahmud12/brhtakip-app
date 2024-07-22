'use client';
import React from 'react';
//import { permissions } from '@/config/index';
//import withAuthorization from '../../withAuthorization';
import ClientsView from './src/clientsView';

const ClientProfiles: React.FC =  () => {
    return (
        <React.Fragment>
            <title>Firmalar - BRH Takip</title>
            <ClientsView />
        </React.Fragment>
    )
}

export default ClientProfiles;

//export default withAuthorization([permissions.VIEW_CLIENTS])(ClientProfiles);