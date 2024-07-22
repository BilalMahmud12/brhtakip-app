'use client'
import React from 'react'
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import GetUsresTableData from './getUsersTableData';

interface UsersDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
    isLoading?: boolean;
}

const UsersDataTable: React.FC<UsersDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
        isLoading = false
    } = props;

    const { users } = dataTables;

    const usersTableData = GetUsresTableData(
        dataPayload,
        users.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    return (
        <div>
            <DataTable
                columns={users.columns}
                data={usersTableData}
                onEditRow={handleEdit}
                onDeleteRow={handleDelete}
                onRowSelect={handleSelect}
                loading={isLoading}
            />
        </div>
    );
}

export default UsersDataTable;

