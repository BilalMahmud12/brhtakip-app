import type { Product } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge } from '@aws-amplify/ui-react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

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

        // columns.forEach((column: DataTableColumn) => {
        //     if (column.transform) {
        //         row[column.key] = column.transform(product[column.key as keyof Product], product);
        //     } else {
        //         switch (column.key) {
        //             case 'name':
        //                 row[column.key] = (
        //                     <div>{product.name}</div>
        //                 );
        //                 break;

        //             case 'isActive':
        //                 row[column.key] = (
        //                     <Badge variation={product.isActive ? 'success' : 'error'}>
        //                         {product.isActive ? 'Aktif' : 'İnaktif'}
        //                     </Badge>
        //                 );
        //                 break;

        //             case 'brandID':
        //                 row[column.key] = (
        //                     <Button className='hover:underline hover:text-blue-700'>
        //                         {product.brandID}
        //                     </Button>
        //                 );
        //                 break;

        //             default:
        //                 row[column.key] = product[column.key as keyof Product];
        //                 break;
        //         }
        //     }
        // });

        row['onEdit'] = () => handleEdit(product);
        row['onDelete'] = () => handleDelete(product);
        row['onSelect'] = () => handleSelect(product);
        row['originalData'] = product;

        return row;
    });
}
