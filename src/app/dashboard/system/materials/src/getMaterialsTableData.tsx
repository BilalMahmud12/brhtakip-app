'use client'
import type { Material } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import { useRouter } from 'next/navigation';

export default function getMaterialsTableData(
    data: Material[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((material) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(material[column.key as keyof Material], material);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => handleEdit(material)}>
                                {material.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={material.isActive ? 'success' : 'error'}>
                                {material.isActive ? 'Aktif' : 'İnaktif'}
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
                                            onClick={() => handleEdit(material)}
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
                        row[column.key] = material[column.key as keyof Material];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(material);
        row['onDelete'] = () => handleDelete(material);
        row['onSelect'] = () => handleSelect(material);
        row['originalData'] = material;

        return row;
    })
}