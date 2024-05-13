'use client'
import React from 'react';
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getRequestsTableData from './getRequestsTableData';
import { useStore } from '@/stores/useStore';

interface RequestsDataTableProps {
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const RequestsDataTable: React.FC<RequestsDataTableProps> = (props) => {
    const { 
        handleEdit = () => { }, 
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { requestStore } = useStore();
    const { requests } = dataTables

    const tableData = getRequestsTableData(
        requestStore.getAllRequests,
        requests.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    console.log('tableData', tableData);

    return (
        <div>
            <DataTable
                columns={requests.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => console.log('onDeleteRow', data)}
            />
        </div>
    );
};

export default RequestsDataTable;