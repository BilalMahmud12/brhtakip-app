'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { ExtraProduct } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/extraProductSlice';

import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    extraProduct?: ExtraProduct;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        extraProduct = {} as ExtraProduct,
    } = props;
    const dispatch = useAppDispatch<AppDispatch>();
    const extraProductsForm = useAppSelector((state: RootState) => state.extraProduct.extraProductsForm);
    const extraProductFormRef = useRef(extraProductsForm);
    extraProductFormRef.current = extraProductsForm;

    const [checked, setChecked] = useState(extraProductFormRef.current.isActive as boolean);

    useEffect(() => {
        if (!isCreate) {
            loadFormData(extraProduct);
        }
    }, [extraProduct])
    const loadFormData = async (extraProduct: ExtraProduct) => {
        const {
            name,
            isActive,
        } = extraProduct

        dispatch(handleFormChange({ key: 'name', value: name as string }))
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div >
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="extra_product_name" className='block text-xs font-medium mb-1.5'>Ürun Adı *</label>
                        <TextField
                            id='extra_product_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? extraProductsForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Ürun Durumu</label>
                        <div>
                            <FormControlLabel
                                label={extraProductFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={extraProductFormRef.current.isActive as boolean}
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
}

export default CreateOrUpdateForm