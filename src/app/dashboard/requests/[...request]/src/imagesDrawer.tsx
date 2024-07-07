'use client'
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { setImageDrawerOpen, setSelectedRevisionImages } from '@/reduxStore/features/requestSlice';
import Drawer from '@mui/material/Drawer';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import type { ImageStorage } from '@/reduxStore/features/requestSlice';
import { Button } from '@mui/material';

const ImagesDrawer: React.FC<{
    images: ImageStorage[];
}> = ({
    images = []
}) => {
        const dispatch = useAppDispatch();
        const imagesDrawerOpen = useAppSelector((state: RootState) => state.request.imagesDrawerOpen);
        const [selectedImages, setSelectedImagesState] = React.useState<string[]>([]);

        const toggleImageSelection = (path: string) => {
            setSelectedImagesState((prevSelectedImages) =>
                prevSelectedImages.includes(path)
                    ? prevSelectedImages.filter((imgPath) => imgPath !== path)
                    : [...prevSelectedImages, path]
            );
        };

        const handleConfirm = () => {
            dispatch(setSelectedRevisionImages(selectedImages));
            dispatch(setImageDrawerOpen(false));
        };

        const handleCancel = () => {
            setSelectedImagesState([]);
            dispatch(setImageDrawerOpen(false));
        };

        return (
            <React.Fragment>
                <Drawer
                    anchor='bottom'
                    open={imagesDrawerOpen}
                    hideBackdrop={true}
                    sx={{
                        '& .MuiDrawer-paperAnchorBottom': {
                            maxHeight: '80vh',
                        }
                    }}
                >
                    <div className='px-6 py-4'>
                        <div className='flex items-center justify-between mb-6'>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleConfirm}
                            >
                                Onayla
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleCancel}
                            >
                                Vazgeç
                            </Button>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4'>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative w-full h-full min-h-[200px] max-h-[200px] cursor-pointer ${selectedImages.includes(image.path) ? 'border-4 border-blue-500 rounded-xl' : ''}`}
                                    onClick={() => toggleImageSelection(image.path)}
                                >
                                    <span className='absolute z-10 w-full h-full rounded-lg bg-black/40'></span>
                                    <StorageImage
                                        path={image.path}
                                        alt='reference-image'
                                        className='w-full h-full object-cover rounded-lg overflow-hidden'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Drawer>
            </React.Fragment>
        );
    }

export default ImagesDrawer;