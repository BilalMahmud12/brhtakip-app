'use client'
import type { ApplicationArea } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import { useRouter } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function getApplicationAreaTableData(
    data: ApplicationArea[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((applicationArea) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(applicationArea[column.key as keyof ApplicationArea], applicationArea);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/applicationAreas/${applicationArea.id}`);
                                    handleEdit(applicationArea)
                                }}
                            >
                                {applicationArea.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={applicationArea.isActive ? 'success' : 'error'}>
                                {applicationArea.isActive ? 'Aktif' : 'İnaktif'}
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
                                        router.push(`/dashboard/system/applicationAreas/${applicationArea.id}`);
                                        handleEdit(applicationArea)
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
                        row[column.key] = applicationArea[column.key as keyof ApplicationArea];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(applicationArea);
        row['onDelete'] = () => handleDelete(applicationArea);
        row['onSelect'] = () => handleSelect(applicationArea);
        row['originalData'] = applicationArea;

        return row;
    })
}