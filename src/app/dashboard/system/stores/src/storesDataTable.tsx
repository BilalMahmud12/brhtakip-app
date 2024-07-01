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
}

const StoresDataTable: React.FC<StoresDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        onDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { stores } = dataTables;

    const tableData = getStoresTableData(
        dataPayload,
        stores.columns,
        handleEdit,
        onDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={stores.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => onDelete(data)}
            />
        </div>
    );
};

export default StoresDataTable;
