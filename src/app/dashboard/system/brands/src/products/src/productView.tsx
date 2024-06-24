
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useRouter } from 'next/navigation';
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

interface ProductViewProps {
    brandId: any;
    haveProduct: boolean;
    filteredProducts: any;
    fetchFilteredProducts: any;
}



const ProductView: React.FC<ProductViewProps> = (({ haveProduct, brandId, filteredProducts, fetchFilteredProducts }) => {

    const router = useRouter();
    const { showDataModal, hideDataModal } = useDataModal();

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);

    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;


    const setProductBrandId = () => {
        if (productForm.brandID !== brandId) {
            dispatch(setProductFormValues({ brandID: brandId }));
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
            fetchFilteredProducts();
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleCancelForm = () => {
        hideDataModal();
    };

    return (
        <div>
            <div>
                <div className='px-6 py-3'>
                    <div className='mt-1.5 shadow bg-white'>
                        <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                            <h2 className='text-2xl font-medium'>
                                {haveProduct ? 'Bağlı Ürünler' : 'Henüz Ürün Eklenmedi'}
                            </h2>
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
            {/* <div className='mt-1.5 shadow bg-white py-6'>
                <ProductsDataTable
                    
                // handleSelect={(data) => handleDeleteProduct(data)}
                />
            </div> */}
        </div>
    );
});


export default ProductView;
