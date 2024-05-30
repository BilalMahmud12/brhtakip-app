'use client'
import React from 'react';
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getBrandsTableData from './getBrandsTableData';
import { useStore } from '@/stores/utils/useStore';
interface BrandsDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const BrandsDataTable: React.FC<BrandsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { brands } = dataTables
    const { clientProfileStore } = useStore();
    const { getClientProfiles } = clientProfileStore;

    const tableData = getBrandsTableData(
        dataPayload,
        brands.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    return (
        <div>
            <DataTable
                columns={brands.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => console.log('onDeleteRow', data)}
            />
        </div>
    );
};

export default BrandsDataTable;