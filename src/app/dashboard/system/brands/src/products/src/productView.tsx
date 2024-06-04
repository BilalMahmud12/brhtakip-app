import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import * as Repo from '@/repository/index';
import { useStore } from '@/stores/utils/useStore';
import { useRouter } from 'next/navigation';
import type { Product } from '@/API';
import ProductsDataTable from './productsDataTable';
import { Button } from '@aws-amplify/ui-react';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { useDataModal } from '@/contexts/DataModalContext';
import { toJS } from 'mobx';
import BrandsDataTable from '../../brandsDataTable';

interface ProductViewProps {
    brandId: string;
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
                        <span>{type === 'create' ? 'ONAYLA' : 'GÜNCELLE'}</span>
                    </span>
                </Button>
            </div>
        </div >
    )
}



const ProductView: React.FC<ProductViewProps> = observer(({ brandId }) => {
    const { productStore } = useStore();
    const router = useRouter();
    const { showDataModal, hideDataModal } = useDataModal();
    const { getProductFormValues, handleFormChange } = productStore;

    const [haveProduct, setHaveProduct] = useState<boolean>(false);

    // async function filterProductsByBrand() {
    //     const productsData = await Repo.ProductRepository.getAllProducts();
    //     productsData.filter(product => product.brandID === brandId);
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await Repo.ProductRepository.getAllProducts();

                if (productsData) {
                    const filteredProducts = productsData.filter(product => product.brandID === brandId);
                    productStore.initStore({ products: filteredProducts });

                    console.log('Filtered products', filteredProducts);
                    setHaveProduct(filteredProducts.length > 0);
                } else {
                    console.warn('No products data available');
                    setHaveProduct(false);
                }

            } catch (error) {
                console.error('Failed to fetch products', error);
                setHaveProduct(false);
            }
        };

        fetchData();
    }, [brandId, productStore]);

    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni Ürün Ekle</span></div>,
            <CreateOrUpdateForm
            // isCreate={true}
            />,
            <ModalCustomFooter
                type='create'
                handleCreate={handleCreateProduct}
                handleUpdate={handleUpdateProduct}
                handleCancel={handleCancelForm}
            />
        );
    };

    const getPriductBrandID = () => {
        productStore.setProductFormValues({ brandID: brandId });
    }

    const handleCreateProduct = async () => {
        try {
            getPriductBrandID();
            const createProduct = await Repo.ProductRepository.create(toJS(productStore.getProductFormValues));
            console.log('created product', createProduct);

            const newBrand = await Repo.ProductRepository.getAllProducts();
            if (newBrand) {
                const filteredProducts = newBrand.filter(product => product.brandID === brandId);
                productStore.initStore({ products: filteredProducts });
                // filteredProducts.length <= 1 ? router.replace(`dashboard/system/brands/${brandId}`) : '';
            }

            productStore.resetFormValues();
            hideDataModal();
        } catch (error) {
            console.error('Error creating product', error);
        }
    };

    const handleUpdateProduct = async () => {
        console.log('update product');
    };

    const handleCancelForm = () => {
        hideDataModal();
    };

    return (
        <div>
            <div className='mt-1.5 shadow bg-white py-6'>
                <div className='px-6 mb-3 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>
                        {haveProduct ? 'Bağlı Ürünler' : 'Henüz Ürün Eklenmedi'}
                    </h2>
                    <div className='flex items-center space-x-2'>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            onClick={() => handleCreateForm()}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>Ürün Ekle</span>
                        </Button>
                    </div>
                </div>
                {haveProduct && (
                    <div className='mt-1.5 shadow bg-white py-6'>
                        <ProductsDataTable
                            dataPayload={productStore.products}
                            handleEdit={(data) => console.log('edit', data)}
                            handleDelete={(data) => console.log('delete', data)}
                            handleSelect={(data) => console.log('select', data)}
                        />
                    </div>
                )}
            </div>
            {/* <div className='mt-8'>
                <BrandsDataTable
                    dataPayload={productStore.getAllProducts}
                    handleEdit={handleUpdateForm}
                    handleDelete={handleDelete}
                />
            </div> */}
        </div>
    );
});


export default ProductView;
