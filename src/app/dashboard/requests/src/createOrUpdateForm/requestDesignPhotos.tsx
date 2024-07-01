'use client'
import React from 'react';
import MediaUploadManager from '@/components/core/MediaUploadManager';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import FileDisplay from '@/components/core/fileDisplay';

const RequestDesignPhotos: React.FC = () => {
    const dispatch = useAppDispatch();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const onUploadSuccess = (files: { [key: string]: { status: string } }) => {
        const designImages = requestFormRef.current.designImages || [];

        const newFiles = Object.keys(files).map((key) => ({
            type: 'designs',
            path: key,
        }))

        dispatch(handleFormChange({
            key: 'designImages',
            value: [...designImages, ...newFiles]
        }));

        console.log('designImages', designImages);

    }

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Tasarım ve Revizeler</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
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
                        files={requestFormRef.current.designImages || []}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestDesignPhotos;