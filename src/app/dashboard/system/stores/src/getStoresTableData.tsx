'use client'
import { useRouter } from 'next-nprogress-bar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Badge } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';
import type { Store } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//Brand
export default function getStoresTableData(
    data: Store[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((store) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(store[column.key as keyof Store], store);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/stores/${store.id}`);
                                    handleEdit(store)
                                }}
                            >
                                {store.name}
                            </div>
                        );
                        break;

                    case 'address':
                        row[column.key] = <div>{store.address}</div>
                        break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center h-full'>
                                <IconButton
                                    aria-label="edit"
                                    size="small"
                                // onClick={}
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
                        row[column.key] = store[column.key as keyof Store];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(store);
        row['onDelete'] = () => handleDelete(store);
        row['onSelect'] = () => handleSelect(store);
        row['originalData'] = store;

        return row;
    })
}