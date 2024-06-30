'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { TextField } from '@mui/material';
import ImagesUpload from '../imagesUpload';
import { StorageImage } from '@aws-amplify/ui-react-storage';



const RequestReferencePhotos: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Tasarım Notu ve Referans Fotoğrafları</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2'>
                    <label htmlFor="designNote" className='block text-xs font-medium mb-1.5'>Tasarım Notu</label>
                    <TextField
                        id='designNote'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'designNote',
                                value: event.target.value
                            }))
                        }}
                        multiline={true}
                        rows={4}
                    />
                </div>


                <div className='input-group w-full col-span-2'>
                    <label htmlFor="referencePhotos" className='block text-xs font-medium mb-1.5'>Referans Fotoğrafları</label>
                    
                    <ImagesUpload
                        requestNumber={requestFormRef.current.requestNumber}
                        category='references'
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestReferencePhotos