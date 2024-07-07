'use client'
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { handleFormChange, DesignRevision, setImageDrawerOpen } from '@/reduxStore/features/requestSlice';
import { TextField, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImagesDrawer from '../../[...request]/src/imagesDrawer';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


const RequestDesignRevisions: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const designRevisions = useAppSelector((state: RootState) => state.request.requestForm.designRevisions);
    const requestForm = useAppSelector((state: RootState) => state.request.requestForm);
    const requestFormRef = React.useRef(requestForm);
    requestFormRef.current = requestForm;

    const imagesDrawerOpen = useAppSelector((state: RootState) => state.request.imagesDrawerOpen);
    const imagesDrawerOpenRef = React.useRef(imagesDrawerOpen);
    imagesDrawerOpenRef.current = imagesDrawerOpen;

    const selectedRevisionImages = useAppSelector((state: RootState) => state.request.selectedRevisionImages);
    const selectedRevisionImagesRef = React.useRef(selectedRevisionImages);
    selectedRevisionImagesRef.current = selectedRevisionImages;
    
    console.log('selectedRevisionImages:', selectedRevisionImages);

    const [localRevisions, setLocalRevisions] = React.useState<DesignRevision[]>([]);
    
    const handleAddRevision = () => {
        setLocalRevisions([...localRevisions, { note: '' }]);
    }

    const handleRemoveRevision = (index: number) => {
        const updatedRevisions = localRevisions.filter((_, idx) => idx !== index);
        setLocalRevisions(updatedRevisions);
        dispatch(handleFormChange({ key: 'designRevisions', value: updatedRevisions }));
    }

    const handleRevisionChange = (index: number, key: string, value: string) => {
        const updatedRevisions = localRevisions.map((revision, idx) => {
            if (idx === index) {
                return {
                    ...revision,
                    [key]: value
                }
            }

            return revision;
        });

        setLocalRevisions(updatedRevisions);
        dispatch(handleFormChange({ key: 'designRevisions', value: updatedRevisions }));
    }

    return (
        <React.Fragment>
            <h2 className='text-base font-semibold mb-6'>Tasarım Revizyonları</h2>

            <div className='space-y-3'>
                <div className='flex items-center justify-start'>
                    <Button
                        variant="contained"
                        size='small'
                        startIcon={<AddIcon />}
                        onClick={handleAddRevision}
                    >
                        Revize Ekle
                    </Button>
                </div>

                <div className='space-y-3 bg-zinc-100 rounded-md border border-zinc-200 px-4 py-4'>
                    {localRevisions.length === 0 && (
                        <div className='text-center text-zinc-400'>
                            Henüz revizyon eklenmemiş.
                        </div>
                    )}

                    {localRevisions.map((revision, index) => (
                        <div key={index} className='w-full bg-white shadow px-6 pb-2 pt-4 rounded-md'>
                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6 gap-y-8 mb-4'>
                                <div className='col-span-5'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <Button
                                            variant="contained"
                                            size='small'
                                            startIcon={<AddAPhotoIcon />}
                                            onClick={() => dispatch(setImageDrawerOpen(true))}
                                        >
                                            Tasarımlar Seç
                                        </Button>

                                        <IconButton aria-label="delete" size='medium' onClick={() => handleRemoveRevision(index)}>
                                            <DeleteIcon fontSize='inherit' />
                                        </IconButton>
                                    </div>
                                    {revision.images ? (
                                        <div className=''>
                                            <div className='grid grid-cols-3 gap-4'>
                                                {revision.images.map((image, idx) => (
                                                    <div key={idx} className='bg-zinc-200 rounded-md p-2'>
                                                        <img src={image} alt='' className='w-full h-full' />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ): (
                                        <div className=''>
                                                <div className='text-center text-zinc-400 bg-zinc-100 rounded-md border border-zinc-200 px-4 py-4'>
                                                Henüz bir tasarım seçilmemiş.
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className='input-group w-full col-span-5'>
                                    <label htmlFor="revisionNote" className='block text-xs font-medium mb-1.5'>
                                        Revize Notu
                                    </label>
                                    <TextField
                                        id='revisionNote'
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                        helperText={''}
                                        value={revision.note || ''}
                                        onChange={(e) => handleRevisionChange(index, 'note', e.target.value)}
                                        multiline={true}
                                        rows={4}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <ImagesDrawer 
                        images={requestForm.designImages || []} 
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequestDesignRevisions;