'use client'
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import MediaManager from '@/components/core/MediaManager';
import type { ImageStorageItemInput } from '@/API';


const RequestDesignPhotos: React.FC<{ onSave: () => void }> = ({ onSave = () => {} }) => {
    const dispatch = useAppDispatch();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const onUploadSuccess = (files: ImageStorageItemInput[]) => {
        console.log('files:', files);

        const designImages: ImageStorageItemInput[] = requestFormRef.current.designImages || [];
        const existingPaths = new Set(designImages.map((image) => image.id));
        const uniqueNewFiles = files.filter((file) => !existingPaths.has(file.id ? file.id : file.path));

        dispatch(handleFormChange({
            key: 'designImages',
            value: [...designImages, ...uniqueNewFiles]
        }));

        onSave();
    }

    const onDelete = (file: ImageStorageItemInput) => {
        const designImages: ImageStorageItemInput[] = requestFormRef.current.designImages || [];
        const newFiles = designImages.filter((image) => image.id !== file.id);
        dispatch(handleFormChange({
            key: 'designImages',
            value: newFiles
        }));
    }

    return (
        <React.Fragment>
            <div className='mb-6'>
                <h2 className='text-base font-semibold mb-0.5'>Baskı Datası</h2>
                <span className='block text-sm text-zinc-400'>Tasarımlar ve Baskı Bilgileri</span>
            </div>

            <div className='mb-4'>
                <MediaManager
                    uploadPath={`requests/${requestFormRef.current.requestNumber}/designImages`}
                    downloadFolderName={`${requestFormRef.current.requestNumber}/baskı_datası`}
                    initialFiles={requestFormRef.current.designImages || []}
                    handleOnUploadSuccess={(files: ImageStorageItemInput[]) => onUploadSuccess(files)}
                    handleOnDelete={(file: ImageStorageItemInput) => onDelete(file)}
                    type='designImages'
                />
            </div>
        </React.Fragment>
    );
}

export default RequestDesignPhotos;