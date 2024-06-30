'use client'
import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';

interface MediaUploadManagerProps {
    basePath?: string;
    uploadPath: string;
    handleOnUploadSuccess?: (files: any) => void;
}

const MediaUploadManager: React.FC<MediaUploadManagerProps> = (props) => {
    const { 
        basePath = 'public', 
        uploadPath,
        handleOnUploadSuccess = () => { } 
    } = props;

    const [files, setFiles] = React.useState({});

    const targetPath = `${basePath}/${uploadPath}/`;

    return (
        <StorageManager
            acceptedFileTypes={['image/*']}
            path={targetPath}
            onUploadSuccess={({ key }) => {
                setFiles((prevFiles) => {
                    return {
                        ...prevFiles,
                        ...(key && {
                            [key]: {
                                status: 'success',
                            },
                        })
                    };
                });

                handleOnUploadSuccess(files);
            }}
            maxFileCount={10}
            isResumable
        />
    );
}

export default MediaUploadManager;