import { CheckboxField } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Icon from '../icon';

type DataTableDatum = {
    [key: string]: any;
}

export interface DataTableColumn {
    key: string;
    label: string;
    width?: string;
    transform?: (value: any, data: any) => JSX.Element | string;
}

type DataTableProps = {
    columns: DataTableColumn[];
    data: DataTableDatum[];
    onRowSelect?: (selectedRows: Set<number>) => void;
    onEditRow?: (data: any) => void;
    onDeleteRow?: (data: any) => void;
    styles?: { [key: string]: string };
}


const DataTable: React.FC<DataTableProps> = (props) => {
    const {
        columns,
        data,
        onRowSelect = () => { },
        onEditRow = () => { },
        onDeleteRow = () => { },
        styles = {}
    } = props;

    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    const handleRowSelectionChange = (rowIndex: number, isChecked: boolean) => {
        const newSelectedRows = new Set(selectedRows);
        if (isChecked) {
            newSelectedRows.add(rowIndex);
        } else {
            newSelectedRows.delete(rowIndex);
        }
        setSelectedRows(newSelectedRows);
        console.log('Select: =>', selectedRows);
    };

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            const allIndexes = new Set(data.map((_, index) => index));
            setSelectedRows(allIndexes);
        } else {
            setSelectedRows(new Set());
        }

        console.log('Select All: =>', selectedRows);
    };

    return (
        <div className='overflow-x-scroll'>
            <table className='min-w-[1050px] border-b border-t border-gray-200'>
                <thead className='border-b border-gray-300 w-full'>
                    <tr className='w-full'>
                        {columns.map((column, index) => (
                            <th
                                key={`header-${column.key}-${index}`}
                                className={`text-left text-sm px-3 py-2.5 text-gray-600 border-r border-gray-200`}
                                style={{ width: column.width }}
                            >
                                {column.key === 'checkbox' ? (
                                    <CheckboxField
                                        name="selectAll"
                                        label=""
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                    />
                                ) : column.label}
                            </th>
                        ))}
                    </tr>

                </thead>
                <tbody className='bg-white'>
                    {data.map((row, rowIndex) => (
                        <tr key={`row-${rowIndex}`} className='border-b border-gray-100 hover:bg-zinc-100 transition-all ease-in-out duration-300'>
                            {columns.map((column, colIndex) => (
                                <td
                                    key={`row-${rowIndex}-col-${column.key}-${colIndex}`}
                                    className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'
                                    onClick={() => column.key === 'requestNumber' ? onEditRow(row) : () => { }}
                                >


                                    {column.key === 'checkbox' ? (
                                        <CheckboxField
                                            name={`checkbox-${rowIndex}`}
                                            label=""
                                            checked={selectedRows.has(rowIndex)}
                                            onChange={(e) => handleRowSelectionChange(rowIndex, e.target.checked)}
                                        />
                                    ) : (

                                        row[column.key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

                {/*                 
                <tfoot>
                    <tr>
                        <td colSpan={columns.length} className='text-left text-sm px-3 py-1.5 text-gray-600 border-r border-gray-200'>
                            <div className='flex items-center space-x-2'>
                                <Icon iconName='GrTrash' className='text-red-500' />
                                <span className='text-red-500'>Delete</span>
                            </div>
                        </td>
                    </tr>
                </tfoot>
                */}
            </table>
        </div>
    );
}

export default DataTable;
