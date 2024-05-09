'use client'
import { Button, CheckboxField, Badge, BadgeVariations, SearchField } from '@aws-amplify/ui-react'
import { useStore } from '@/stores/useStore';
import { observer } from 'mobx-react-lite';
import Icon from '@/components/core/icon'

export default function Request() {
    const { requestStore } = useStore();

    const getStatus = (status: string) => {
        switch (status) {
            case 'PENDING_APPROAL':
                return { text: 'Onay Bekliyor', color: 'warning'}
            case 'WAITING_DESIGN':
                return { text: 'Tasarım Bekliyor', color: 'warning'}
            case 'WAITING_PRESS':
                return { text: 'Baskı Bekliyor', color: 'warning'}
            case 'COMPLETE':
                return { text: 'Tamamlandı', color: 'success'}
            case 'CANCELLED':
                return { text: 'İptal Edildi', color: 'danger'}
            default:
                return { text: 'Bilinmeyen Durum', color: 'gray'};
        }
    }


    console.log('requestStore', requestStore);
    return (
        <div>
            <h1 className='text-2xl font-medium'>Talepler</h1>

            

            <div className='mt-8 shadow bg-zinc-50'>
                <div className='px-6 py-6 mb-3 flex items-center justify-between'>
                    <div>
                        <div className=''>
                            <h2 className='text-lg font-medium'>Talepler</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        
                        <div className='flex items-center space-x-2'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={() => alert('hello')}
                                className='rounded-none h-[35px] bg-white border border-gray-600 text-gray-700'
                            >
                                <span>
                                    <Icon iconName='GrRefresh' className='text-lg' />
                                </span>
                            </Button>

                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={() => alert('hello')}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Talep Oluştur</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-6'>
                    <div className='flex items-center space-x-2'>
                        <SearchField
                            label="Search"
                            size='small'
                            placeholder="Talepler Ara"
                            className='min-w-[400px] h-[35px] bg-white rounded-none'
                        />
                        <Button
                            variation="primary"
                            colorTheme="success"
                            size="small"
                            loadingText=""
                            onClick={() => alert('hello')}
                            className='rounded-none h-[35px] bg-white border border-gray-600 text-gray-700'
                        >
                            <span>
                                <Icon iconName='HiOutlineFilter' className='text-lg' />
                            </span>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className='mt-8'>
                        <div className='mt-4'>
                            <table className='w-full border-b border-t border-gray-200 overflow-x-auto'>
                                <thead className='border-b border-gray-300'>
                                    <tr>
                                        <th className='text-left text-sm px-3 py-2.5 text-gray-600 border-r border-gray-200 w-4'>
                                            <CheckboxField
                                                name='checkbox'
                                                value="yes"
                                                label=""
                                                className='bg-gray-100 border-none'
                                            />
                                        </th>
                                        <th className='text-left text-sm px-3 py-2.5 text-gray-600 border-r border-gray-200 w-[15%]'>Talep No</th>
                                        <th className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200 w-[15%]'>Durum</th>
                                        <th className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>Marka</th>
                                        <th className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200 w-[20%]'>Mağaza</th>
                                        <th className='text-left text-sm px-3 py-1.5 text-gray-600 w-[18%]'>Tarih</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    {requestStore.getAllRequests.map((request) => (
                                        <tr key={request.id} className='border-b border-gray-100 hover:bg-zinc-100 hover:cursor-pointer'>
                                            <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                                <CheckboxField
                                                    name='checkbox'
                                                    value="yes"
                                                    label=""
                                                    className='bg-gray-100 border-none'
                                                />
                                            </td>
                                            <td className='text-left text-sm px-3 py-1.5 text-blue-600 border-r border-gray-200'>{request.request_number}</td>
                                            <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                                <Badge variation={getStatus(request.status as string).color as BadgeVariations} size="small">{getStatus(request.status as string).text}</Badge>
                                            </td>
                                            <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>{request.Brand?.name} - {request.Product?.name}</td>
                                            <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>{request.Store?.name}</td>
                                            <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>{request.createdAt}</td>
                                        </tr>
                                    ))}
                                    <tr className='border-b border-gray-100 hover:bg-zinc-100 hover:cursor-pointer'>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                            <CheckboxField
                                                name='checkbox'
                                                value="yes"
                                                label=""
                                                className='bg-gray-100 border-none'
                                            />
                                        </td>
                                        <td className='text-left text-sm px-3 py-1.5 text-blue-600 border-r border-gray-200'>BRH-0021152221</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                            <Badge variation="warning" size="small">Onayı Bekliyor</Badge>
                                        </td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>BIODERMA - Sensibio</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>Hayat Eczanesi - Ataşehir</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>12.12.2021</td>
                                    </tr>
                                    <tr className='border-b border-gray-100 hover:bg-zinc-100 hover:cursor-pointer'>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                            <CheckboxField
                                                name='checkbox'
                                                value="yes"
                                                label=""
                                                className='bg-gray-100 border-none'
                                            />
                                        </td>
                                        <td className='text-left text-sm px-3 py-1.5 text-blue-600 border-r border-gray-200'>BRH-0021120212</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                                            <Badge variation="success" size="small">Onaylandı</Badge>
                                        </td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>BIODERMA - Sensibio</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>Ece Eczanesi - Göztepe</td>
                                        <td className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>12.12.2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}