'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetFormValues } from '@/reduxStore/features/requestSlice';
import CreateOrUpdateForm from '../../src/createOrUpdateForm/index';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { filterEmptyValues } from '@/utils/helpers';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';

const decimalFields = [
    'assemblyBudget',
    'cargoBudget',
    'monthlyFee',
    'productionCost',
    'height',
    'width'
]

const RequestUpdateView: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const handleSave = async () => {
        let cleanForm = filterEmptyValues(requestFormRef.current)

        Object.keys(cleanForm).forEach((key: string) => {
            const currentValue = cleanForm[key];

            if (decimalFields.includes(key)) {
                const oldValue = cleanForm[key];
                cleanForm[key] = parseFloat(oldValue).toFixed(2).toString();
            }
            else if (key === 'quantity') {
                cleanForm[key] = parseInt(currentValue)
            }
            else if (key === 'createdAt' || key === 'updatedAt') {
                delete cleanForm[key];
            }
            else {
                cleanForm[key] = currentValue;
            }
        });

        console.log('cleanForm', cleanForm);

        try {
            toast.info('Lütfen Bekleyiniz Talepinizi güncelleniyor!');
            const response = await Repo.RequestRepository.update({ id: cleanForm.id, ...cleanForm });

            if (response) {
                toast.success('Talep başarıyla güncellendi.');
            }
        } catch (error) {
            toast.error('Talep güncellenirken bir hata oluştu.');
            console.log('error', error);
        }
    }
    
    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Talep Güncelle</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button onClick={() => handleSave()} variant="contained" startIcon={<SaveIcon />} disableElevation>
                                Kaydı Et
                            </Button>
                        </div>
                    </div>

                    <div>
                        <CreateOrUpdateForm
                            isCreate={false}
                            onSave={handleSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestUpdateView