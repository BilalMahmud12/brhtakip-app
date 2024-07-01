'use client'
import { useRouter } from 'next-nprogress-bar';
import type { ExtraProduct } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function getExtraProductsTableData(
    data: ExtraProduct[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
) {
    const router = useRouter()

    return data.map((extraProduct) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column: DataTableColumn) => {
            if (column.transform) {
                row[column.key] = column.transform(extraProduct[column.key as keyof ExtraProduct], extraProduct);
            }
            else {
                switch (column.key) {
                    case 'name':
                        row[column.key] = (
                            <div
                                className='hover:underline hover:text-blue-700 cursor-pointer'
                                onClick={() => {
                                    router.push(`/dashboard/system/extraProduct/${extraProduct.id}`);
                                    handleEdit(extraProduct)
                                }}
                            >
                                {extraProduct.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <div className='flex items-center space-x-1 h-full'>
                                <FiberManualRecordIcon
                                    color={extraProduct.isActive === true ? 'success' : 'disabled'}
                                    fontSize="small"
                                />
                                <span className='text-xs block font-medium'>{extraProduct.isActive === true ? 'Aktif' : 'Aktif Değil'}</span>
                            </div>
                        )
                        break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center h-full'>
                                <IconButton
                                    aria-label="edit"
                                    size="small"
                                    onClick={() => {
                                        router.push(
                                            `/dashboard/system/extraProduct/${extraProduct.id}`
                                        );
                                        handleEdit(extraProduct)
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
                        row[column.key] = extraProduct[column.key as keyof ExtraProduct];
                        break;
                }
            }
        })

        row['onEdit'] = () => handleEdit(extraProduct);
        row['onDelete'] = () => handleDelete(extraProduct);
        row['onSelect'] = () => handleSelect(extraProduct);
        row['originalData'] = extraProduct;

        return row;
    })
}