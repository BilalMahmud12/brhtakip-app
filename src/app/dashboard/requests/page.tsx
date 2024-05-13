'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import RequestsView from './src/requestsView';
import { Breadcrumbs } from '@aws-amplify/ui-react'

const Request: React.FC = observer(() => {
    return (
        <div>
            <title>Talepler Yönetimi - BRH Takip</title>

            <Breadcrumbs
                items={[
                    {
                        href: '/dashboard',
                        label: 'Panel Girişi',
                    },
                    {
                        href: '/dashboard/requests',
                        label: 'Talepler',
                    }
                ]}
            />

            <RequestsView />
        </div>
    );
})

export default Request;