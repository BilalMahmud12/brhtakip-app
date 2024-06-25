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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/brands/${brand.id}`);
                                    handleEdit(brand)
                                }}
                            >
                                {brand.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <div className='flex items-center space-x-1 h-full'>
                                <FiberManualRecordIcon
                                    color={brand.isActive === true ? 'success' : 'disabled'}
                                    fontSize="small"
                                />
                                <span className='text-xs block font-medium'>{brand.isActive === true ? 'Aktif' : 'Aktif Değil'}</span>
                            </div>
                        )
                        break;

                    case 'Products':
                        row[column.key] = (
                            <div className='h-full flex items-center ml-3'>
                                <span className='flex items-center justify-center w-6 h-6 rounded-full bg-red-100 border border-red-200 text-xs font-medium'>{brand.Products?.items?.length || 0}</span>
                            </div>
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