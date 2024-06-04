import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Input, Label, Autocomplete, Button, Divider } from '@aws-amplify/ui-react';
import { useStore } from '@/stores/utils/useStore';
import type { Product } from '@/API';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    product?: Partial<Product>;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (data: Partial<Product>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = observer((
    {
        isCreate
    }) => {

    const { productStore } = useStore();
    const { getProductFormValues, handleFormChange } = productStore;


    return (
        <div>
            <div className=''>
                <form>
                    <div className='bg-gray-100 px-6 py-8 rounded-md border border-zinc-200'>
                        <div className='input-group col-span-2'>
                            <Label htmlFor="product_name" className='block text-xs font-medium mb-1.5'>Ürün</Label>
                            <Input
                                id="add_product"
                                name="add_product"
                                placeholder='Ürün Ekle'
                                variation="quiet"
                                onChange={(e) => handleFormChange(e.target.value, 'name')}
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
                                onSelect={(option) => handleFormChange(option.id, 'isActive')}
                                className='custom-input'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
})

export default CreateOrUpdateForm