'use client';
import React from 'react';
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

export default Request;