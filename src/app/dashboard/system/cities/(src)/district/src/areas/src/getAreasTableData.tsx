'use client'
import type { Area } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import { useRouter } from 'next/navigation';
//Material
export default function getAreasTableData(
    data: Area[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((area) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(area[column.key as keyof Area], area);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => handleEdit(area)}>
                                {area.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={area.isActive ? 'success' : 'error'}>
                                {area.isActive ? 'Aktif' : 'İnaktif'}
                            </Badge>
                        );
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
                                            key="update"
                                            startContent={<Icon iconName='FcSupport' className='w-5 h-5' />}
                                            onClick={() => handleEdit(area)}
                                        >
                                            Güncelle
                                        </DropdownItem>

                                        <DropdownItem
                                            key="cancel"
                                            startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                            onClick={() => handleDelete(row)}
                                        >
                                            Sil
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        );
                        break;
                    default:
                        row[column.key] = area[column.key as keyof Area];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(area);
        row['onDelete'] = () => handleDelete(area);
        row['onSelect'] = () => handleSelect(area);
        row['originalData'] = area;

        return row;
    })
}