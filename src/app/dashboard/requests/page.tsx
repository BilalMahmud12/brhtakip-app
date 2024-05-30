'use client';
import * as Repo from '@/repository/index'
import React, { useEffect } from 'react';
import { useStore } from '@/stores/utils/useStore';
import { observer } from 'mobx-react-lite';
import RequestsView from './src/requestsView';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react'
import type { Request } from '@/API';
import { generateRequestNumber } from '@/utils/helpers';
import Link from 'next/link';
import Icon from '@/components/core/icon';
import ClientSelectForm from './src/clientSelectForm';
import { useDataModal } from '@/contexts/DataModalContext';
import { useRouter } from 'next/navigation'

const requestNavigation = [
    {
        href: '/dashboard/requests/pending-approval',
        label: 'Onay Bekleyen Talepler',
        icon: <Icon iconName='FcFinePrint' className='' />
    },
    {
        href: '/dashboard/requests/in-design',
        label: 'Tasarımdaki Talepler',
        icon: <Icon iconName='FcEditImage' className='' />
    },
    {
        href: '/dashboard/requests/in-print',
        label: 'Baskıdaki Talepler',
        icon: <Icon iconName='FcPrint' className='' />
    },
    {
        href: '/dashboard/requests/in-application',
        label: 'Uygulamadaki Talepler',
        icon: <Icon iconName='FcServices' className='' />
    },
    {
        href: '/dashboard/requests/completed',
        label: 'Tamamlanan Talepler',
        icon: <Icon iconName='FcOk' className='' />
    },
    {
        href: '/dashboard/requests/cancelled',
        label: 'İptal Edilen Talepler',
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

const Request: React.FC = observer(() => {
    const router = useRouter()
    const { requestStore, userStore } = useStore();
    const { userData } = userStore;

    const { showDataModal, hideDataModal } = useDataModal();

    useEffect(() => {
        const requestNumber: string = generateRequestNumber();
        console.log('requestNumber', requestNumber);

        const fetchData = async () => {
            const requestsData = await Repo.RequestRepository.getAllRequests();
            requestStore.initStore({ requests: [...requestsData as unknown as Request[]] });
            console.log('requests', requestsData)
        }; 
        fetchData();
    }, []);

    const handleCancelForm = () => {
        requestStore.resetFormValues()
        hideDataModal()
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
                        hideDataModal()
                        router.push('/dashboard/requests/create')
                    }}
                    handleCancel={handleCancelForm}
                />
            )
        }
    }

    return (
        <div>
            <title>Talepler Yönetimi - BRH Takip</title>
            <div className='bg-white shadow px-6 py-4 mb-4 flex items-center justify-between'>
                <div>
                    <div className=''>
                        <h2 className='text-2xl font-medium'>Talepler</h2>
                    </div>
                </div>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCreateForm}
                    className='shadow rounded-md bg-amber-500 text-gray-800 px-6'
                >
                    <span>Talep Oluştur</span>
                </Button>
            </div>

            {/**
            <div className='px-6 py-3 bg-white shadow mb-8'>
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
                    className='text-sm font-medium'
                />
            </div>
            */}

            <div className='grid grid-cols-4 gap-4 mb-8'>
                {requestNavigation.map((nav, index) => (
                    <Link
                        href={nav.href} 
                        key={index} 
                        className='col-span-1 bg-white shadow flex items-center justify-start'
                    >
                        <span className='flex items-center w-full'>
                            <span className='px-4 py-4 border-r border-gray-100 text-3xl'>{nav.icon}</span>
                            <span className='px-4 py-4 text-sm text-center font-semibold'>{nav.label}</span>
                        </span>
                        
                    </Link>
                ))}
            </div>

            {/** 
            <RequestsView />
            */}
        </div>
    );
})

export default Request;

function showDataModal(arg0: React.JSX.Element, arg1: React.JSX.Element, arg2: React.JSX.Element) {
    throw new Error('Function not implemented.');
}
