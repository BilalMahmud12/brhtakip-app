import type { Request } from '@/API'
import { formateDate } from '@/utils/helpers';
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations  } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import { requestStatusColors } from '@/config';

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

type RequestTempType = Request & {
    Brand: { name: string },
    Product: { name: string },
    Store: { name: string }
}

export default function getRequestsTableData(
    data: RequestTempType[], 
    columns: any, 
    handleEdit: (data: any) => void, 
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void
) {

    return data.map((request) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(request[column.key as keyof Request], request);
            }

            else {
                switch (column.key) {
                    case 'requestNumber':
                        row[column.key] = (
                            <div className='h-full flex items-center'>
                                <span
                                    onClick={() => handleEdit(request)}
                                    //className={`bg-yellow-100 border-yellow-300 block px-3 py-1 rounded-md border w-full text-xs text-yellow-800 font-semibold hover:underline hover:text-blue-700 hover:cursor-pointer`}
                                    className='font-medium hover:cursor-pointer'
                                >
                                    {request.requestNumber}
                                </span>
                            </div>
                        )
                        break;
                    case 'status':
                        row[column.key] = (
                            <Chip 
                                label={getStatus(request.status as string).text}
                                size="small"
                                sx={{ backgroundColor: '#f7f7f7', color: '#333333' }}
                                className='bg-[#f7f7f7] text-[#333333] border border-[#f7f7f7]'
                            />
                        );
                        break;

                    case 'brand':
                        row[column.key] = (
                            <span className='flex items-center space-x-2'>
                                <span>— </span>
                                <span className='font-medium'>{request.Brand?.name}</span>
                                <span className='px-2 py-0.5 bg-orange-50 border border-orange-300 rounded-md text-xs font-medium text-orange-700'>{request.Product?.name}</span>
                            </span>
                        ) 
                        break;

                    case 'store':
                        row[column.key] = (
                            <span className='flex items-center space-x-2'>
                                <Icon iconName={'FCShop'} className='text-lg' />
                                
                                <span className=' font-medium mb-0.5'>{request.Store?.name}</span>
                                <span>— </span>
                                <span className=' items-center space-x-2'>
                                    
                                    <span>{request.Store?.District?.name},</span>
                                    <span>{request.Store?.Area?.name}</span>
                                </span>
                            </span>
                        )
                        break;

                    case 'createdAt':
                        row[column.key] = formateDate(request.createdAt);
                        break;
                        
                    case 'actions':
                        row[column.key] = (
                            <>
                                <div className='flex items-center  h-full'>
                                    <IconButton
                                        size='small'
                                        onClick={() => handleEdit(request)}
                                    >
                                        <EditIcon fontSize='small' />
                                    </IconButton>
                                </div>

                                <div className='flex justify-center'>
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                variant="light"
                                                className='max-w-[25px] h-[30px] block w-[25px] min-w-0 hover:bg-transparent p-0.5'
                                            >
                                                <Icon iconName='GoKebabHorizontal' className='w-5 h-5' />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label='row-actions'>
                                            <DropdownItem
                                                key="update-status"
                                                startContent={<Icon iconName='FcSerialTasks' className='w-5 h-5' />}
                                                onClick={() => handleEdit(row)}
                                            >
                                                Durumu Güncelle
                                            </DropdownItem>

                                            <DropdownItem
                                                key="update"
                                                startContent={<Icon iconName='FcSupport' className='w-5 h-5' />}
                                                onClick={() => handleEdit(row)}
                                            >
                                                Talep Güncelle
                                            </DropdownItem>

                                            <DropdownItem
                                                key="cancel"
                                                startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                            >
                                                Talep İptal Et
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </>
                        );
                        break;
                    default:
                        row[column.key] = request[column.key as keyof Request];
                        break;
                }
            }
        })

        row['id'] = request.id;
        row['onEdit'] = () => handleEdit(request);
        row['onDelete'] = () => handleDelete(request);
        row['onSelect'] = () => handleSelect(request);
        row['originalData'] = request;

        return row;
    })
}