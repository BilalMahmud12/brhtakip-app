'use client'
import React from 'react';
import * as Repo from '@/repository/index';
import Icon from '@/components/core/icon';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import { toast } from 'sonner';
import { RequestStatus } from '@/API';
import { useRouter } from 'next-nprogress-bar';

const getStatus = (status: string) => {
    switch (status) {
        case 'PENDING_APPRVOAL':
            return { text: 'Onay Bekliyor', color: 'warning' }
        case 'IN_DESIGN':
            return { text: 'Tasarımda', color: 'warning' }
        case 'IN_PRESS':
            return { text: 'Baskıda', color: 'warning' }
        case 'IN_APPLICATION':
            return { text: 'Uygulamada', color: 'warning' }
        case 'COMPLETED':
            return { text: 'Tamamlandı', color: 'success' }
        case 'CANCELLED':
            return { text: 'İptal Edildi', color: 'danger' }
        default:
            return { text: 'Bilinmeyen Durum', color: 'gray' };
    }
}

const RequestDataCardActionsMenu: React.FC<{ data: any }> = ({ data }) => {
    const router = useRouter()

    const handleStatusChange = async (status: string, data: any) => {
        try {
            const response = await Repo.RequestRepository.updateStatus(data.id, status as RequestStatus)

            if (response) {
                console.log('Request status updated', response)
                toast.success(`${data.requestNumber} numaralı talep ${getStatus(status).text} durumuna geçirildi`);

                switch (status) {
                    case 'IN_DESIGN':
                        router.push('/dashboard/requests/in-design')
                        break;
                    case 'IN_PRESS':
                        router.push('/dashboard/requests/in-print')
                        break;
                    case 'IN_APPLICATION':
                        router.push('/dashboard/requests/in-application')
                        break;
                    case 'COMPLETED':
                        router.push('/dashboard/requests/completed')
                        break;
                    case 'CANCELLED':
                        router.push('/dashboard/requests/cancelled')
                        break;
                    default:
                        router.push('/dashboard/requests')
                }


            }
        }
        catch (error) {
            console.error('Error updating request status', error)
        }

    }

    return (
        <div>
            {data.status === 'PENDING_APPROVAL' && (
                <Dropdown
                    id='actions-menu'
                    showArrow
                    classNames={{
                        base: "before:bg-default-200 right-0", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                >
                    <DropdownTrigger>
                        <button aria-label="Open actions menu">
                            <Icon iconName='dots' className='text-xl text-zinc-700' />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Actions menu">
                        <DropdownSection title='Durumu' showDivider>
                            <DropdownItem
                                startContent={<Icon iconName='FcEditImage' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('IN_DESIGN', data)}
                            >
                                Tasarıma Aktar
                            </DropdownItem>

                            <DropdownItem
                                startContent={<Icon iconName='FcServices' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('IN_APPLICATION', data)}
                            >
                                Uygulamaya Aktar
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection title="Eylemler">
                            <DropdownItem
                                startContent={<Icon iconName='FcViewDetails' className='w-5 h-5' />}
                                onClick={() => { }}
                            >
                                Talep Düzenle
                            </DropdownItem>

                            <DropdownItem
                                startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('CANCELLED', data)}
                            >
                                İptal Et
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            )}

            {data.status === 'IN_DESIGN' && (
                <Dropdown
                    id='actions-menu'
                    showArrow
                    classNames={{
                        base: "before:bg-default-200 right-0", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                >
                    <DropdownTrigger>
                        <button aria-label="Open actions menu">
                            <Icon iconName='dots' className='text-xl text-zinc-700' />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Actions menu">
                        <DropdownSection title='Durumu' showDivider>
                            <DropdownItem
                                startContent={<Icon iconName='FcPrint' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('IN_PRESS', data)}
                            >
                                Baskıya Aktar
                            </DropdownItem>

                            <DropdownItem
                                startContent={<Icon iconName='FcFinePrint' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('PENDING_APPROVAL', data)}
                            >
                                Onay Bekleyenlere geri aktar
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection title="Eylemler">
                            <DropdownItem
                                startContent={<Icon iconName='FcViewDetails' className='w-5 h-5' />}
                                onClick={() => { }}
                            >
                                Talep Düzenle
                            </DropdownItem>

                            <DropdownItem
                                startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('CANCELLED', data)}
                            >
                                İptal Et
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            )}

            {data.status === 'IN_PRESS' && (
                <Dropdown
                    id='actions-menu'
                    showArrow
                    classNames={{
                        base: "before:bg-default-200 right-0", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                >
                    <DropdownTrigger>
                        <button aria-label="Open actions menu">
                            <Icon iconName='dots' className='text-xl text-zinc-700' />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Actions menu">
                        <DropdownSection title='Durumu'>
                            <DropdownItem
                                startContent={<Icon iconName='FcServices' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('IN_APPLICATION', data)}
                            >
                                Uygulamaya Aktar
                            </DropdownItem>
                            <DropdownItem
                                startContent={<Icon iconName='FcOk' className='w-5 h-5' />}
                                onClick={() => handleStatusChange('COMPLETED', data)}
                            >
                                Tamamlananlara Aktar
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            )}

            {data.status === 'IN_APPLICATION' && (
                <Dropdown
                    id='actions-menu'
                    showArrow
                    classNames={{
                        base: "before:bg-default-200 right-0", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                >
                    <DropdownTrigger>
                        <button aria-label="Open actions menu">
                            <Icon iconName='dots' className='text-xl text-zinc-700' />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Actions menu">
                        <DropdownItem
                            startContent={<Icon iconName='FcOk' className='w-5 h-5' />}
                            onClick={() => handleStatusChange('COMPLETED', data)}
                        >
                            Tamamlananlara Aktar
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}
        </div>
    )
}

export default RequestDataCardActionsMenu