'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useRouter, usePathname } from 'next/navigation';
import ProductView from '../src/products/src/productView';
import { Brand, Product } from '@/API';
import ProductsDataTable from '../src/products/src/productsDataTable';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setBrands, resetFormValues, setBrandFormValues } from '@/reduxStore/features/brandSlice';
import { setProducts, resetProductFormValues, setProductFormValues } from '@/reduxStore/features/productSlice';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UpdateBrand: React.FC = (() => {
    const router = useRouter();
    const pathName = usePathname()
    const [haveProduct, setHaveProduct] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const dispatch = useAppDispatch<AppDispatch>();
    const productForm = useAppSelector((state: RootState) => state.product.productForm);
    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);

    const brandformRef = useRef(brandForm);
    brandformRef.current = brandForm;

    // React.useEffect(() => {
    //     const brandID = pathName.split('/').pop()
    //     const targetBrand = brands.find(brand => brand.id === brandID)

    //     if (targetBrand) {
    //         const { updatedAt, createdAt, __typename, Products, clientprofileID, id ...restOfTheBrand } = targetBrand
    //         console.log('targetUser', targetBrand)
    //         brandformRef.current = { restOfTheBrand }
    //         dispatch(setBrandFormValues({ restOfTheBrand }))
    //     }
    //     console.log('pathname', pathName.split('/').pop())
    // }, [pathName])

    async function handleUpdateBrand() {
        try {
            const updateBrand = await Repo.BrandRepository.update(brandformRef.current);

            if (updateBrand && updateBrand.data) {
                dispatch(resetFormValues());
                const newBrand = await Repo.BrandRepository.getAllBrands();
                dispatch(setBrands(newBrand as unknown as Brand[]))
                router.replace(`/dashboard/system/brands`);
            }
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
            <div >
                <title>Marka Güncelle - BRH Takip</title>

                <div className='h-full'>
                    <div className='h-full col-span-2'>
                        <div className='flex items-center justify-between'>
                            <Button
                                variant="text"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => router.push('/dashboard/system/brands')}
                            >
                                Markalara Geri Dön
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleUpdateBrand}
                            >
                                Kaydı Et
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <CreateOrUpdateForm isCreate={false} />
                </div>
            </div>

            <ProductView
                haveProduct={haveProduct}
                brandId={brandForm.id}
                filteredProducts={filteredProducts}
                fetchFilteredProducts={fetchFilteredProducts}
            />
        </div>
    );
});

export default UpdateBrand;
