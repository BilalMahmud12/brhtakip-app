'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { ExtraProduct } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/extraProductSlice';

import MediaUploadManager from '@/components/core/MediaUploadManager';
import FileDisplay from '@/components/core/fileDisplay';
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

    const onUploadSuccess = (files: { [key: string]: { status: string } }) => {
        const images = extraProductFormRef.current.images || [];

        const newFiles = Object.keys(files).map((key) => ({
            type: 'designs',
            path: key,
        }))

        dispatch(handleFormChange({
            key: 'designImages',
            value: [...images, ...newFiles]
        }));

        console.log('designImages', images);

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

                    <div className='my-2 pt-5' />

                    <React.Fragment>
                        <h2 className='text-base font-semibold mb-6'>Görseller</h2>

                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full col-span-1'>
                                {/* <MediaUploadManager
                                    basePath='public'
                                    uploadPath={`requests/${requestFormRef.current.requestNumber}/references`}
                                    handleOnUploadSuccess={(files: { [key: string]: { status: string } }) => onUploadSuccess(files)}
                                /> */}
                            </div>

                            <div className='input-group w-full col-span-2 lg:col-span-1'>
                                <FileDisplay
                                    targetPath='designImages'
                                    files={extraProductFormRef.current.images || []}
                                />
                            </div>
                        </div>
                    </React.Fragment>

                </div>
            </div>

        </div>
    );
}

export default CreateOrUpdateForm