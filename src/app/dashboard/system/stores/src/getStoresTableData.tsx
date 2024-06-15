'use client'
import { useRouter } from 'next-nprogress-bar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Badge } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';
import type { Store } from '@/API'
import type { DataTableColumn } from '@/components/core/dataTable';
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
                                            onClick={() => { }}
                                        >
                                            Güncelle
                                        </DropdownItem>

                                        <DropdownItem
                                            key="cancel"
                                            startContent={<Icon iconName='FcFullTrash' className='w-5 h-5' />}
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