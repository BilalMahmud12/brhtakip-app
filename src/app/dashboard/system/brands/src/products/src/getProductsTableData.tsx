import type { Product } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge } from '@aws-amplify/ui-react'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Icon from '@/components/core/icon';


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
                            <div>{product.name}</div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={product.isActive ? 'success' : 'error'}>
                                {product.isActive ? 'Aktif' : 'İnaktif'}
                            </Badge>
                        );
                        break;

                    case 'brandID':
                        row[column.key] = (
                            <Button className='hover:underline hover:text-blue-700'>
                                {'brand Name'}
                            </Button>
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
                                            onClick={() => handleEdit(row)}
                                        >
                                            Güncelle
                                        </DropdownItem>

                                        <DropdownItem
                                            key="cancel"
                                            startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                            onClick={() => handleDelete(row)}
                                        >
                                            Ürün Sil
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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
