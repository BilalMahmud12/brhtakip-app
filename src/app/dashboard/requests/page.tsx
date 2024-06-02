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
            <title>Onay Bekleyen Talepler - BRH Takip</title>

            <RequestsView />
        </div>
    );
})

export default Request;