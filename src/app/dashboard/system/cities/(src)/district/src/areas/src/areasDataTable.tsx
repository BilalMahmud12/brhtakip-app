'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getAreasTableData from './getAreasTableData';
//Material
interface AreasDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;

}

const AreasDataTable: React.FC<AreasDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { areas } = dataTables;

    const tableData = getAreasTableData(
        dataPayload,
        areas.columns,
        handleEdit,
        handleDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={areas.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default AreasDataTable