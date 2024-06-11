'use client'
import { Breadcrumbs } from '@aws-amplify/ui-react';
import React, { useEffect } from 'react';
import MaterialView from './src/materialView';

const Material: React.FC = () => {
    return (
        <div>
            <title>Malzemeler</title>
            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/malzemeler',
                            label: 'Malzemeler',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <div>
                <MaterialView />
            </div>
        </div>
    )
}

export default Material
