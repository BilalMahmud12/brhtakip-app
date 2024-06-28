
import React, { useEffect, useRef } from 'react';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';

import type { Product } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/productSlice';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    product?: Product;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (
    {
        isCreate = true,
        product = {} as Product }
) => {


    const dispatch = useAppDispatch<AppDispatch>();
    const productForm = useAppSelector((state: RootState) => state.product.productForm);
    const errors = useAppSelector((state: RootState) => state.product.errors);
    const productFormRef = useRef(productForm);
    productFormRef.current = productForm;

    const [checked, setChecked] = React.useState(productFormRef.current.isActive as boolean);

    // useEffect(() => {
    //     setChecked(productFormRef.current.isActive as boolean)
    // }, [])

    useEffect(() => {
        if (!isCreate) {
            loadFormData(product);
        }
    }, [product])


    const loadFormData = async (product: Product) => {
        const {
            name,
            isActive,
        } = product

        dispatch(handleFormChange({ key: 'name', value: name as string }))
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
        // console.log('finished loading form data:', productForm);
    }

    return (
        <div>
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>Ürün Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            error={!!errors.name}
                            helperText={errors.name || ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? productForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Ürün Durumu</label>
                        <div>
                            <FormControlLabel
                                label={productFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={productFormRef.current.isActive as boolean}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setChecked(event.target.checked);
                                        dispatch(handleFormChange({
                                            key: 'isActive',
                                            value: event.target.checked
                                        }));
                                    }}
                                />}
                                sx={{ '.MuiFormControlLabel-label': { fontSize: '0.90rem', fontWeight: '500' } }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrUpdateForm;
