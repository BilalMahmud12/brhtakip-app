'use client'
import React, { useEffect } from 'react';
import type { Area } from '@/API';
import { useRouter } from 'next-nprogress-bar';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { RootState, AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/areaSlice';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    area?: Area;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = true,
        area = {} as Area,
    } = props;

    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);

    const areaFormRef = React.useRef(areaForm)
    areaFormRef.current = areaForm

    const [checked, setChecked] = React.useState(areaFormRef.current.isActive as boolean);

    React.useEffect(() => {
        setChecked(areaFormRef.current.isActive as boolean)
    }, [areaFormRef.current.isActive])




    return (
        <div >
            <div className='my-2 pt-5' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>

                <div className='p-6 bg-white shadow col-span-2'>

                    <div className='input-group w-full col-span-1 lg:col-span-1'>
                        <label htmlFor="area" className='block text-xs font-medium mb-1.5'>Mahalle Adı *</label>
                        <TextField
                            id='area'
                            variant="standard"
                            sx={{ width: '100%' }}
                            helperText={''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                dispatch(handleFormChange({ key: 'name', value: event.target.value }))
                            }}
                            defaultValue={!isCreate ? areaForm.name : ''}
                        />
                    </div>

                    <div className='my-2 pt-5' />

                    <div className='input-group w-full'>
                        <label htmlFor="brand_state" className='block text-xs font-medium mb-2'>Malzeme Durumu</label>
                        <div>
                            <FormControlLabel
                                label={checked ? 'Aktif' : 'Aktif Değil'}
                                control={<Switch
                                    color='success'
                                    checked={checked}
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
    );
}

export default CreateOrUpdateForm