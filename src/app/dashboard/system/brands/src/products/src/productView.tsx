
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useRouter } from 'next-nprogress-bar';
import type { Product } from '@/API';
import ProductsDataTable from './productsDataTable';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useDataModal } from '@/contexts/DataModalContext';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setProducts, resetProductFormValues, setProductFormValues } from '@/reduxStore/features/productSlice';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { usePathname } from 'next/navigation';

interface ProductViewProps {
    brandId: any;
    haveProduct: boolean;
    filteredProducts: any;
    fetchFilteredProducts: any;
}

const ProductView: React.FC<ProductViewProps> = (({ haveProduct, brandId, filteredProducts, fetchFilteredProducts }) => {
    const router = useRouter();
    const pathName = usePathname();
    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);

    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;

    console.log('brandId', brandId);

    const setProductBrandId = () => {
        if (productForm.brandID !== brandId) {
            dispatch(setProductFormValues({
                brandID: brandId,
                isActive: false,
                name: ''
            }));
        }
    };

    useEffect(() => {
        setProductBrandId();
    }, [brandId]);


    const setProductUpdateData = (data: any) => {
        dispatch(setProductFormValues({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            brandID: data.brandID,
        }));
    };

    const handleDeleteProduct = async (data: any) => {
        try {
            const deleteProduct = await Repo.ProductRepository.softDelete(data.originalData.id);

            if (deleteProduct && deleteProduct.data) {
                fetchFilteredProducts();
            }

        } catch (error) {
            console.log('error', error);
        }
    };


    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center p-4 pt-8 justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Ürünler</h1>
                        </div>
                        <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={() => router.push('/dashboard/system/brands/src/products/create')}
                        >
                            Ürün Ekle
                        </Button>
                    </div>
                    {haveProduct && (
                        <div className='mt-1.5 shadow bg-white py-6'>
                            <ProductsDataTable
                                dataPayload={filteredProducts}
                                handleDelete={(data) => handleDeleteProduct(data)}
                                handleEdit={setProductUpdateData}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});


export default ProductView;
