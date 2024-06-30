'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import RequestSettings from './requestSettings';
import RequestBrandAndProduct from './requestBrandAndProduct';
import RequestStore from './requestStore';
import RequestDetails from './requestDetails';
import RequestFinance from './requestFinance';
import RequestExtraProducts from './requestExtraProducts';
import RequestReferencePhotos from './requestReferencePhotos';

const CreateOrUpdateForm: React.FC<{ isCreate: boolean }> = ({ isCreate }) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    return (
        <React.Fragment>
            <div className='h-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestSettings />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestStore />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestBrandAndProduct />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestDetails />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestExtraProducts />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestFinance />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2'>
                        <RequestReferencePhotos />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateOrUpdateForm