'use client'
import React from 'react';

import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import Switch from '@mui/material/Switch';
import { TextField } from '@mui/material';

const RequestDesignNote: React.FC = () => {
    const dispatch = useAppDispatch();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    return (
        <React.Fragment>
            <div className='mb-12'>
                <h2 className='text-base font-semibold mb-0.5'>Tasarım Notu</h2>
                <span className='block text-sm text-zinc-400'>Tasarım ile ilgili Notlarınızı</span>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2'>
                    <TextField
                        id='designNote'
                        variant="filled"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'designNote',
                                value: event.target.value
                            }))
                        }}
                        value={requestFormRef.current.designNote}
                        placeholder='Örnek: Tasarımın renkleri daha canlı olabilir.'
                        multiline={true}
                        rows={3}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestDesignNote;