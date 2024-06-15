
import React, { useEffect, useRef } from 'react';
import * as Repo from '@/repository/index';
import { useRouter } from 'next/navigation';
import type { Product } from '@/API';
import ProductsDataTable from './productsDataTable';
import { Button } from '@aws-amplify/ui-react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useDataModal } from '@/contexts/DataModalContext';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setProducts, resetProductFormValues, setProductFormValues } from '@/lib/features/productSlice';

interface ProductViewProps {
    brandId: any;
    haveProduct: boolean;
    filteredProducts: any;
    fetchFilteredProducts: any;
}

const ModalCustomFooter = (
    props: {
        type: 'create' | 'update'
        handleUpdate?: (data: any) => void;
        handleCreate?: (data: any) => void;
        handleCancel?: () => void;
    }
) => {
    const {
        type,
        handleUpdate = () => { },
        handleCreate = () => { },
        handleCancel = () => { },
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-blue-900 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div >
    )
}


const ProductView: React.FC<ProductViewProps> = (({ haveProduct, brandId, filteredProducts, fetchFilteredProducts }) => {

    const router = useRouter();
    const { showDataModal, hideDataModal } = useDataModal();

    const dispatch = useAppDispatch<AppDispatch>();
    const products = useAppSelector((state: RootState) => state.product);
    const productForm = useAppSelector((state: RootState) => state.product.productForm);

    const productFormRef = useRef(productForm);
    useEffect(() => {
        productFormRef.current = productForm;
    }, [productForm])

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Ürün Ekle</span></div>,
            <CreateOrUpdateForm
                isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCreate={handleCreateProduct}
                handleCancel={handleCancelForm}
            />
        );
    };

    const setProductBrandId = () => {
        if (productForm.brandID !== brandId) {
            dispatch(setProductFormValues({ brandID: brandId }));
        }
    };

    useEffect(() => {
        setProductBrandId();
    }, [brandId]);

    const handleCreateProduct = async () => {
        try {
            const createProduct = await Repo.ProductRepository.create(productFormRef.current);

            if (createProduct && createProduct.data) {
                fetchFilteredProducts();
                dispatch(setProducts(filteredProducts))
                hideDataModal();
                dispatch(resetProductFormValues())
            }
        } catch (error) {
            console.error('Error create product', error);
        }
    };


    const handleUpdateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Güncelle</span></div>,
            <CreateOrUpdateForm
                isCreate={false}
            />,
            <ModalCustomFooter
                type='update'
                handleUpdate={handleUpdateProduct}
                handleCancel={handleCancelForm}
            />
        );
    };

    const handleUpdateProduct = async () => {
        try {
            productFormRef
            const updateProduct = await Repo.ProductRepository.update(productFormRef.current)

            if (updateProduct && updateProduct.data) {
                fetchFilteredProducts();
                dispatch(setProducts(filteredProducts))
                hideDataModal();
                dispatch(resetProductFormValues())
            }

        } catch (error) {
            console.log('error on update Product', error);
        }
    };

    const setProductUpdateData = (data: any) => {
        handleUpdateForm();
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
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                onClick={handleCreateForm}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Ürün Ekle</span>
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
