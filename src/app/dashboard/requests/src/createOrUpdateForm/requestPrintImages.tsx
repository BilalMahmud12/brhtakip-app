'use client'
import React from 'react';
import MediaUploadManager from '@/components/core/MediaUploadManager';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import FileDisplay from '@/components/core/fileDisplay';

const RequestPrintImages: React.FC = () => {
    const dispatch = useAppDispatch();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const onUploadSuccess = (files: { [key: string]: { status: string } }) => {
        const printImages = requestFormRef.current.printImages || [];

        const newFiles = Object.keys(files).map((key) => ({
            type: 'print',
            path: key,
        }))

        dispatch(handleFormChange({
            key: 'printImages',
            value: [...printImages, ...newFiles]
        }));

        console.log('printImages', printImages);

    }

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Baskı Görseller</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-1'>
                    <MediaUploadManager
                        basePath='public'
                        uploadPath={`requests/${requestFormRef.current.requestNumber}/references`}
                        handleOnUploadSuccess={(files: { [key: string]: { status: string } }) => onUploadSuccess(files)}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <FileDisplay
                        targetPath='designImages'
                        files={requestFormRef.current.printImages || []}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestPrintImages;