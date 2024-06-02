import React from 'react'
import { Request } from '@/API'
import { formateDate } from '@/utils/helpers'

interface DetailedRequestTableCellProps {
    request: Request
}

const getStatus = (status: string) => {
    switch (status) {
        case 'PENDING_APPROVAL':
            return { text: 'Onay Bekliyor', color: 'warning' }
        case 'WAITING_DESIGN':
            return { text: 'Tasarım Bekliyor', color: 'warning' }
        case 'WAITING_PRESS':
            return { text: 'Baskı Bekliyor', color: 'warning' }
        case 'COMPLETE':
            return { text: 'Tamamlandı', color: 'success' }
        case 'CANCELLED':
            return { text: 'İptal Edildi', color: 'danger' }
        default:
            return { text: 'Bilinmeyen Durum', color: 'gray' };
    }
}

const DetailedRequestTableCell: React.FC<DetailedRequestTableCellProps> = (props) => {
    const { request } = props
    
    return (
        <div className='py-6'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-3'>
                <span className='col-span-1'>
                    <span className='block text-xs font-medium mb-1.5'>
                        Talep Durumu
                    </span>
                    <span className='max-w-[145px] flex items-center space-x-2 px-3.5 py-1 bg-red-50 border border-red-300 rounded-sm'>
                        <span className={`w-3 h-3 rounded-full bg-[#ff1717]`} />
                        <span className='text-xs font-medium'>
                            {getStatus(request.status as string).text}
                        </span>
                    </span>
                </span>

                <span className='col-span-1'>
                    <span className='block text-xs font-medium mb-1.5'>
                        Talep No
                    </span>
                    <span className='flex items-center text-sm font-medium px-3 py-0.5 h-[26px] rounded-sm bg-zinc-100 border border-x-zinc-200'>
                        <span>{request.requestNumber}</span>
                    </span>
                </span>

                <span className='col-span-1'>
                    <span className='block text-xs font-medium mb-1.5'>
                        Talep Tarihi
                    </span>
                    <span className='flex items-center text-sm font-medium px-3 py-0.5 h-[26px] rounded-sm bg-zinc-100 border border-x-zinc-200'>
                        <span>{formateDate(request.createdAt)}</span>
                    </span>
                </span>

                <span className='col-span-3'>
                    <span className='block text-xs font-medium mb-1.5'>
                        Dosya Adı
                    </span>

                    <span className='flex flex-wrap items-center space-x-1 px-3 py-1.5 rounded-sm bg-zinc-100 border border-x-zinc-200'>
                        <span>{request.requestNumber}</span>
                        <span>-- {(request as Request)?.Store?.name}</span>
                        <span>- {(request as Request)?.Store?.Area?.name} {(request as Request)?.Store?.District?.name} {(request as Request)?.Store?.City?.name}</span>
                        <span>-- {request.Brand?.name} - {request.Product?.name}</span>
                        <span>- {request.requestDetails?.quantity} Adet </span>
                        <span>- {request.requestDetails?.width}x{request.requestDetails?.height}</span>
                        <span>- {request.Material?.name} </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default DetailedRequestTableCell