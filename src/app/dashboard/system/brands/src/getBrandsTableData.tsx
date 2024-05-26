
import type { Brand, Request } from '@/API'
import { formateDate } from '@/utils/helpers';
import type { DataTableColumn } from '@/components/core/dataTable';
import { Badge, BadgeVariations } from '@aws-amplify/ui-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '@/components/core/icon';


type BrandTempType = Brand & {
    Brand: { name: string },
    Product: { name: string },
    Store: { name: string }
}

export default function getBrandsTableData(
    data: BrandTempType[],
    columns: any,
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
                    case 'brand_number':
                        row[column.key] = (
                            <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>{request.brand_number}</span>
                        )
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