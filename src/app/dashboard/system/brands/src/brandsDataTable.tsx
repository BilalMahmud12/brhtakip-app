'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getBrandsTableData from './getBrandsTableData';

interface BrandsDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    onDeleteBrand?: (data: any) => void;
    handleSelect?: (data: any) => void;
    getClientName?: (data: string) => void;
}

const BrandsDataTable: React.FC<BrandsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        onDeleteBrand = () => { },
        handleSelect = () => { },
        getClientName = async () => { }
    } = props;

    const { brands } = dataTables;

    const tableData = getBrandsTableData(
        dataPayload,
        brands.columns,
        handleEdit,
        onDeleteBrand,
        handleSelect,
        getClientName
    );

    // console.log('tableData', tableData);

    return (
        <div>
            <DataTable
                columns={brands.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => onDeleteBrand(data)}
                getClientName={(data) => getClientName(data)}
            />
        </div>
    );
};

export default BrandsDataTable;
