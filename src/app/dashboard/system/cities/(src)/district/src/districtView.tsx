'use client'
import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import type { District } from '@/API';
import * as Repo from '@/repository/index';
import DistrictsDataTable from './districtsDataTable';
import CreateOrUpdateForm from './createOrUpdateForm';
import { setDistricts, resetFormValues, setDistrictForm } from '@/lib/features/districtSlice';
interface DistrictViewProps {
    cityId: string;
    haveDistricts: boolean;
    fetchFilteredDistricts: () => void;
    filteredDistricts: District[];
}

const ModalCustomFooter = (props: {
    type: 'create' | 'update'
    handleCreate?: (data: any) => void;
    handleUpdate?: (data: any) => void;
    handleCancel?: () => void;
}) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { }
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    );
}

const DistrictView: React.FC<DistrictViewProps> = ({ cityId, haveDistricts, fetchFilteredDistricts, filteredDistricts }) => {
    const { showDataModal, hideDataModal } = useDataModal();
    const dispatch = useAppDispatch<AppDispatch>();
    const districts = useAppSelector((state: RootState) => state.district.districts);
    const districtForm = useAppSelector((state: RootState) => state.district.districtForm);

    const districtformRef = useRef(districtForm);
    useEffect(() => {
        districtformRef.current = districtForm;
    }, [districtForm])

    const handleCancelForm = () => {
        dispatch(resetFormValues());
        hideDataModal();
    };


    const handleCreateForm = () => {
        showDataModal(
            <div><span className='text-base font-bold'>Yeni İlçe Ekle</span></div>,
            <CreateOrUpdateForm isCreate={true} />,
            <ModalCustomFooter
                type='create'
                handleCancel={handleCancelForm}
                handleCreate={handleCreateDistrict}
            />
        );
    };

    // FIX
    const setDistrictCityId = () => {
        if (districtForm.cityID !== cityId) {
            dispatch(setDistrictForm({
                ...districtForm,
                cityID: cityId
            }));
        }
    };

    useEffect(() => {
        setDistrictCityId();
    }, [cityId]);

    const handleCreateDistrict = async () => {
        try {
            const createDistrict = await Repo.DistrictRepository.create(districtformRef.current);

            if (createDistrict && createDistrict.data) {
                fetchFilteredDistricts();
                dispatch(setDistricts(filteredDistricts));
                hideDataModal();
                dispatch(resetFormValues());
            }
        } catch (error) {
            console.log('Failed Creating District', error);
        }
    };

    const setDistrictUpdateData = (data: any) => {
        dispatch(setDistrictForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            cityID: cityId
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
            <div className='px-6 py-3'>
                <div className='mt-1.5 shadow bg-white'>
                    <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                        <h2>{haveDistricts ? 'İlçeler' : 'Henüz İlçe Eklenmedi'}</h2>
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            onClick={handleCreateForm}
                            className='rounded-none bg-amber-500 text-gray-800 px-6'
                        >
                            <span>İlçe Ekle</span>
                        </Button>
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
