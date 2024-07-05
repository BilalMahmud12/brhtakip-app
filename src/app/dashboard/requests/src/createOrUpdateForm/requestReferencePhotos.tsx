'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import { IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MediaUploadManager from '@/components/core/MediaUploadManager';
import FileDisplay from '@/components/core/fileDisplay';

import { StorageImage } from '@aws-amplify/ui-react-storage';
import { getUrl } from 'aws-amplify/storage'

const RequestReferencePhotos: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;
    console.log('requestForm', requestFormRef.current);

    interface ReferenceImage {
        type: string;
        path: string;
    }

    const onUploadSuccess = (files: { [key: string]: { status: string } }) => {
        const referenceImages: ReferenceImage[] = requestFormRef.current.referenceImages || [];

        const newFiles: ReferenceImage[] = Object.keys(files).map((key) => ({
            type: 'references',
            path: key,
        }));

        const existingPaths = new Set(referenceImages.map((image) => image.path));
        const uniqueNewFiles = newFiles.filter((file) => !existingPaths.has(file.path));

        dispatch(handleFormChange({
            key: 'referenceImages',
            value: [...referenceImages, ...uniqueNewFiles]
        }));
    }


    return (
        <React.Fragment>
            <div className='mb-6'>
                <h2 className='text-base font-semibold mb-0.5'>Alan Fotoğrafları</h2>
                <span className='block text-sm text-zinc-400'>Uygulama Yapılacak Alan Fotoğrafları</span>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <MediaUploadManager
                        basePath='public'
                        uploadPath={`requests/${requestFormRef.current.requestNumber}/references`}
                        handleOnUploadSuccess={(files: { [key: string]: { status: string } }) => onUploadSuccess(files)}
                    />
                </div>

                <div className='input-group w-full col-span-2 lg:col-span-1'>
                    <FileDisplay
                        targetPath='referenceImages'
                        files={requestFormRef.current.referenceImages || []}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestReferencePhotos