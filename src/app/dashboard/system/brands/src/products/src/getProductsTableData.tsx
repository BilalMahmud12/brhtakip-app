import type { Product } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge } from '@aws-amplify/ui-react'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Icon from '@/components/core/icon';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function getProductsTableData(
    data: Product[],
    columns: DataTableColumn[],
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void
) {
    const router = useRouter();

    return data.map((product) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(product[column.key as keyof Product], product);
            } else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/brands/src/products/update`);
                                    handleEdit(product)
                                }}
                            >
                                {product.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <div className='flex items-center space-x-1 h-full'>
                                <FiberManualRecordIcon
                                    color={product.isActive === true ? 'success' : 'disabled'}
                                    fontSize="small"
                                />
                                <span className='text-xs block font-medium'>{product.isActive === true ? 'Aktif' : 'Aktif Değil'}</span>
                            </div>
                        )
                        break;

                    // case 'brandID':
                    //     row[column.key] = (
                    //         <Button className='hover:underline hover:text-blue-700'>
                    //             {'brand Name'}
                    //         </Button>
                    //     );
                    //     break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center h-full'>
                                <IconButton
                                    aria-label="edit"
                                    size="small"

                                    onClick={() => {
                                        router.push(`/dashboard/system/brands/products/update`);
                                        handleEdit(product)
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
                        row[column.key] = product[column.key as keyof Product];
                        break;
                }
            }
        });

        row['onEdit'] = () => handleEdit(product);
        row['onDelete'] = () => handleDelete(product);
        row['onSelect'] = () => handleSelect(product);
        row['originalData'] = product;

        return row;
    });
}
