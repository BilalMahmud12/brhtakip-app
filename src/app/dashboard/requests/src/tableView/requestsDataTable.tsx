'use client'
import React from 'react';
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getRequestsTableData from './getRequestsTableData';

interface RequestsDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
    isLoading?: boolean;
}

const RequestsDataTable: React.FC<RequestsDataTableProps> = (props) => {
    const {
        dataPayload = [], 
        handleEdit = () => {}, 
        handleDelete = () => {},
        handleSelect = () => {},
        isLoading = false,
    } = props;

    const { requests } = dataTables

    const tableData = getRequestsTableData(
        dataPayload,
        requests.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    return (
        <div>
            <DataTable
                columns={requests.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => console.log('onDeleteRow', data)}
                onRowSelect={(data) => handleSelect(data)}
                loading={isLoading}
            />
        </div>
    );
};

export default RequestsDataTable;