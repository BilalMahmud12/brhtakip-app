'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setBrandFormValues, resetFormValues } from '@/lib/features/brandSlice';
import { RootState, AppDispatch } from '@/lib/store';

const CreateBrand: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const brandForm = useSelector((state: RootState) => state.brand.brandForm);

    async function handleCreateBrand() {
        try {
            console.log('brandForm', brandForm);
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
            <title>Marka Ekle</title>

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/brands',
                            label: 'Markalar',
                        },
                        {
                            label: 'Marka Ekle',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <div className='mt-1.5 shadow bg-white py-6'>
                <div className='px-6 mb-3 flex items-center justify-between'>
                    <div>
                        <div className=''>
                            <h2 className='text-2xl font-medium'>Yeni Marka Oluştur</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={handleCreateBrand}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Ekle</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='my-2 pt-5' />

                <div className='mt-8 px-8 py-8 m-6 shadow bg-neutral-100'>
                    <CreateOrUpdateForm
                        isCreate={true}
                    />
                </div>

            </div>
        </div>
    );
}

export default CreateBrand;
