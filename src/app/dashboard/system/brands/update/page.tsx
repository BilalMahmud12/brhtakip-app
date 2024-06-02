'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/stores/utils/useStore';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { toJS } from 'mobx';
import { useRouter } from 'next/navigation';
import ProductsDataTable from '../src/products/src/productsDataTable';
import type { Product } from '@/API';


const UpdateBrand: React.FC = observer(() => {
    const { brandStore, productStore } = useStore();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await Repo.ProductRepository.getAllProducts();
                productStore.initStore({ products: productsData as unknown as Product[] });
                console.log('brands', productsData);
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };
        fetchData();
    }, [])

    async function handleUpdateForm(data: any) {
        try {
            const updateBrand = await Repo.BrandRepository.update(data);
            console.log('updated brand', updateBrand);

            router.replace('/dashboard/system/brands');
            brandStore.resetFormValues();
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
                            {
                                href: '/dashboard',
                                label: 'Panel Girişi',
                            },
                            {
                                href: '/dashboard/system/brands',
                                label: 'Markalar',
                            },
                            {
                                label: 'Marka Güncelle',
                            }
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
                                    // onClick={() => handleUpdateForm(brandStore.formValues)}
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
                <div className='mt-1.5 shadow bg-white py-6'>
                    <div className='px-6 mb-3 flex items-center justify-between'>
                        <div>
                            <div className=''>
                                <h2 className='text-2xl font-medium'>Bağlı Ürünler</h2>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variation="primary"
                                    colorTheme="success"
                                    size="small"
                                    loadingText=""
                                    // onClick={}
                                    className='rounded-none bg-amber-500 text-gray-800 px-6'
                                >
                                    <span>Ürün Ekle</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-1.5 shadow bg-white py-6'>
                        <ProductsDataTable
                            dataPayload={productStore.products}
                            handleEdit={(data) => console.log('edit', data)}
                            handleDelete={(data) => console.log('delete', data)}
                            handleSelect={(data) => console.log('select', data)}
                        />
                    </div>
                </div>
            </div>
            {/* END PRODUCT SECTION */}


        </div>
    );
});

export default UpdateBrand;
