'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { TextField } from '@mui/material';


const RequestFinance: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Finans Bilgileri</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="productionCost" className='block text-xs font-medium mb-1.5'>Urtim Maliyeti</label>
                    <TextField
                        id='productionCost'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            console.log('Production Cost:', event.target.value);
                            dispatch(handleFormChange({
                                key: 'productionCost',
                                value: event.target.value
                            }))
                        }}
                        placeholder={'00.00'}
                        type='number'
                        inputProps={{
                            min: 0.00,
                            step: 0.01
                        }}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="cargoBudget" className='block text-xs font-medium mb-1.5'>Kargo Bütçesi</label>
                    <TextField
                        id='cargoBudget'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'cargoBudget',
                                value: event.target.value
                            }))
                        }}
                        placeholder={'00.00'}
                        type='number'
                        inputProps={{
                            min: 0.00,
                            step: 0.01,
                        }}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="assemblyBudget" className='block text-xs font-medium mb-1.5'>Montaj Bütçesi</label>
                    <TextField
                        id='assemblyBudget'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'assemblyBudget',
                                value: event.target.value
                            }))
                        }}
                        placeholder={'00.00'}
                        type='number'
                        inputProps={{
                            min: 0.00,
                            step: 0.01,
                        }}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <label htmlFor="monthlyFee" className='block text-xs font-medium mb-1.5'>Aylık Aidatı</label>
                    <TextField
                        id='monthlyFee'
                        variant="standard"
                        sx={{ width: '100%' }}
                        helperText={''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(handleFormChange({
                                key: 'monthlyFee',
                                value: event.target.value
                            }))
                        }}
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

export default RequestFinance