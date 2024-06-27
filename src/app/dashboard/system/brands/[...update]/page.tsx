'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
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
    const pathName = usePathname();
    const [haveProduct, setHaveProduct] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product.products); // Assuming you have products in your Redux store
    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);

    const brandformRef = useRef(brandForm);
    brandformRef.current = brandForm;

    useEffect(() => {
        const brandID = pathName.split('/').pop();
        const targetBrand = brands.find(brand => brand.id === brandID);

        if (targetBrand) {
            const { updatedAt, createdAt, __typename, Products, ...restOfTheBrand } = targetBrand;

            const updatedBrandForm = {
                id: restOfTheBrand.id || '',
                name: restOfTheBrand.name || '',
                isActive: restOfTheBrand.isActive ?? false,
                clientprofileID: restOfTheBrand.clientprofileID || '',
            };

            brandformRef.current = updatedBrandForm;
            dispatch(setBrandFormValues(updatedBrandForm));
        }
    }, [pathName, brands, dispatch]);


    async function handleUpdateBrand() {
        try {
            const updateBrand = await Repo.BrandRepository.update(brandformRef.current);

            if (updateBrand && updateBrand.data) {
                dispatch(resetFormValues());
                const newBrandList = await Repo.BrandRepository.getAllBrands();
                dispatch(setBrands(newBrandList as unknown as Brand[]));
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
                console.log('filtered', filtered);

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
            <div>
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
                    {brands.length > 0 && (
                        <CreateOrUpdateForm
                            isCreate={false}
                            brand={brandForm as Brand}
                        />
                    )}
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
