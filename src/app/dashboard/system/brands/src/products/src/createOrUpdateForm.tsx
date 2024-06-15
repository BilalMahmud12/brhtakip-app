
import React, { useEffect } from 'react';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import type { Product } from '@/API';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { setProducts, resetProductFormValues, setProductFormValues, handleFormChange } from '@/lib/features/productSlice';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    product?: Product;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        product = {} as Product
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();
    const productForm = useAppSelector((state: RootState) => state.product.productForm);

    // const loadFormData = async (product: Product) => {
    //     const {
    //         name,
    //         isActive,
    //     } = product;

    //     console.log('start loading product form data!');
    //     dispatch(handleFormChange({ key: 'name', value: name as string }));
    //     dispatch(handleFormChange({ key: 'isActive', value: isActive ? '1' : '0' }));
    //     console.log('finished loading product form data:', productForm);
    // }

    // if (!isCreate) {
    //     useEffect(() => {
    //         loadFormData(product);
    //         console.log('product Data loaded:', product);
    //     }, [])
    // }


    return (
        <div>
            <form>
                <div className='bg-gray-100 px-6 py-8 rounded-md border border-zinc-200'>
                    <div className='input-group col-span-2'>
                        <Label htmlFor="product_name" className='block text-xs font-medium mb-1.5'>Ürün</Label>
                        <Input
                            id="add_product"
                            name="add_product"
                            placeholder='Ürün Ekle'
                            variation="quiet"
                            onChange={(e) => dispatch(handleFormChange({ key: 'name', value: e.target.value }))}
                            defaultValue={!isCreate ? productForm.name : ''}
                            className='custom-input'
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group'>
                        <Label htmlFor="isActive" className='block text-xs font-medium mb-1.5'>Durum</Label>
                        <Autocomplete
                            id="isActive"
                            label="Durum"
                            placeholder='Durum Seç'
                            variation="quiet"
                            options={[
                                { id: '1', label: 'Aktif' },
                                { id: '0', label: 'İnaktif' }
                            ]}
                            onSelect={(option) => dispatch(handleFormChange({ key: 'isActive', value: option.id }))}
                            defaultValue={!isCreate ? (productForm.isActive ? 'Aktif' : 'İnaktif') : ''}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateOrUpdateForm;
