'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Brand } from '@/API';

const Brand: React.FC = observer(() => {

    return (
        <div>
            <title>Markalar - BRH Takip</title>

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/brands',
                            label: 'Markalar',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
        </div>
    );
});

export default Brand;
