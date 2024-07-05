'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import RequestSettings from './requestSettings';
import RequestBrandAndProduct from './requestBrandAndProduct';
import RequestStore from './requestStore';
import RequestDetails from './requestDetails';
import RequestFinance from './requestFinance';
import RequestExtraProducts from './requestExtraProducts';
import RequestDesignNote from './requestDesignNote';
import RequestReferencePhotos from './requestReferencePhotos';
import RequestDesignPhotos from './requestDesignPhotos';
import RequestDesignRevisions from './requestDesignRevisions';
import RequestPrintPhotos from './requestPrintPhotos';
import RequestApplicationPhotos from './requestApplicationPhotos';

interface CreateOrUpdateFormProps {
    isCreate: boolean;
    onSave?: () => void;
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const { 
        isCreate = false,
        onSave = () => {}
    } = props;
    
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    return (
        <React.Fragment>
            <div className='h-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='p-6 bg-white shadow col-span-2'>
                        <RequestSettings isCreate={isCreate} />
                    </div>

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestStore />
                    </div>

                    {!requestFormRef.current.isExtraProductRequest && (
                        <>
                            <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                                <RequestBrandAndProduct />
                            </div>

                            <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                                <RequestDetails />
                            </div>
                        </>
                    )}

                    <div className='p-6 bg-white shadow col-span-2 sm:col-span-1'>
                        <RequestFinance />
                    </div>
                    
                    <div className='p-6 bg-white shadow col-span-2'>
                        <RequestExtraProducts />
                    </div>

                    {!requestFormRef.current.isExtraProductRequest && (
                        <>
                            <div className='p-6 bg-white shadow col-span-2'>
                                <RequestDesignNote />
                            </div>
                        </>
                    )}

                    <div className='p-6 bg-white shadow col-span-2'>
                        <RequestReferencePhotos />
                    </div>

                    {!isCreate && (
                        <>
                            <div className='p-6 bg-white shadow col-span-2'>
                                <RequestDesignPhotos onSave={() => {}} />
                            </div>
                        </>
                    )}

                    {((requestForm?.designImages?.length ?? 0) > 0 && !requestFormRef.current.isExtraProductRequest) && (
                      <>
                            <div className='p-6 bg-white shadow col-span-2'>
                                <RequestDesignRevisions />
                            </div>
                      </>  
                    )}

                    {requestForm.passedRevision && (
                        <>
                            {!requestFormRef.current.isExtraProductRequest && (
                                <div className='p-6 bg-white shadow col-span-2'>
                                    <RequestPrintPhotos />
                                </div>
                            )}
                            
                            <div className='p-6 bg-white shadow col-span-2'>
                                <RequestApplicationPhotos />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateOrUpdateForm