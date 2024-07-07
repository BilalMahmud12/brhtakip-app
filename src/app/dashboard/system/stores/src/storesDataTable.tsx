'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getStoresTableData from './getStoresTableData';
interface StoresDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    onDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
    isLoading?: boolean;
}

const StoresDataTable: React.FC<StoresDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        onDelete = () => { },
        handleSelect = () => { },
        isLoading = false
    } = props;

    const { stores } = dataTables;

    const tableData = getStoresTableData(
        dataPayload,
        stores.columns,
        handleEdit,
        onDelete,
        handleSelect,
        isLoading
    );


    return (
        <div>
            <DataTable
                columns={stores.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => onDelete(data)}
                loading={isLoading}
            />
        </div>
    );
};

export default StoresDataTable;
