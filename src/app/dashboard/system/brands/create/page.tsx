'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as Repo from '@/repository/index';
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { setBrandFormValues, resetFormValues, setBrands, handleFormChange } from '@/reduxStore/features/brandSlice';
import { RootState, AppDispatch } from '@/reduxStore/store';

import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { Brand } from '@/API';
import { useAppSelector } from '@/reduxStore/hooks';

const CreateBrandPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const brandForm = useAppSelector((state: RootState) => state.brand.brandForm);
    const errors = useAppSelector((state: RootState) => state.brand.errors);
    const brandFormRef = React.useRef(brandForm);
    brandFormRef.current = brandForm;

    const handleCreateBrand = async () => {
        if (!errors.name && brandFormRef.current.name.trim() !== '') {
            try {
                const createBrand = await Repo.BrandRepository.create(brandFormRef.current);
                if (createBrand && createBrand.data) {
                    const newbrand = await Repo.BrandRepository.getAllBrands();
                    dispatch(setBrands(newbrand as unknown as Brand[]));
                    dispatch(resetFormValues());
                    router.replace('/dashboard/system/brands');
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            // If there are errors, ensure the form is updated to display them
            dispatch(handleFormChange({ key: 'name', value: brandFormRef.current.name }));
        }
    };

    return (
        <div>
            <title>Marka Ekle - BRH Takip</title>

            <div className='h-full col-span-2'>
                <div className='flex items-center justify-between'>
                    <Button
                        variant="text"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => { router.push('/dashboard/system/brands'); dispatch(resetFormValues()); }}
                    >
                        Markalara Geri Dön
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<SaveIcon />}
                        onClick={handleCreateBrand}
                    >
                        Kaydı Et
                    </Button>
                </div>
            </div>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} />
            </div>
        </div>
    );
}

export default CreateBrandPage;
