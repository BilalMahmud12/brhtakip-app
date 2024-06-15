'use client'
import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setBrands, resetFormValues, setBrandFormValues } from '@/lib/features/brandSlice';

import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import BrandsDataTable from './brandsDataTable';
import ClientSelectForm from './clientSelectForm';
import { usePathname, useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from './createOrUpdateForm';
import { Brand } from '@/API';

interface BrandsViewProps {
    onDelete: (data: any) => Promise<void>;
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
                    onClick={handleCreate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}


const BrandsView: React.FC<BrandsViewProps> = (({ onDelete }) => {
    const pathname = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();

    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);

    const brandformRef = useRef(brandForm);

    useEffect(() => {
        brandformRef.current = brandForm;
    }, [brandForm])

    const { showDataModal, hideDataModal } = useDataModal();

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Marka Ekle</span></div>,
            <CreateOrUpdateForm
                isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateBrand}
            />
        );
    };

    async function handleCreateBrand() {
        try {
            const createBrand = await Repo.BrandRepository.create(brandformRef.current);
            if (createBrand && createBrand.data) {
                const newBrand = await Repo.BrandRepository.getAllBrands();
                dispatch(setBrands(newBrand as unknown as Brand[]));
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.error('Error', error);
        }
    }

    const getClientName = (clientProfileId: string) => {
        const clientProfile = clientProfiles?.find(profile => profile.id === clientProfileId);
        return clientProfile?.name || '';
    };

    const setBrandUpdateData = (data: any) => {
        dispatch(setBrandFormValues({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            clientprofileID: data.clientprofileID
        }));
    };

    return (
        <div className='px-6 py-3'>
            <div className='mt-1.5 shadow bg-white'>
                <div className='px-6 py-3 mb-3 flex items-center justify-between'>
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
            <div className='mt-8 bg-white shadow'>
                <BrandsDataTable
                    dataPayload={brands}
                    getClientName={getClientName}
                    onDeleteBrand={onDelete}
                    handleEdit={setBrandUpdateData}
                />
            </div>
        </div>
    );
});

export default BrandsView;
