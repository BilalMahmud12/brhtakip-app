'use client'
import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import type { District } from '@/API';
import * as Repo from '@/repository/index';
import DistrictsDataTable from './districtsDataTable';
import CreateOrUpdateForm from './createOrUpdateForm';
import { setDistricts, resetFormValues, setDistrictForm } from '@/reduxStore/features/districtSlice';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { usePathname, useRouter } from 'next/navigation';
interface DistrictViewProps {
    haveDistricts: boolean;
    fetchFilteredDistricts: () => void;
    filteredDistricts: District[];
}


const DistrictView: React.FC<DistrictViewProps> = ({ haveDistricts, fetchFilteredDistricts, filteredDistricts }) => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();
    const districts = useAppSelector((state: RootState) => state.district.districts);
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);
    const pathName = usePathname()

    const districtformRef = useRef(districtForm);
    districtformRef.current = districtForm;

    const cityId = pathName.split('/').pop()

    const setDistrictCityId = () => {
        if (districtForm.cityID !== cityId) {
            dispatch(setDistrictForm({
                cityID: cityId,
                isActive: false,
                name: ''
            }));
        }
    };

    useEffect(() => {
        setDistrictCityId();
    }, [cityId]);


    const setDistrictUpdateData = (data: any) => {
        dispatch(setDistrictForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            cityID: data.cityID,
        }));
    };

    const handleDeleteDistrict = async (data: any) => {
        try {
            const deleteProduct = await Repo.DistrictRepository.softDelete(data.originalData.id);

            if (deleteProduct && deleteProduct.data) {
                fetchFilteredDistricts();
                dispatch(setDistricts(filteredDistricts));
            }
        } catch (error) {
            console.log('Failed Delete District', error);
        }
    }

    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center p-4 pt-8 justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>İlçeler</h1>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() => router.push('/dashboard/system/cities/district/create')}
                                >
                                    İlçe Ekle
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    {haveDistricts ?
                        <DistrictsDataTable
                            dataPayload={districts}
                            handleDelete={handleDeleteDistrict}
                            handleEdit={setDistrictUpdateData}
                        />
                        : ''}

                </div>
            </div>
        </div>
    )
}

export default DistrictView
