import React from 'react'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setSelectedRequests } from '@/reduxStore/features/requestSlice';

import RequestCard from './requestCard'
import { Skeleton } from "@nextui-org/react";

const RequestDataCards: React.FC<{ 
    data: any[]
    handleEdit?: (data: any) => void 
}> = ({ data, handleEdit = () => {} }) => {

    const dispatch = useAppDispatch<AppDispatch>();
    const isFetching = useAppSelector((state: RootState) => state.request.isFetching);
    const selectedRequests = useAppSelector((state: RootState) => state.request.selectedRequests);
    
    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const requests = [...selectedRequests];
        const isChecked = event.target.checked;

        if (isChecked) {
            if (!requests.includes(id)) {
                dispatch(setSelectedRequests([...requests, id]));
            }
        } else {
            dispatch(setSelectedRequests(requests.filter((item: string) => item !== id)));
        }
    };

    return (
        <div>
            {isFetching && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 opacity-60'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='bg-white rounded-md shadow p-6 '>
                            <div className='flex flex-col justify-between h-full gap-y-3'>
                                <Skeleton className='h-12 w-full rounded-md' />
                                <Skeleton className='h-12 w-full rounded-md' />
                            </div>
                        </div>
                    ))}
                </div>           
            )} 

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                {data.map((item) => (
                    <div key={item.id}>
                        <RequestCard 
                            data={item}
                            handleSelect={handleSelect}
                            handleEdit={(data) => handleEdit(data)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RequestDataCards