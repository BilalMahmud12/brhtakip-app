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
import { CreateRequestInput } from '@/API';
import * as styles from '@/components/styles';

const decimalFields = [
    'assemblyBudget', 
    'cargoBudget',
    'monthlyFee',
    'productionCost',
    'height',
    'width'
]

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
            else {
                cleanForm[key] = currentValue;
            }
        });

        console.log('cleanForm', cleanForm);

        
        try {
            toast.info('Lütfen Bekleyiniz Talepinizi oluşturuluyor...');
            const { clientprofileID, storeID, requestNumber, status, ...rest } = cleanForm;

            const createRequestInput: CreateRequestInput = {
              clientprofileID,
              storeID,
              requestNumber,
              status,
              ...rest
            };
            
            const response = await Repo.RequestRepository.create(createRequestInput);

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
                    <div className='p-4 bg-white shadow flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-lg font-semibold'>Talep Oluştur</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button 
                                variant="contained"
                                size='small' 
                                startIcon={<SaveIcon />} 
                                onClick={() => handleSave()} 
                                sx={styles.buttonComponentStyles}
                            >
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