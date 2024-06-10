'use client'
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/utils/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react'
import BrandsDataTable from './brandsDataTable';
import ClientSelectForm from './clientSelectForm';
import { useRouter } from 'next/navigation';
import * as Repo from '@/repository/index'

interface BrandsViewProps {
    onDelete: (data: any) => Promise<void>;
    // getClientName: (data: any) => Promise<void>
}

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

const BrandsView: React.FC<BrandsViewProps> = observer(({ onDelete, }) => {
    const { brandStore, clientProfileStore } = useStore();
    const { showDataModal, hideDataModal } = useDataModal();
    const router = useRouter()

    const handleCancelForm = () => {
        brandStore.resetFormValues()
        hideDataModal()
    }

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Marka Ekle</span></div>,
            <ClientSelectForm />,
            <SelectClientModalFooter
                handleConfirm={() => {
                    hideDataModal();
                    router.push('/dashboard/system/brands/create')
                }}
                handleCancel={handleCancelForm}
            />
        )
    }


    const getClientName = async (data: string) => {
        console.log('Coming Data', data);
        try {
            const clientProfiles = await Repo.ClientProfileRepository.getClientProfiles();
            const clientProfile = clientProfiles?.find(profile => profile.id === data);
            console.log('Get Client Name', clientProfile?.name);
            clientProfile?.name;
        } catch (error) {
            console.error('Failed to get client profiles', error);
        }
    };

    const setBrandUpdateData = (data: any) => {
        brandStore.setBrandFormValues({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            clientprofileID: data.clientprofileID
        });
    }


    return (
        <div>
            <div className='mt-1.5 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <div>
                        <div className=''>
                            <h2 className='text-2xl font-medium'>Markalar</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>

                        <div className='flex items-center space-x-2'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={handleCreateForm}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Marka Ekle</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <BrandsDataTable
                    dataPayload={brandStore.getBrands}
                    getClientName={getClientName}
                    onDeleteBrand={onDelete}
                    handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    );
});

export default BrandsView;