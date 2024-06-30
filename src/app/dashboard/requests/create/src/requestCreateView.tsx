'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import { generateRequestNumber } from '@/utils/helpers';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CreateOrUpdateForm from '../../src/createOrUpdateForm/index';

const RequestCreateView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    React.useEffect(() => {
        dispatch(resetFormValues());
        dispatch(handleFormChange({ key: 'requestNumber', value: generateRequestNumber() }));
        dispatch(handleFormChange({ key: 'status', value: 'PENDING_APPROVAL' }));
    }, []);

    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Talep Oluştur</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button variant="contained" startIcon={<SaveIcon />} disableElevation>
                                Kaydı Et
                            </Button>
                        </div>
                    </div>

                    <div>
                        <CreateOrUpdateForm
                            isCreate={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestCreateView