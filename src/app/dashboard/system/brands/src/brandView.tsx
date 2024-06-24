'use client'
import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import * as Repo from '@/repository/index';
import BrandsDataTable from './brandsDataTable';
import { usePathname, useRouter } from 'next/navigation';
import { setBrandFormValues, setBrands } from '@/reduxStore/features/brandSlice';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Brand } from '@/API';


const BrandsView: React.FC = () => {

    usePathname();
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();

    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);

    const brandformRef = useRef(brandForm);
    brandformRef.current = brandForm;

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

    const handleDelete = async (data: any) => {
        try {
            const deleteBrand = await Repo.BrandRepository.softDelete(data.originalData.id);
            if (deleteBrand && deleteBrand.data) {
                const newBrand = await Repo.BrandRepository.getAllBrands();
                dispatch(setBrands(newBrand as unknown as Brand[]));
            }
        } catch (error) {
            console.log('Failed to delete brand', error);
        }
    };

    return (
        <div>
            <div className='px-6 py-3'>
                <div className='mt-1.5 shadow bg-white'>
                    <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Markalar</h1>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() => router.push('/dashboard/system/brands/create')}
                                >
                                    Marka Ekle
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 bg-white shadow'>
                    <BrandsDataTable
                        dataPayload={brands}
                        getClientName={getClientName}
                        onDeleteBrand={handleDelete}
                        handleEdit={setBrandUpdateData}
                    />
                </div>
            </div>
        </div>
    );
};

export default BrandsView;
