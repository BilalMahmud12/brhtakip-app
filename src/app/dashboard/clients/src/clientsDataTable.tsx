'use client'
import React from 'react'
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getClientsTableData from './getClientsTableData';

interface ClientsDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const ClientsDataTable: React.FC<ClientsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { clients } = dataTables;

    const clientsTableData = getClientsTableData(
        dataPayload,
        clients.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    return (
        <div>
            <DataTable
                columns={clients.columns}
                data={clientsTableData}
                onEditRow={handleEdit}
                onDeleteRow={handleDelete}
                onRowSelect={handleSelect}
            />
        </div>
    )
}

export default ClientsDataTable