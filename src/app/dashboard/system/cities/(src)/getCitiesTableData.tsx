'use client'
import type { City } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import { useRouter } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function getCitiesTableData(
    data: City[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((city) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(city[column.key as keyof City], city);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/cities/${city.id}`);
                                    handleEdit(city);
                                }}
                            >
                                {city.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={city.isActive ? 'success' : 'error'}>
                                {city.isActive ? 'Aktif' : 'İnaktif'}
                            </Badge>
                        );
                        break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center h-full'>
                                <IconButton
                                    aria-label="edit"
                                    size="small"
                                    color='primary'
                                    onClick={() => {
                                        handleEdit(city)
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
                        row[column.key] = city[column.key as keyof City];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(city);
        row['onDelete'] = () => handleDelete(city);
        row['onSelect'] = () => handleSelect(city);
        row['originalData'] = city;

        return row;
    })
}