'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getMaterialsTableData from './getMaterialsTableData';

interface MaterialsDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;

}

const MaterialsDataTable: React.FC<MaterialsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { materials } = dataTables;

    const tableData = getMaterialsTableData(
        dataPayload,
        materials.columns,
        handleEdit,
        handleDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={materials.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default MaterialsDataTable