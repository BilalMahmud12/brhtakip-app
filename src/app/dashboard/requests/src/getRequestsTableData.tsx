
import type { Request } from '@/API'
import { formateDate } from '@/utils/helpers';
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations  } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';

const getStatus = (status: string) => {
    switch (status) {
        case 'PENDING_APPROAL':
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
                            <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>{request.requestNumber}</span>
                        )
                        break;

                    case 'status':
                        row[column.key] = (
                            <Badge variation={getStatus(request.status as string).color as BadgeVariations} size="small">
                                {getStatus(request.status as string).text}
                            </Badge>
                        );
                        break;

                    case 'brand':
                        row[column.key] = `${request.Brand?.name} - ${request.Product?.name}`;
                        break;

                    case 'store':
                        row[column.key] = request.Store?.name;
                        break;

                    case 'createdAt':
                        row[column.key] = formateDate(request.createdAt);
                        break;
                        
                    case 'actions':
                        row[column.key] = (
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
                        );
                        break;
                    default:
                        row[column.key] = request[column.key as keyof Request];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(request);
        row['onDelete'] = () => handleDelete(request);
        row['onSelect'] = () => handleSelect(request);
        row['originalData'] = request;

        return row;
    })
}