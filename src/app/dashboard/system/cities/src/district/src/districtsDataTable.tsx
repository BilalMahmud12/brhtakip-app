'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getDistrictsTableData from './getDistrictsTableData';
//Materials
interface DistrictsDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;

}

const DistrictsDataTable: React.FC<DistrictsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { districts } = dataTables;

    const tableData = getDistrictsTableData(
        dataPayload,
        districts.columns,
        handleEdit,
        handleDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={districts.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default DistrictsDataTable