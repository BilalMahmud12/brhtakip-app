
import type { Brand, ClientProfile } from '@/API'
import { formateDate } from '@/utils/helpers';
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';


export default function getBrandsTableData(
    data: Brand[],
    columns: any,
    // clientData: ClientProfile,
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void
) {

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
                            <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>
                                {brand.name}</span>
                        )
                        break;

                    case 'isActive':
                        row[column.key] = (
                            <Badge variation={brand.isActive ? 'success' : 'error'}>
                                {brand.isActive ? 'Aktif' : 'Inaktif'}
                            </Badge>
                        );
                        break;

                    case 'Products':
                        row[column.key] = brand.Products?.items.length || 0;
                        break;

                    case 'clientprofileID':
                        // const clientProfile = clientData.find(profile => profile.id === brand.clientprofileID);
                        // row[column.key] = clientProfile ? clientProfile.name : 'Unknown';
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
                                            key="update-status"
                                            startContent={<Icon iconName='FcSerialTasks' className='w-5 h-5' />}
                                            onClick={() => handleEdit(row)}
                                        >
                                            Durumu Güncelle
                                        </DropdownItem>

                                        <DropdownItem
                                            key="update"
                                            startContent={<Icon iconName='FcSupport' className='w-5 h-5' />}
                                            onClick={() => handleEdit(row)}
                                        >
                                            Talep Güncelle
                                        </DropdownItem>

                                        <DropdownItem
                                            key="cancel"
                                            startContent={<Icon iconName='FcCancel' className='w-5 h-5' />}
                                        >
                                            Talep İptal Et
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