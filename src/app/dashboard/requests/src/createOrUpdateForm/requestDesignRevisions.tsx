'use client'
import React from 'react';

import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { TextField } from '@mui/material';


const RequestDesignRevisions: React.FC = () => {
    const dispatch = useAppDispatch();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Tasarım Revizyonları</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2'>
                    <label htmlFor="designRevisions" className='block text-xs font-medium mb-1.5'>
                        Tasarım Revizyonları:
                    </label>
                    <TextField
                        id='designRevisions'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'designRevisions',
                                value: event.target.value
                            }))
                        }}
                        multiline={true}
                        rows={4}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestDesignRevisions;