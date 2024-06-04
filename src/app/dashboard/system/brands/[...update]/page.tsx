'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/stores/utils/useStore';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter, usePathname } from 'next/navigation';
import ProductView from '../src/products/src/productView';
import { toJS } from 'mobx';



const UpdateBrand: React.FC = observer(() => {
    const { brandStore, productStore } = useStore();
    const router = useRouter();
    const pathName = usePathname();
    const { getBrandFormValues, handleFormChange } = brandStore;

    // console.log('get Brand Form Values', toJS(getBrandFormValues));

    async function handleUpdateBrand() {
        try {
            const updateBrand = await Repo.BrandRepository.update(toJS(brandStore.getBrandFormValues));
            // console.log('updated brand', updateBrand);

            brandStore.resetFormValues();
            router.replace('/dashboard/system/brands');
        } catch (error) {
            console.error('Error updating brand:', error);
        }
    }

    return (
        <div>
            {/* START UPDATE BRAND SECTION */}
            <div>
                <title>Marka Güncelle</title>
                <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                    <Breadcrumbs
                        items={[
                            { href: '/dashboard', label: 'Panel Girişi' },
                            { href: '/dashboard/system/brands', label: 'Markalar' },
                            { label: 'Marka Güncelle' }
                        ]}
                        className='text-sm font-medium'
                    />
                </div>

                <div className='mt-1.5 shadow bg-white py-6'>
                    <div className='px-6 mb-3 flex items-center justify-between'>
                        <div>
                            <div className=''>
                                <h2 className='text-2xl font-medium'>Marka Güncelle</h2>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variation="primary"
                                    colorTheme="success"
                                    size="small"
                                    loadingText=""
                                    onClick={handleUpdateBrand}
                                    className='rounded-none bg-amber-500 text-gray-800 px-6'
                                >
                                    <span>Güncelle</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 px-8 py-8 m-6 shadow bg-neutral-100'>
                        <CreateOrUpdateForm
                            isCreate={false}
                        />
                    </div>
                </div>
            </div>
            {/* END UPDATE BRAND SECTION */}

            <div className='my-2 pt-5' />

            {/* START PRODUCT SECTION */}
            <div>
                <ProductView
                    brandId={getBrandFormValues.id ?? ''}
                />
            </div>
            {/* END PRODUCT SECTION */}
        </div>
    );
});

export default UpdateBrand;
