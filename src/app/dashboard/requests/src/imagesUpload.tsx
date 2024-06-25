'use client'
import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';

interface ImagesUploadProps {
    requestNumber: string;
    category: string;
}

const ImagesUpload: React.FC<ImagesUploadProps> = (props) => {
    const { requestNumber, category } = props;
    const [files, setFiles] = React.useState({});

    console.log('files', files);

    const targetPath = `public/${requestNumber}/${category}/`;
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
            }}
            maxFileCount={10}
            isResumable
        />
    );
}

export default ImagesUpload;