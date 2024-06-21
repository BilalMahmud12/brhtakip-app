'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setBrandFormValues, resetFormValues } from '@/reduxStore/features/brandSlice';
import { RootState, AppDispatch } from '@/reduxStore/store';

const CreateBrandPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const brandForm = useSelector((state: RootState) => state.brand.brandForm);

    async function handleCreateBrand() {
        try {
            const createBrand = await Repo.BrandRepository.create(brandForm);

            console.log('new created brand', createBrand);

            if (createBrand && createBrand.data) {
                router.replace('/dashboard/system/brands');
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div>
            <title>Marka Ekle - BRH Takip</title>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateBrandPage;
