'use client'
import React from 'react'
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getUsresTableData from './getUsersTableData';

interface UsersDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const UsersDataTable: React.FC<UsersDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { users } = dataTables;

    
    const usersTableData = getUsresTableData(
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
                onEditRow={() => {}}
                onDeleteRow={() => {}}
            />
        </div>
    );
}

export default UsersDataTable;

