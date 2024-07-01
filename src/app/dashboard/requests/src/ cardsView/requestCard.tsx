'use client'
import React, { useState } from 'react';
import { Chip, Tooltip } from "@nextui-org/react";
import { CheckboxField } from '@aws-amplify/ui-react';
import Icon from '@/components/core/icon';
import RequestDataCardActionsMenu from './requestCardActionsMenu';

const getStatus = (status: string) => {
    switch (status) {
        case 'PENDING_APPROVAL':
            return { text: 'Onay Bekliyor', color: 'danger' }
        case 'IN_DESIGN':
            return { text: 'Tasarımda', color: 'default' }
        case 'IN_PRESS':
            return { text: 'Baskıda', color: 'warning' }
        case 'IN_APPLICATION':
            return { text: 'Uygulamada', color: 'success' }
        case 'COMPLETED':
            return { text: 'Tamamlandı', color: 'success' }
        case 'CANCELLED':
            return { text: 'İptal Edildi', color: 'danger' }
        default:
            return { text: 'Bilinmeyen Durum', color: 'gray' };
    }
}

const RequestCard: React.FC<{ 
    data: any,
    handleSelect?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void
    handleEdit?: (data: any) => void
}> = ({ 
    data,
    handleSelect = () => {},
    handleEdit = () => {}
}) => {
    const [showBody, setShowBody] = useState(false)

    return (
        <article className='relative bg-white rounded-md shadow p-6'>
            <header className='pb-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <span>
                            <CheckboxField
                                name={`requestCardCheckbox`}
                                label={data.requestNumber}
                                className='text-zinc-600 font-semibold text-sm'
                                onChange={(event) => handleSelect(event, data.id)}
                            />
                        </span>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <button onClick={() => setShowBody(!showBody)} aria-label="Toggle content visibility">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 transition-all duration-300 ease-in-out ${showBody ? 'rotate-180' : ''}`}>
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button onClick={() => handleEdit(data)} aria-label="Toggle content visibility">
                            <Icon iconName='MdEdit' className='text-xl' />
                        </button>

                        <RequestDataCardActionsMenu data={data} />
                    </div>
                </div>
            </header>
            
            {showBody && (
                <section className='py-4 space-y-4 border-t border-zinc-200'>
                    <div className='flex items-start space-x-6'>
                        <div className='flex-1'>
                            <span className='block text-xs mb-2 text-zinc-400'>Mağaza</span>
                            <span className='flex flex-wrap items-center text-sm'>
                                <span className='block font-semibold text-zinc-600'>{data?.Store?.name}</span>
                                <span className='block text-zinc-400'>{data?.Store?.Area?.name} {data?.Store?.District?.name} {data?.Store?.City?.name}</span>
                            </span>
                        </div>

                        <div className='flex-1'>
                            <span className='block text-xs mb-2 text-zinc-400'>Marka</span>
                            <span className='text-sm font-semibold text-zinc-600'>{data?.Brand?.name} - {data?.Product?.name}</span>
                        </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                        <div className='flex-1'>
                            <span className='block text-xs mb-2 text-zinc-400'>Malzeme</span>
                            <span className='text-sm text-zinc-600'>
                                {data?.requestDetails.quantity} Adet: {data?.Material?.name} <br />
                                En {data?.requestDetails?.width} cm x Boy {data?.requestDetails?.height} cm
                            </span>
                        </div>

                        <div className='flex-1'>
                            <span className='block text-xs mb-2 text-zinc-400'>Talep Tarihi</span>
                            <span className='text-sm font-semibold text-zinc-600'>{data?.createdAt}</span>
                        </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                        <div className='flex-1'>
                            <span className='block text-xs mb-2 text-zinc-400'>Tasarım Notu</span>
                            <span className='text-sm text-zinc-600 italic'>"{data?.requestDetails?.designNote}"</span>
                        </div>
                    </div>

                </section>
            )}
            
            <footer className='border-t border-zinc-200 pt-2'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Tooltip 
                            content={<span className='text-xs max-w-[350px]'>{data.requestNumber} -- {data?.Store?.name} -- {data?.Brand?.name} -- {data?.Product?.name} -- {data?.Material?.name} -- {data?.requestDetails.quantity} Adet -- En {data?.requestDetails?.width} cm x Boy {data?.requestDetails?.height} cm</span>} 
                            placement='bottom-start'
                            showArrow={true}
                            delay={1000}
                        >
                            <span className='flex items-center space-x-1 hover:cursor-pointer hover:underline'>
                                <Icon iconName='FcFolder' className='text-xl' />
                                <span className='text-zinc-600 text-sm'>Dosya Adı kopyala</span>
                            </span>
                        </Tooltip>
                    </div>
                    
                    <div>
                        <Chip
                            color={getStatus(data.status).color as "primary" | "warning" | "success" | "danger" | "default" | "secondary" | undefined}
                            size='sm'
                            classNames={{
                                base: 'bg-red-50 border border-red-300 rounded-full',
                                content: 'text-xs text-red-500 font-medium',
                            }}

                        >
                            { getStatus(data.status).text }
                        </Chip>
                    </div>
                </div>
            </footer>
        </article>
    )
}

export default RequestCard