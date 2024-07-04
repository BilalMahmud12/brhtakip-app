'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/requestSlice';
import type { ImageStorage } from '@/reduxStore/features/requestSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Button, IconButton } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { downloadData, remove } from 'aws-amplify/storage'
import { toast } from 'sonner';
import JSZip from 'jszip';

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

    const onDelete = async (file: ImageStorage) => {
        console.log('Deleting file:', file.path);
        try {
            await remove({ path: file.path });
            toast.success('Dosya başarıyla silindi.');
            console.log('file deleted successfully.');
        } catch (error) {
            console.error('Error: ', error);
        }

        const newFiles = files.filter((image) => image.path !== file.path);
        dispatch(handleFormChange({
            key: targetPath,
            value: newFiles
        }));
    }

    const handleDownloadSingleFile = async (path: string) => {
        console.log('Downloading file:', path);
        try {
            const { body, eTag } = await downloadData({
                path
            }).result;

            const result = body as unknown as Blob;
            const blob = new Blob([result], { type: eTag });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = path.split('/').pop() || 'download';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            console.log('Succeed: ', { body, eTag });
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    const handleDownloadAllFiles = async () => {
        console.log('Download all files');
        const zip = new JSZip();

        for (const file of files) {
            try {
                const { body, eTag } = await downloadData({ path: file.path }).result;
                const result = body as unknown as Blob;

                const blob = new Blob([result], { type: eTag });
                zip.file(file.path.split('/').pop() || 'download', blob);
            } catch (error) {
                console.error(`Error downloading file ${file.path}:`, error);
            }
        }

        zip.generateAsync({ type: 'blob' })
            .then((content) => {
                const url = window.URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${targetPath}.zip`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
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
                    className='w-full sm:w-auto'
                >
                    Dosyaları İndir ( {files?.length || 0} Dosya )
                </Button>
            </div>

            <div className='bg-zinc-100 rounded-lg p-4'>
                <div>
                    {files.length === 0 && (
                        <div className='text-sm text-center text-gray-400 w-full block'>Dosya bulunamadı.</div>
                    )}
                </div>
                <div className={`${options.gridClasses}`}>
                    {files?.map((image: any, index: number) => (
                        <div key={index} className='relative w-full h-full min-h-[200px] max-h-[200px]'>
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
                                    onClick={() => handleDownloadSingleFile(files[index].path)}
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
            </div>
        </React.Fragment>
    );
}

export default FileDisplay;