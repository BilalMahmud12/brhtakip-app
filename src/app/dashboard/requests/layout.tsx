'use client'
import React, { useEffect } from 'react'
import * as Repo from '@/repository/index'
import { usePathname } from 'next/navigation';
import type { Request, RequestStatus } from '@/API';
import Icon from '@/components/core/icon';
import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setRequests, setIsFetching } from '@/lib/features/requestSlice';

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
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    
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
            dispatch(setIsFetching(true));
            const requestsData = await Repo.RequestRepository.getRequestsByStatus(`${requestStatus()}`);

            if (requestsData) {
                const sortedRequests = (requestsData as unknown as Request[]).sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });

                dispatch(setRequests([]));
                dispatch(setRequests(sortedRequests))
            }

            dispatch(setIsFetching(false));
        };

        if (requestStatus() !== undefined) {
            fetchData();
        }
    }, [pathname]);
    
    return (
        <div>
            <div className='grid grid-cols-6 border-b border-zinc-200'>
                {requestNavigation.map((nav, index) => (
                    <Link
                        onClick={() => dispatch(setRequests([]))}
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
        
            <div className='px-8'>
                {children}
            </div>
        </div>
    )
}