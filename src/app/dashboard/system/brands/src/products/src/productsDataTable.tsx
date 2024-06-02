'use client'
import React from 'react';
import DataTable from '@/components/core/dataTable'
import { dataTables } from '@/config/dataTables';
import getProductsTableData from './getProductsTableData';

interface ProductsDataTableProps {
    dataPayload: any[];
    handleEdit?: (data: any) => void;
    handleDelete?: (data: any) => void;
    handleSelect?: (data: any) => void;
}

const ProductsDataTable: React.FC<ProductsDataTableProps> = (props) => {
    const {
        dataPayload = [],
        handleEdit = () => { },
        handleDelete = () => { },
        handleSelect = () => { },
    } = props;

    const { products } = dataTables

    const tableData = getProductsTableData(
        dataPayload,
        products.columns,
        handleEdit,
        handleDelete,
        handleSelect
    );

    return (
        <div>
            <DataTable
                columns={products.columns}
                data={tableData}
                onEditRow={(data) => handleEdit(data)}
                onDeleteRow={(data) => handleDelete(data)}
            />
        </div>
    );
};

export default ProductsDataTable;