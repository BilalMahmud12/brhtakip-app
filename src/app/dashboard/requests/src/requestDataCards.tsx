import React, { useState } from 'react'
import RequestCard from './requestCard'
import { useStore } from '@/stores/utils/useStore';
import { AnyAaaaRecord } from 'dns';
import { Button, SelectField } from '@aws-amplify/ui-react';
import { Skeleton } from "@nextui-org/react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import Icon from '@/components/core/icon';
import { SearchField } from '@aws-amplify/ui-react';
import { observer } from 'mobx-react-lite';


const RequestDataCards: React.FC<{ data: any[] }> = observer(({ data }) => {

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
            <div className='px-6 py-3 bg-white shadow mb-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <SearchField
                            label="Search"
                            placeholder="Search here..."
                            size="small"
                            hasSearchButton={false}
                            hasSearchIcon={true}
                        />

                        <SelectField
                            label="Seçilen Talepler Eylemleri"
                            size="small"
                            placeholder="Eylem Seçiniz ..."
                            labelHidden={true}
                            isDisabled={!requestStore.getSelectedRequests.length}
                        >
                            <option value="IN_DESIGN">Tasarıma Aktar</option>
                            <option value="IN_PRESS">Baskıya Aktar</option>
                            <option value="IN_APPLICATION">Uygulamaya Aktar</option>
                            <option value="COMPLETED">Tamamla</option>
                            <option value="CANCELLED" disabled>İpat Et</option>
                        </SelectField>
                    </div>
                </div>
            </div>

            {!data.length && (
                <div className='grid grid-cols-3 gap-4 mb-4 opacity-60'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='h-[290px] bg-white rounded-md shadow p-6 gap-y-3'>
                            <div className='flex flex-col justify-between h-full'>
                                <Skeleton className='h-12 w-full rounded-md' />
                                <Skeleton className='h-32 w-full rounded-md' />
                                <Skeleton className='h-12 w-full rounded-md' />
                            </div>
                        </div>
                    ))}
                </div>           
            )} 

            <div className='grid grid-cols-3 gap-4 mb-4'>
                {data.map((item) => (
                    <div key={item.id}>
                        <RequestCard 
                            data={item}
                            handleSelect={handleSelect} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
})

export default RequestDataCards