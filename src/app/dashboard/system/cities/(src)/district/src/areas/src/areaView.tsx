'use client'
import React, { useEffect, useRef } from 'react';
import { useDataModal } from '@/contexts/DataModalContext';
import { Button } from '@aws-amplify/ui-react';

import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setAreas } from '@/reduxStore/features/areaSlice';

//import CreateOrUpdateForm from './createOrUpdateForm';
import type { Area } from '@/API';
//import MaterialsDataTable from './materialsDataTable';
import * as Repo from '@/repository/index';
import AreasDataTable from './areasDataTable';

const AreaView: React.FC = () => {

    const areas = useAppSelector((state: RootState) => state.area.areas);



    return (
        <div>
            <div className='px-6 py-3'>
                <div className='mt-1.5 shadow bg-white'>
                    <div className='px-6 py-3 mb-3 flex items-center justify-between'>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-2'>
                                <Button
                                    variation="primary"
                                    colorTheme="success"
                                    size="small"
                                    loadingText=""
                                    //onClick={}
                                    className='rounded-none bg-amber-500 text-gray-800 px-6'
                                >
                                    <span>Mahalle Ekle</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 bg-white shadow'>
                    <AreasDataTable
                        dataPayload={areas}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaView

// 