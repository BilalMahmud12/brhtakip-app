'use client'
import type { ImageStorageItemInput } from '@/API';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { uploadData, downloadData, remove } from '@aws-amplify/storage';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddIcon from '@mui/icons-material/Add';
import * as styles from '@/components/styles';
import { v4 as uuid } from 'uuid';
import { toast } from 'sonner';
import Image from 'next/image';
import JSZip from 'jszip';


interface MediaManagerProps {
    basePath?: string;
    uploadPath?: string;
    downloadFolderName?: string;
    initialFiles?: ImageStorageItemInput[];
    handleOnUploadSuccess?: (files: ImageStorageItemInput[]) => void;
    handleOnDelete?: (file: ImageStorageItemInput) => void;
    type: string;
    displayOnly?: boolean;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const MediaManager: React.FC<MediaManagerProps> = (props) => {
    const {
        basePath = 'public',
        uploadPath = '',
        downloadFolderName = 'download',
        initialFiles = [],
        handleOnUploadSuccess = () => { },
        handleOnDelete = () => { },
        type,
        displayOnly = false,
    } = props;

    const [files, setFiles] = useState<ImageStorageItemInput[]>(initialFiles);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    useEffect(() => {
        handleOnUploadSuccess(files);
    }, [files]);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(event.target.files || []);
        setSelectedFiles(newFiles);

        const newPreviews = newFiles.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);
    };

    const handleRemovePreview = (index: number) => {
        const newPreviews = [...previews];
        newPreviews.splice(index, 1);
        setPreviews(newPreviews);
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    }

    const handleUpload = async () => {
        toast.info('Dosyalar yükleniyor...');
        const newFiles: ImageStorageItemInput[] = [];

        for (const file of selectedFiles) {
            const fileName = `${basePath}/${uploadPath}/${file.name}`;
            try {
                const uploadTask = uploadData({ path: fileName, data: file })
                const result = await uploadTask.result;

                console.log('result:', result);
                
                if (result) {
                    newFiles.push({
                        id: uuid(),
                        path: fileName,
                        type: type,
                    }) 
                }

                console.log('File uploaded:', fileName);
            } catch (error) {
                console.error('Error uploading file:', error);
                toast.error('Error uploading file');
                return;
            }
        }

        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);
        toast.success('Dosyalar başarıyla yüklendi');
        handleOnUploadSuccess(updatedFiles);
        setSelectedFiles([]);
        setPreviews([]);
    };

    const handleDelete = async (file: ImageStorageItemInput) => {
        console.log('Deleting file:', file.path);
        try {
            const deleteTask = await remove({ path: file.path as string });
            const result = deleteTask.path;

            if (result) {
                console.log('File deleted:', result);
                handleOnDelete(file);
                toast.success('Dosya başarıyla silindi');
                const newFiles = files.filter((image) => image.id !== file.id);
                console.log('newFiles:', newFiles);
                setFiles(newFiles);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error deleting file');
        }
    };

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
    };

    const handleDownloadAllFiles = async () => {
        console.log('Download all files');
        const zip = new JSZip();

        for (const file of files) {
            try {
                const { body, eTag } = await downloadData({ path: file.path as string }).result;
                const result = body as unknown as Blob;

                const blob = new Blob([result], { type: eTag });
                zip.file((file.path as string).split('/').pop() || 'download', blob);
            } catch (error) {
                console.error(`Error downloading file ${file.path}:`, error);
            }
        }

        zip.generateAsync({ type: 'blob' })
            .then((content) => {
                const url = window.URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${downloadFolderName}.zip`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
    };

    return (
        <div>
            <div className='space-y-3 mb-4'>
                <div className='flex flex-col items-start lg:flex-row lg:items-center justify-between'>

                    {!displayOnly && (
                        <div className='w-full lg:w-auto flex items-center justify-between lg:justify-normal lg:space-x-3 mb-3 lg:mb-0'> 
                            <Button
                                size="small"
                                component="label"
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={styles.buttonComponentStyles}
                            >
                                Dosyalar Ekle
                                <VisuallyHiddenInput
                                    multiple
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                />
                            </Button>
                            
                            <Button
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={handleUpload}
                                disabled={selectedFiles.length === 0}
                                startIcon={
                                    <CloudUploadIcon color='inherit' />
                                }
                                sx={styles.buttonComponentStyles}
                            >
                                Yükle
                            </Button>
                            
                        </div>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<CloudDownloadIcon />}
                        disabled={files?.length === 0 || false}
                        onClick={handleDownloadAllFiles}
                        className='w-full sm:w-auto'
                        sx={styles.buttonComponentStyles}
                    >
                        Dosyaları İndir ( {files?.length || 0} Dosya )
                    </Button>
                </div>
            </div>

            {previews.length > 0 && (
                <div className='bg-zinc-100 rounded-lg p-4 mb-4'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4'>
                        {previews.map((src, index) => (
                            <div key={index} className='relative h-[140px] w-full overflow-hidden bg-zinc-200 rounded-lg'>
                                <span className='absolute z-10 w-full h-full rounded-lg bg-black/40'></span>
                                <Image
                                    src={src}
                                    alt='preview'
                                    width={200}
                                    height={200}
                                    className='w-full h-[140px] object-cover rounded-lg overflow-hidden'
                                />

                                <div className='flex space-x-3 items-start text-white text-5xl absolute z-20 bottom-3 left-[50%] transform -translate-x-1/2'>
                                    <IconButton
                                        aria-label="delete"
                                        size="medium"
                                        color="inherit"
                                        sx={{ background: '#ffffff50' }}
                                        onClick={() => handleRemovePreview(index)}
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className='bg-zinc-100 rounded-lg p-4 mb-4'>
                <div>
                    {files?.length === 0 && (
                        <div className='text-sm text-center text-gray-400 w-full flex items-center justify-center space-x-2'>
                            <span>
                                <PermMediaIcon fontSize="medium" />
                            </span>
                            <span>Henüz Dosya Eklenmedi</span>
                        </div>
                    )}
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4'>
                    {files?.map((image: ImageStorageItemInput, index: number) => (
                        <div key={index} className='relative w-full h-[140px]'>
                            <span className='absolute z-10 w-full h-full rounded-lg bg-black/40'></span>
                            <StorageImage
                                path={image.path as string}
                                alt='reference-image'
                                className='w-full h-[140px] object-cover rounded-lg overflow-hidden'
                            />

                            <div className='flex space-x-3 items-start text-white text-5xl absolute z-20 bottom-3 left-[50%] transform -translate-x-1/2'>
                                <IconButton
                                    aria-label="download"
                                    size="medium"
                                    color="inherit"
                                    sx={{ background: '#ffffff50' }}
                                    onClick={() => handleDownloadSingleFile(image.path as string)}
                                >
                                    <DownloadForOfflineIcon fontSize="inherit" />
                                </IconButton>

                                <IconButton
                                    aria-label="delete"
                                    size="medium"
                                    color="inherit"
                                    sx={{ background: '#ffffff50' }}
                                    onClick={() => handleDelete(image)}
                                >
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaManager;
