'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/stores/utils/useStore';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import * as Repo from '@/repository/index'
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { toJS } from 'mobx';
import { useRouter } from 'next/navigation'

const CreateBrand: React.FC = observer(() => {
    const { brandStore } = useStore();
    const router = useRouter()

    async function handleCreateBrand() {
        try {
            const createBrand = await Repo.BrandRepository.create(toJS(brandStore.getBrandFormValues))
            console.log('new created brand', createBrand)

            router.replace('/dashboard/system/brands')
            brandStore.resetFormValues()
        } catch (error) {
            console.log('Error')
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
        </div >
    );
})

export default CreateBrand