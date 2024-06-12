import React, { useEffect } from 'react';
import ApplicationAreaDataTable from './applicationAreasDataTable';
import type { ApplicationArea } from '@/API';
import { Button } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';

const ApplicationAreaView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const applicationAreas = useAppSelector((state: RootState) => state.applicationArea.applicationAreas);

    return (
        <div>
            <div className='mt-1.5 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>Uygulama Alanları</h2>
                    <Button
                        variation="primary"
                        colorTheme="success"
                        size="small"
                        loadingText=""
                        // onClick={}
                        className='rounded-none bg-amber-500 text-gray-800 px-6'
                    >
                        <span>Uygulama Alanı Ekle</span>
                    </Button>
                </div>
            </div>
            <div className='mt-8'>
                <ApplicationAreaDataTable
                    dataPayload={applicationAreas}
                // handleDelete={}
                // handleEdit={}
                />
            </div>
        </div>
    );
}

export default ApplicationAreaView