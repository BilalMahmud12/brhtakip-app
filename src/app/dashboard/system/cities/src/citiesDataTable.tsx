'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getCitiesTableData from './getCitiesTableData';


interface CitiesDataTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;

}

const MaterialsDataTable: React.FC<CitiesDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { cities } = dataTables;

    const tableData = getCitiesTableData(
        dataPayload,
        cities.columns,
        handleEdit,
        handleDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={cities.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default MaterialsDataTable