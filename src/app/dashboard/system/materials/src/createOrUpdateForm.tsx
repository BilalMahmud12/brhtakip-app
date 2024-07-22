'use client'
import React, { useEffect } from 'react';
import type { Material } from '@/API';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/materialSlice';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    material?: Material;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        material = {} as Material,
    } = props;

    //const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const materialForm = useAppSelector((state: RootState) => state.material.materialForm);
    const validationErrors = useAppSelector((state: RootState) => state.material.validationErrors);
    const materialFormRef = React.useRef(materialForm)
    materialFormRef.current = materialForm

    const [, setChecked] = React.useState(materialFormRef.current.isActive as boolean);


    useEffect(() => {
        if (!isCreate) {
            loadFormData(material);
        }
    }, [material])


    const loadFormData = async (material: Material) => {
        const {
            name,
            isActive,
        } = material;

        dispatch(handleFormChange({ key: 'name', value: name || '' }));
        dispatch(handleFormChange({ key: 'isActive', value: isActive as boolean }))
    }

    return (
        <div >
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="material_name" className='block text-xs font-medium mb-1.5'>Malzeme Adı *</label>
                        <TextField
                            id='material_name'
                            variant="standard"
                            sx={{ width: '100%' }}
                            error={!!validationErrors?.name}
                            helperText={validationErrors?.name || ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? materialForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Malzeme Durumu</label>
                        <div>
                            <FormControlLabel
                                label={materialFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={materialFormRef.current.isActive as boolean}
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
    )
}
export default CreateOrUpdateForm
