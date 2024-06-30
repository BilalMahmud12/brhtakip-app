'use client'
import React, { useEffect, useState } from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import AutoComplete from '@/components/core/autoComplete';
import { MenuItem, Stack, Switch, TextField } from '@mui/material';

type Option = {
    label: string;
    value: string;
};

const RequestDetails: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    const [materialsList, setMaterialsList] = useState<Option[]>([]);
    const [applicationAreasList, setApplicationAreasList] = useState<Option[]>([]);


    useEffect(() => {
        const fetchApplicationAreas = async () => {
            const applicationAreas = await Repo.ApplicationAreaRepository.getApplicationAreas();
            setApplicationAreasList(
                applicationAreas?.map(area => ({
                    value: area.id,
                    label: area.name as string
                })) || []
            );
        }

        const fetchMaterials = async () => {
            const materials = await Repo.MaterialRepository.getAllMaterials();
            setMaterialsList(materials?.map(material => ({
                value: material.id,
                label: material.name
            })) || []);
        };

        fetchApplicationAreas();
        fetchMaterials();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        const { value } = e.target;
        dispatch(handleFormChange({ key: field, value: value }));
    };

    const handleSelectChange = (type: string, option: Option | null) => {
        dispatch(handleFormChange({ key: type, value: option ? option.value : '' }));
    };

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Baskı Malzeme Bilgileri</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="applicationArea" className='block text-xs font-medium mb-1.5'>Uygulama Alanı *</label>
                    <AutoComplete<Option>
                        id="applicationArea"
                        options={applicationAreasList}
                        value={requestFormRef.current.applicationArea}
                        handleOnChange={(option) => handleSelectChange('applicationArea', option)}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="material" className='block text-xs font-medium mb-1.5'>Malzeme *</label>
                    <AutoComplete<Option>
                        id="material"
                        options={materialsList}
                        value={requestFormRef.current.requestMaterialId}
                        handleOnChange={(option) => handleSelectChange('requestMaterialId', option)}
                    />
                </div>

                <div className='input-group w-full col-span-3 lg:col-span-1'>
                    <label htmlFor="branded" className='block text-xs font-medium mb-1.5'>Markalı *</label>

                    <TextField
                        select
                        id="request_status"
                        variant='standard'
                        defaultValue={requestFormRef.current.branded}
                        value={requestFormRef.current.branded ? 'Evet' : 'Hayır' }
                        onChange={(e) => dispatch(handleFormChange({ key: 'branded', value: e.target.value === 'Evet' ? true : false}))}
                        sx={{ 
                            width: '100%',  
                            '.MuiSelect-standard': { height: '26px', }
                        }}
                        size='small'
                    >
                        <MenuItem value='Evet'>Evet</MenuItem>
                        <MenuItem value='Hayır'>Hayır</MenuItem>
                    </TextField>
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="quantity" className='block text-xs font-medium mb-1.5'>Adet *</label>
                    <TextField
                        id='quantity'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 'quantity')}
                        value={requestFormRef.current.quantity}
                        placeholder={'0'}
                        type='number'
                        inputProps={{
                            min: 0,
                            step: 1,
                        }}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="width" className='block text-xs font-medium mb-1.5'>En *</label>
                    <TextField
                        id='width'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 'width')}
                        value={requestFormRef.current.width}
                        placeholder={'00.00'}
                        type='number'
                        inputProps={{
                            min: 0.00,
                            step: 0.01,
                        }}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="height" className='block text-xs font-medium mb-1.5'>Boy *</label>
                    <TextField
                        id='height'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 'height')}
                        value={requestFormRef.current.height}
                        placeholder={'00.00'}
                        type='number'
                        inputProps={{
                            min: 0.00,
                            step: 0.01,
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestDetails;
