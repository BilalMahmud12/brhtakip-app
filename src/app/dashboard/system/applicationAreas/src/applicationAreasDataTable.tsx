'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getApplicationAreaTableData from './getApplicationAreasTableData';


interface ApplicationAreaDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const ApplicationAreaaDataTable: React.FC<ApplicationAreaDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { applicationArea } = dataTables;

    const tableData = getApplicationAreaTableData(
        dataPayload,
        applicationArea.columns,
        handleEdit,
        handleDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={applicationArea.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default ApplicationAreaaDataTable