'use client'
import React, { useEffect, useState } from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { dictionary } from '@/config/index';

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

    const [files, setFiles] = useState<{ [key: string]: { status: string } }>({});

    const targetPath = `${basePath}/${uploadPath}/`;

    useEffect(() => {
        handleOnUploadSuccess(files);
    }, [files]);

    return (
        <StorageManager
            acceptedFileTypes={['image/*']}
            path={targetPath}
            maxFileCount={50}
            displayText={dictionary['tr']}
            autoUpload={false}
            onUploadSuccess={({ key }) => {
                setFiles((prevFiles) => {
                    const updatedFiles = {
                        ...prevFiles,
                        ...(key && {
                            [key]: {
                                status: 'success',
                            },
                        })
                    };
                    return updatedFiles;
                });
            }}
            isResumable
        />
    );
}

export default MediaUploadManager;
