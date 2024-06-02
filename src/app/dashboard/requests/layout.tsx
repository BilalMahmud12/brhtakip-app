'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import { useStore } from '@/stores/utils/useStore';
import { generateRequestNumber } from '@/utils/helpers';
import { useRouter, usePathname } from 'next/navigation';
import type { Request, RequestStatus } from '@/API';
import Icon from '@/components/core/icon';
import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';

const statusMap = {
    'pending-approval': 'PENDING_APPRVOAL',
    'in-design': 'IN_DESIGN',
    'in-print': 'IN_PRESS',
    'in-application': 'IN_APPLICATION',
    'completed': 'COMPLETED',
    'cancelled': 'CANCELLED',
}

const getPageTitle = (status: string) => {
    switch (status) {
        case 'PENDING_APPROVAL':
            return 'Onay Bekleyen Talepler';
        case 'IN_DESIGN':
            return 'Tasarımdaki Talepler';
        case 'IN_PRESS':
            return 'Baskıdaki Talepler';
        case 'IN_APPLICATION':
            return 'Uygulamadaki Talepler';
        case 'COMPLETED':
            return 'Tamamlanan Talepler';
        case 'CANCELLED':
            return 'İptal Edilen Talepler';
        default:
            return 'Talepler';
    }
}

const requestNavigation = [
    {
        href: '/dashboard/requests',
        label: 'Onay Bekleyen',
        icon: <Icon iconName='FcFinePrint' className='' />
    },
    {
        href: '/dashboard/requests/in-design',
        label: 'Tasarımdaki',
        icon: <Icon iconName='FcEditImage' className='' />
    },
    {
        href: '/dashboard/requests/in-print',
        label: 'Baskıdaki',
        icon: <Icon iconName='FcPrint' className='' />
    },
    {
        href: '/dashboard/requests/in-application',
        label: 'Uygulamadaki',
        icon: <Icon iconName='FcServices' className='' />
    },
    {
        href: '/dashboard/requests/completed',
        label: 'Tamamlanan',
        icon: <Icon iconName='FcOk' className='' />
    },
    {
        href: '/dashboard/requests/cancelled',
        label: 'İptal Edilen',
        icon: <Icon iconName='FcCancelIcon' className='' />
    }
]

export default function RequestLayout(
    { children }: Readonly<{children: React.ReactNode;}>
) {
    const router = useRouter();
    const pathname = usePathname();
    const { requestStore } = useStore();

    const statusMap: { [key: string]: string } = {
        'pending-approval': 'PENDING_APPROVAL',
        'in-design': 'IN_DESIGN',
        'in-print': 'IN_PRESS',
        'in-application': 'IN_APPLICATION',
        'completed': 'COMPLETED',
        'cancelled': 'CANCELLED',
    };

    const requestStatus= (): string => {
        const status: string = statusMap[pathname.split('/').pop() as string];
        return status !== undefined ? status : 'PENDING_APPROVAL' as RequestStatus;
    };

    useEffect(() => {
        const fetchData = async () => {
            const requestsData = await Repo.RequestRepository.getRequestsByStatus(`${requestStatus()}`);

            if (requestsData) {
                requestStore.initStore({ requests: [...requestsData as unknown as Request[]] });
                console.log('Request Data from layout', requestsData)
            }
        };

        if (requestStatus() !== undefined) {
            fetchData();
        }
    }, [pathname]);

    const handleCreateForm = () => {
        console.log('Create Request')
    }
    
    return (
        <div>
            
            <div className='grid grid-cols-6 border-b border-zinc-200'>
                {requestNavigation.map((nav, index) => (
                    <Link
                        href={nav.href}
                        key={index}
                        className='col-span-1 px-3 py-2 bg-white flex items-center justify-start border-r border-zinc-200 hover:bg-zinc-100 cursor-pointer transition-all duration-200 ease-in-out'
                    >
                        <span className='flex items-center space-x-2 w-full'>
                            <span className='text-xl'>{nav.icon}</span>
                            <span className='text-xs text-center font-semibold'>{nav.label}</span>
                        </span>

                    </Link>
                ))}
            </div>

            <div className='flex items-center justify-between px-8 py-4'>
                <div>
                    <div className=''>
                        <h2 className='text-xl font-medium'>{getPageTitle(requestStatus())}</h2>
                    </div>
                </div>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCreateForm}
                    className='rounded-md bg-amber-500 text-gray-800 px-6'
                >
                    <span>Talep Oluştur</span>
                </Button>
            </div>

            <div className='px-8'>
                {children}
            </div>
        </div>
    )
}