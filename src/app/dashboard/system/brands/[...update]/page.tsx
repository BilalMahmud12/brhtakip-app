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
import { setBrands, resetFormValues, setBrandFormValues, handleFormChange, validateForm } from '@/reduxStore/features/brandSlice';
import { setProducts, resetProductFormValues, setProductFormValues } from '@/reduxStore/features/productSlice';
import { toast } from 'sonner'

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UpdateBrand: React.FC = (() => {
    const router = useRouter();
    const pathName = usePathname();
    const [haveProduct, setHaveProduct] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product.products);
    const brands = useAppSelector((state: RootState) => state.brand.brands);
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);

    const brandformRef = useRef(brandForm);
    brandformRef.current = brandForm;

    const validationErrors = useAppSelector((state: RootState) => state.brand.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const isValidForm = Object.values(validationErrorsRef.current).every(value => value === null);

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
        dispatch(validateForm());
        if (!isValidForm) {
            toast.error('Lütfen formu eksiksiz doldurunuz');
            return;
        } else {
            try {
                const updateBrand = await Repo.BrandRepository.update(brandformRef.current);
                if (updateBrand && updateBrand.data) {
                    const newBrand = await Repo.BrandRepository.getAllBrands();
                    dispatch(setBrands(newBrand as unknown as Brand[]));
                    dispatch(resetFormValues());
                    toast.success('Marka güncellendi');
                    router.push('/dashboard/system/brands');
                }
            } catch (error) {
                console.log('Error', error);
            }
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
                            brand={brandForm as unknown as Brand}
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
