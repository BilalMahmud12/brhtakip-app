'use client'
import { useRouter } from 'next-nprogress-bar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Badge } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';
import type { Brand } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function getBrandsTableData(
    data: Brand[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
    getClientName: (data: any) => void
) {
    const router = useRouter()

    return data.map((brand) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(brand[column.key as keyof Brand], brand);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div>
                                {brand.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={brand.isActive ? 'success' : 'error'} size='small' className='px-5'>
                                {brand.isActive ? 'Aktif' : 'İnaktif'}
                            </Badge>
                        );
                        break;

                    case 'Products':
                        row[column.key] = (
                            <Badge variation='info' size='small' className='px-5'>
                                {brand.Products?.items?.length || 0}
                            </Badge>
                        )
                        break;

                    case 'clientprofileID':
                        row[column.key] = getClientName(brand.clientprofileID);
                        break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center h-full'>
                                <IconButton
                                    aria-label="edit"
                                    size="small"
                                    color='primary'
                                    onClick={() => {
                                        router.push(
                                            `/dashboard/system/brands/${brand.id}`
                                        );
                                        handleEdit(brand)
                                    }}
                                >
                                    <EditIcon fontSize="inherit" />
                                </IconButton>

                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                    color='error'
                                    onClick={() => handleDelete(row)}
                                >
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        );
                        break;
                    default:
                        row[column.key] = brand[column.key as keyof Brand];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(brand);
        row['onDelete'] = () => handleDelete(brand);
        row['onSelect'] = () => handleSelect(brand);
        row['ongetClientName'] = () => getClientName(brand.clientprofileID);
        row['originalData'] = brand;

        return row;
    })
}