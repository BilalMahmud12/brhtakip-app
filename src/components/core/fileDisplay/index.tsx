'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import type { ImageStorage } from '@/reduxStore/features/requestSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Button, IconButton, gridClasses } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { StorageImage } from '@aws-amplify/ui-react-storage';

interface FileDisplayProps {
    targetPath: string; 
    files: ImageStorage[];
    options?: {
        gridClasses?: string;
    }
}

const FileDisplay: React.FC<FileDisplayProps> = (props) => {
    const {
        targetPath = '', 
        files = [],
        options = {
            gridClasses: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4',
        }
    } = props;

    const dispatch = useAppDispatch<AppDispatch>();

    const onDelete = (file: ImageStorage) => {
        const newFiles = files.filter((image) => image.path !== file.path);
        dispatch(handleFormChange({
            key: targetPath,
            value: newFiles
        }));
    }

    const handleDownloadSingleFile = () => {
        console.log('Download files');
    }

    const handleDownloadAllFiles = () => {
        console.log('Download all files');
    }

    return (
        <React.Fragment>
            <div className='mb-4'>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<CloudDownloadIcon />}
                    disabled={files.length === 0}
                    onClick={handleDownloadAllFiles}
                >
                    Dosyaları İndir ( {files?.length || 0} Dosya )
                </Button>
            </div>

            <div className={`${options.gridClasses} bg-zinc-100 rounded-lg p-4`}>
                {files?.map((image: any, index: number) => (
                    <div key={index} className='relative'>
                        <span className='absolute z-10 w-full h-full rounded-lg bg-black/40'></span>
                        <StorageImage
                            path={image.path}
                            alt='reference-image'
                            className='w-full h-full object-cover rounded-lg overflow-hidden'
                        />

                        <div className='flex space-x-3 items-start text-white text-5xl absolute z-20 bottom-3 left-[50%] transform -translate-x-1/2'>
                            <IconButton 
                                aria-label="download" 
                                size="medium" 
                                color="inherit" 
                                sx={{ background: '#ffffff50' }}
                                onClick={handleDownloadSingleFile}
                            >
                                <DownloadForOfflineIcon fontSize="inherit" />
                            </IconButton>

                            <IconButton 
                                aria-label="delete" 
                                size="medium" 
                                color="inherit" 
                                sx={{ background: '#ffffff50' }}
                                onClick={() => onDelete(image)}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default FileDisplay;