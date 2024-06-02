
import type { Brand } from '@/API'
import { formateDate } from '@/utils/helpers';
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';
import { useStore } from '@/stores/utils/useStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function getBrandsTableData(
    data: Brand[],
    columns: any,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void
) {

    const { clientProfileStore, brandStore } = useStore();
    const { getClientProfiles } = clientProfileStore;
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
                                    brandStore.setBrandFormValues(brand.id);
                                    console.log('From getBrandTable', brand.id);
                                    router.push('/dashboard/system/brands/update');
                                }}
                            >
                                {brand.name}
                            </div>
                        );
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={brand.isActive ? 'success' : 'error'}>
                                {brand.isActive ? 'Aktif' : 'İnaktif'}
                            </Badge>
                        );
                        break;

                    case 'Products':
                        row[column.key] = <Button className='hover:underline hover:text-blue-700'>
                            {brand.Products?.items.length || 0}
                        </Button>
                        break;

                    case 'clientprofileID':
                        const clientProfile = getClientProfiles.find(profile => profile.id === brand.clientprofileID);
                        row[column.key] = clientProfile?.name || 'Unknown';
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
                                            Marka Sil
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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
        row['originalData'] = brand;

        return row;
    })
}