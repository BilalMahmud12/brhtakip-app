'use client'
import React from 'react'
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';

const UsersDataTable: React.FC = () => {
    return (
        <div>
            <DataTable
                columns={dataTables.users.columns}
                data={[]}
                onEditRow={() => {}}
                onDeleteRow={() => {}}
            />
        </div>
    );
}

export default UsersDataTable;

