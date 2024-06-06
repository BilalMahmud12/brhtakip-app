import React, { useState } from 'react'
import RequestCard from './requestCard'
import { useStore } from '@/stores/utils/useStore';
import { Skeleton } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';

const RequestDataCards: React.FC<{ 
    data: any[]
    handleEdit?: (data: any) => void 
}> = observer(({ data, handleEdit = () => {} }) => {

    const { requestStore } = useStore();
    
    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const selectedRequests = [...requestStore.getSelectedRequests];
        const isChecked = event.target.checked;

        if (isChecked) {
            if (!selectedRequests.includes(id)) {
                requestStore.setSelectedRequests([...selectedRequests, id]);
            }
        } else {
            requestStore.setSelectedRequests(
                selectedRequests.filter((item: string) => item !== id)
            );
        }
    };

    return (
        <div>
            {requestStore.getFetchingStatus && (
                <div className='grid grid-cols-2 gap-4 mb-4 opacity-60'>
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

            <div className='grid grid-cols-2 gap-4 mb-4'>
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
})

export default RequestDataCards