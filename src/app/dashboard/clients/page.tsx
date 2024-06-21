'use client';
import React from 'react';
import { permissions } from '@/config/index';
import withAuthorization from '../../withAuthorization';

const ClientProfiles: React.FC =  () => {
    return (
        <div>Client Profiles</div>
    )
}

export default withAuthorization([permissions.VIEW_CLIENTS])(ClientProfiles);