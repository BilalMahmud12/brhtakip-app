'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import { generateRequestNumber } from '@/utils/helpers';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CreateOrUpdateForm from '../../src/createOrUpdateForm/index';
import { filterEmptyValues } from '@/utils/helpers';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';

const RequestCreateView: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    React.useEffect(() => {
        dispatch(resetFormValues());
        dispatch(handleFormChange({ key: 'requestNumber', value: generateRequestNumber() }));
        dispatch(handleFormChange({ key: 'status', value: 'PENDING_APPROVAL' }));
    }, []);

    const handleSave = async () => {
        const cleanForm = filterEmptyValues(requestFormRef.current);
        console.log('cleanForm', cleanForm);
        try {
            const response = await Repo.RequestRepository.create(cleanForm);

            if (response) {
                toast.success('Talep başarıyla oluşturuldu.');
                dispatch(resetFormValues());
                router.push('/dashboard/requests');
            }
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Talep Oluştur</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button onClick={() => handleSave()} variant="contained" startIcon={<SaveIcon />} disableElevation>
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