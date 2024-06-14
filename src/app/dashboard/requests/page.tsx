'use client';
import React from 'react';
import { permissions } from '@/config/index';
import withAuthorization from '../../withAuthorization';
import RequestsView from './src/requestsView';
import type { Request } from '@/API';

const Request: React.FC = () => {
    return (
        <div>
            <title>Onay Bekleyen Talepler - BRH Takip</title>

            <RequestsView />
        </div>
    );
}

export default withAuthorization([permissions.VIEW_REQUESTS])(Request);