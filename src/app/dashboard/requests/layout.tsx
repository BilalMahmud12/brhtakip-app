'use client'
import React, { useEffect, useState } from 'react'
import * as Repo from '@/repository/index'
import { useStore } from '@/stores/utils/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import { generateRequestNumber } from '@/utils/helpers';
import { useRouter, usePathname } from 'next/navigation';
import type { Request, RequestStatus } from '@/API';
import Icon from '@/components/core/icon';
import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';
import { toast } from 'sonner';
import ClientSelectForm from './src/clientSelectForm';
import CreateOrUpdateForm from './src/createOrUpdateForm';
import { toJS } from 'mobx';
import { request } from 'http';

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

const SelectClientModalFooter = (
    props: {
        handleConfirm: () => void
        handleCancel?: () => void;
    }
) => {
    const {
        handleConfirm = () => { },
        handleCancel = () => { },
    } = props

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İptal Et</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleConfirm}
                    className='rounded-none bg-amber-500 text-gray-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>Devam Et</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}

const ModalCustomFooter = (
    props: {
        type: 'create' | 'update'
        handleCreate?: (data: any) => void;
        handleUpdate?: (data: any) => void;
        handleCancel?: () => void;
    }
) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { },
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-blue-900 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default function RequestLayout(
    { children }: Readonly<{children: React.ReactNode;}>
) {
    const router = useRouter();
    const pathname = usePathname();
    const { requestStore, userStore } = useStore();
    const { userData } = userStore;

    const { showDataModal, hideDataModal } = useDataModal();

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
            requestStore.setIsFetching(true);
            const requestsData = await Repo.RequestRepository.getRequestsByStatus(`${requestStatus()}`);

            if (requestsData) {
                const sortedRequests = (requestsData as unknown as Request[]).sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });

                requestStore.setRequests([] as Request[]);
                requestStore.setRequests(sortedRequests);
            }

            requestStore.setIsFetching(false);
        };

        if (requestStatus() !== undefined) {
            fetchData();
        }
    }, [pathname]);

    async function handleCreateRequest() {
        try {
            const createRequest = await Repo.RequestRepository.create(toJS(requestStore.getRequestFormValues))

            if (createRequest && createRequest.data) {
                router.replace('/dashboard/requests')
                requestStore.resetFormValues()
            }
        } catch (error) {
            console.log('Error')
            alert(`Error while creating: ${error}`)
        }
    }

    const handleCreateForm = () => {
        if (userData.isClient) {
            // @TODO apply client case logic
        } else {
            showDataModal(
                <div><span className='text-sm font-bold'>Müşteri Seç</span></div>,
                <ClientSelectForm />,
                <SelectClientModalFooter
                    handleConfirm={() => {
                        //hideDataModal()
                        //router.push('/dashboard/requests/create')
                        
                        showDataModal(
                            <div><span className='text-base font-bold'>Talep Oluştur</span></div>,
                            <CreateOrUpdateForm
                                isCreate={true}
                            />,
                            <ModalCustomFooter
                                type='create'
                                handleCreate={handleCreateRequest}
                                handleCancel={handleCancelForm}
                            />
                        )
                    }}
                    handleCancel={handleCancelForm}
                />
            )
        }
    }

    const handleCancelForm = () => {
        requestStore.resetFormValues()
        hideDataModal()
    }
    
    return (
        <div>
            <div className='grid grid-cols-6 border-b border-zinc-200'>
                {requestNavigation.map((nav, index) => (
                    <Link
                        onClick={() => requestStore.setRequests([] as Request[])}
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