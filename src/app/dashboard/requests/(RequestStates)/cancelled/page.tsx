'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import { useStore } from '@/stores/utils/useStore';
import Icon from '@/components/core/icon';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import RequestsView from '../../src/requestsView';
import { generateRequestNumber } from '@/utils/helpers';
import type { Request } from '@/API';

const PendingApproval = () => {
    return (
        <div>
            <title>İptal Edilen Talepler - BRH Takip</title>
            
            <div className='bg-white shadow px-6 py-4 mb-4 flex flex-col'>
                <div className='mb-2'>
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
                        className='text-xs font-medium'
                    />
                </div>
                <div>
                    <div className='flex items-center space-x-3'>
                        <span className='text-3xl'>
                            <Icon iconName='FcFinePrint' className='' />
                        </span>
                        <h2 className='text-xl font-medium'>Onay Bekleyen Talepler</h2>
                    </div>
                </div>
            </div>

            <RequestsView />
        </div>
    )
}

export default PendingApproval