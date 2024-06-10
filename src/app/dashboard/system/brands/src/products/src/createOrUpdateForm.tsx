import { observer } from 'mobx-react';
import React from 'react';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';
import { useStore } from '@/stores/utils/useStore';
import type { Product } from '@/API';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    product?: Partial<Product>;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = observer((isCreate) => {
    const { productStore } = useStore();
    const { handleFormChange, getProductFormValues } = productStore;
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
                            onChange={(e) => productStore.handleFormChange(e.target.value, 'name')}
                            defaultValue={!isCreate ? getProductFormValues.name : ''}
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
                            onSelect={(option) => productStore.handleFormChange(option.id, 'isActive')}
                            defaultValue={!isCreate ? (getProductFormValues.isActive ? 'Aktif' : 'İnaktif') : ''}
                            className='custom-input'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
});

export default CreateOrUpdateForm;
