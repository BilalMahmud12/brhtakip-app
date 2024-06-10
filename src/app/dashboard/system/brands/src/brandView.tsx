'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setBrands, resetFormValues, setBrandFormValues } from '@/lib/features/brandSlice';

import { observer } from 'mobx-react-lite';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import BrandsDataTable from './brandsDataTable';
import ClientSelectForm from './clientSelectForm';
import { usePathname, useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';

interface BrandsViewProps {
    onDelete: (data: any) => Promise<void>;
    // getClientName: (data: any) => Promise<void>
}

const SelectClientModalFooter = (props: { handleConfirm: () => void; handleCancel?: () => void; }) => {
    const { handleConfirm = () => { }, handleCancel = () => { } } = props;

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
    );
};

const BrandsView: React.FC<BrandsViewProps> = observer(({ onDelete }) => {
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();

    const userData = useAppSelector((state: RootState) => state.user.userData);
    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);

    const { showDataModal, hideDataModal } = useDataModal();
    const router = useRouter();

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Marka Ekle</span></div>,
            <ClientSelectForm
            // brand={brandForm}
            />,
            <SelectClientModalFooter
                handleConfirm={() => {
                    hideDataModal();
                    router.push('/dashboard/system/brands/create');
                }}
                handleCancel={handleCancelForm}
            />
        );
    };

    const getClientName = (clientProfileId: string) => {
        // console.log('Coming Data', clientProfileId);

        const clientProfile = clientProfiles?.find(profile => profile.id === clientProfileId);
        console.log('Get Client Name', clientProfile?.name);

        return clientProfile?.name || '';
    };

    // const setBrandUpdateData = (data: any) => {
    //     dispatch(setBrandFormValues({
    //         id: data.id,
    //         name: data.name,
    //         isActive: data.isActive,
    //         clientprofileID: data.clientprofileID
    //     }));
    // };

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
                    dataPayload={brands}
                    getClientName={getClientName}
                    onDeleteBrand={onDelete}
                // handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    );
});

export default BrandsView;
