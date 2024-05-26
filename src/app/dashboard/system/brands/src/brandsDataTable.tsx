'use client'
import React from 'react';
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getBrandsTableData from './getBrandsTableData';

interface RequestsDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const BrandsDataTable: React.FC<RequestsDataTableProps> = (props) => {

    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { brands } = dataTables

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