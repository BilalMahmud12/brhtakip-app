'use client';
import React from 'react';
import DataTable from '@/components/core/dataTable';
import { dataTables } from '@/config/dataTables';
import getExtraProductsTableData from './getExtraProductsTableData';

interface ExtraProductsTableProps {
    dataPayload?: any[];
    handleEdit?: (data: any) => void;
    onDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const ExtraProductsDataTable: React.FC<ExtraProductsTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        onDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { extraProducts } = dataTables;

    const tableData = getExtraProductsTableData(
        dataPayload,
        extraProducts.columns,
        handleEdit,
        onDelete,
        handleSelect,
    );


    return (
        <div>
            <DataTable
                columns={extraProducts.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => onDelete(data)}
            />
        </div>
    );
};

export default ExtraProductsDataTable;