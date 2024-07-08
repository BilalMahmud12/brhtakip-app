'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import MediaManager from '@/components/core/MediaManager';
import type { ImageStorageItemInput } from '@/API';


const RequestReferencePhotos: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    const onUploadSuccess = (files: ImageStorageItemInput[]) => {
        console.log('files:', files);
        const referenceImages: ImageStorageItemInput[] = requestFormRef.current.referenceImages || [];
        const existingPaths = new Set(referenceImages.map((image) => image.id));
        const uniqueNewFiles = files.filter((file) => !existingPaths.has(file.id ? file.id : file.path));

        dispatch(handleFormChange({
            key: 'referenceImages',
            value: [...referenceImages, ...uniqueNewFiles]
        }));
    }

    const onDelete = (file: ImageStorageItemInput) => {
        const referenceImages: ImageStorageItemInput[] = requestFormRef.current.referenceImages || [];
        const newFiles = referenceImages.filter((image) => image.id !== file.id);
        dispatch(handleFormChange({
            key: 'referenceImages',
            value: newFiles
        }));
    }

    return (
        <React.Fragment>
            <div className='mb-6'>
                <h2 className='text-base font-semibold mb-0.5'>Alan Fotoğrafları</h2>
                <span className='block text-sm text-zinc-400'>Uygulama Yapılacak Alan Fotoğrafları</span>
            </div>

            <div className='mb-4'>
                <MediaManager
                    uploadPath={`requests/${requestFormRef.current.requestNumber}/references`}
                    downloadFolderName={`${requestFormRef.current.requestNumber}/alan_fotoğrafları`}
                    initialFiles={requestFormRef.current.referenceImages || []}
                    handleOnUploadSuccess={(files: ImageStorageItemInput[]) => onUploadSuccess(files)}
                    handleOnDelete={(file: ImageStorageItemInput) => onDelete(file)}
                    type='references'
                />
            </div>
        </React.Fragment>
    )
}

export default RequestReferencePhotos