'use client';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setAreaForm, setAreas } from '@/reduxStore/features/areaSlice';
import * as Repo from '@/repository/index';
import AreasDataTable from './areasDataTable';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { usePathname, useRouter } from 'next/navigation';
import { Area } from '@/API';


interface AreaViewProps {
    haveArea: boolean;
    fetchFilteredAreas: () => void;
    filteredAreas: Area[];
}

const AreaView: React.FC<AreaViewProps> = ({ haveArea, fetchFilteredAreas, filteredAreas }) => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    const pathName = usePathname();

    const areas = useAppSelector((state: RootState) => state.area.areas);
    const areaForm = useAppSelector((state: RootState) => state.area.areaForm);

    const districtId = pathName.split('/').pop();

    const setAreaDistrictId = () => {
        if (areaForm.districtID !== districtId) {
            dispatch(setAreaForm({ districtID: districtId, isActive: false }));
        }
    };
    useEffect(() => {
        setAreaDistrictId();
    }, [districtId]);

    const handleDeleteArea = async (data: any) => {
        try {
            const deleteArea = await Repo.AreaRepository.softDelete(data.originalData.id);

            if (deleteArea && deleteArea.data) {
                fetchFilteredAreas();
                dispatch(setAreas(filteredAreas));
            }
        } catch (error) {
            console.log('Failed Delete Area', error);
        }
    }

    const setAreaUpdateData = (data: any) => {
        dispatch(setAreaForm({
            id: data.id,
            name: data.name,
            isActive: data.isActive,
            districtID: data.districtID,
        }));
    };

    return (
        <div>
            <div className="mb-8">
                <div className="mb-4 space-y-5">
                    <div className='flex items-center p-4 pt-8 justify-between'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-2xl font-semibold'>Mahalleler</h1>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => router.push(`/dashboard/system/cities/district/src/areas/create`)}
                            >
                                Mahalle Ekle
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='mt-8 bg-white shadow'>
                    {haveArea ?
                        <AreasDataTable
                            dataPayload={areas}
                            handleDelete={handleDeleteArea}
                            handleEdit={setAreaUpdateData}
                        />
                        : ''}
                </div>
            </div>
        </div>
    );
};

export default AreaView;
