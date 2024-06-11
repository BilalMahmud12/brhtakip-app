'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getMaterialsTableData from './getMaterialsTableData';

interface MaterialsDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    onDeleteBrand?: (data: any) => void;
    handleSelect?: (data: any) => void;
    getClientName?: (data: string) => void;
}

const MaterialsDataTable: React.FC<MaterialsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        onDeleteBrand = () => { },
        handleSelect = () => { },
        getClientName = async () => { }
    } = props;

    const { materials } = dataTables;

    const tableData = getMaterialsTableData(
        dataPayload,
        materials.columns,
        handleEdit,
        onDeleteBrand,
        handleSelect,
        getClientName
    );


    return (
        <div>
            <DataTable
                columns={materials.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => onDeleteBrand(data)}
                getClientName={(data) => getClientName(data)}
            />
        </div>
    );
};

export default MaterialsDataTable