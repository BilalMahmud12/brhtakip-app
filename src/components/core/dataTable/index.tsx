'use client'
import React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { trTR } from '@mui/x-data-grid/locales';


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
    onRowSelect?: (selectedRows: string[]) => void;
    data: DataTableDatum[];
    onRowSelect?: (selectedRows: Set<number>) => void;
    onEditRow?: (data: any) => void;
    onDeleteRow?: (data: any) => void;
    getClientName?: (data: any) => void;
    styles?: { [key: string]: string };
}


const DataTable: React.FC<DataTableProps> = (props) => {
    const {
        columns,
        data,
        onRowSelect = () => { },
        onEditRow = () => { },
        onDeleteRow = () => { },
        getClientName = () => { },
        styles = {}
    } = props;

    const DataGridColumns: GridColDef[] = columns.map((column) => ({
        field: column.key,
        headerName: column.label,
        width: column.width ? parseInt(column.width) : 200,
        renderCell: (params) => {
            return column.transform ? column.transform(params.value, params.row) : params.value;
        }
    }));

    const rows = data.map((datum, index) => ({ id: datum?.id || index, ...datum }));
    const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

    return (
        <div style={{ width: '100%', background: '#fff' }}>
            <DataGrid
                columns={DataGridColumns}
                rows={rows}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                slots={{
                    //toolbar: GridToolbar,
                }}
                rowSelectionModel={rowSelectionModel}
                onRowSelectionModelChange={(newRowSelectionModel, details) => {
                    onRowSelect(newRowSelectionModel as string[]);
                    setRowSelectionModel(newRowSelectionModel);
                }}
                density='compact'
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
                disableRowSelectionOnClick
                checkboxSelection
                disableColumnResize
                autoHeight
            />
        <div className='overflow-x-scroll'>
            <div style={{ width: '100%' }}>
                <DataGrid
                    columns={DataGridColumns}
                    rows={rows}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25, 50, 100]}
                    localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
                    checkboxSelection
                    disableRowSelectionOnClick
                    density='compact'
                    isCellEditable={() => false}
                />
            </div>

            <div>
            {/*
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
               
            </table>
             */}
            </div>
        </div>
    );
}

export default DataTable;
