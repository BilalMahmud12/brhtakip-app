'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

interface RequestSettingsProps {
    isCreate?: boolean;
}

const RequestSettings: React.FC<RequestSettingsProps> = (props) => {
    const { isCreate = false } = props;
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleFormChange({ key: 'isExtraProductRequest', value: e.target.checked ? true : false }));
    };
    
    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Talep Ayarları</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                {isCreate && (
                    <>
                        <div className='input-group w-full col-span-2 lg:col-span-1'>
                            <label htmlFor="isExtraProductRequest" className='hidden text-xs font-medium mb-1.5'>EK Ürün Talebi</label>
                            <div className='flex items-center'>
                                <Switch
                                    id="isExtraProductRequest"
                                    checked={Boolean(requestFormRef.current.isExtraProductRequest) ? true : false}
                                    onChange={handleSwitchChange}
                                    color='success'
                                />

                                <span className='ml-2 text-sm font-medium'>{Boolean(requestFormRef.current.isExtraProductRequest) ? 'Ek ürün talebi oluşturulacak' : 'Ek ürün talebi?'}</span>
                            </div>
                        </div>
                        <div></div>
                    </>
                )}
               
                
                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="requestNumber" className='block text-xs font-medium mb-1.5'>Talep Numarası</label>
                    <TextField
                        id='requestNumber'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        value={requestFormRef.current.requestNumber}
                        disabled
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestSettings