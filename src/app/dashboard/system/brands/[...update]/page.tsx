'use client';
import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter, usePathname } from 'next/navigation';
import ProductView from '../src/products/src/productView';
import { Product } from '@/API';
import ProductsDataTable from '../src/products/src/productsDataTable';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { resetFormValues } from '@/lib/features/brandSlice';
import { setProducts, resetProductFormValues, setProductFormValues } from '@/lib/features/productSlice';

const UpdateBrand: React.FC = (() => {
    const router = useRouter();
    usePathname();

    const [haveProduct, setHaveProduct] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const dispatch = useAppDispatch<AppDispatch>();
    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles);

    const products = useAppSelector((state: RootState) => state.product);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);

    async function handleUpdateBrand() {
        try {
            const updateBrand = await Repo.BrandRepository.update(brandForm);
            dispatch(resetFormValues());
            router.replace(`/dashboard/system/brands`);
        } catch (error) {
            console.error('Error updating brand:', error);
        }
    }

    const fetchFilteredProducts = async () => {
        try {
            const productsData = await Repo.ProductRepository.getAllProducts();

            if (productsData) {
                const filtered = productsData.filter(product => product.brandID === brandForm.id);
                console.log('filtered', filtered)

                setFilteredProducts(filtered);
                dispatch(setProducts(filtered));
                setHaveProduct(filtered.length > 0);
            }
        } catch (error) {
            console.error('Failed to fetch products', error);
            setHaveProduct(false);
        }
    };

    useEffect(() => {
        fetchFilteredProducts();
    }, [brandForm.id]);


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
                        <h2 className='text-2xl font-medium'>Marka Güncelle</h2>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            onClick={handleUpdateBrand}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Güncelle</span>
                        </Button>
                    </div>

                    <div className='mt-8 px-8 py-8 m-6 shadow bg-neutral-100'>
                        <CreateOrUpdateForm isCreate={false} />
                    </div>
                </div>
            </div>
            {/* END UPDATE BRAND SECTION */}

            {/* <div className='my-2 pt-5' /> */}


            {/* START PRODUCT SECTION */}

            <ProductView
                haveProduct={haveProduct}
                brandId={brandForm.id}
                filteredProducts={filteredProducts}
                fetchFilteredProducts={fetchFilteredProducts}
            />

            {/* END PRODUCT SECTION */}
        </div>
    );
});

export default UpdateBrand;
