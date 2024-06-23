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
    sortable?: boolean;
    disableColumnMenu?: boolean;
}

type DataTableProps = {
    columns: DataTableColumn[];
    data: DataTableDatum[];
    onRowSelect?: (selectedRows: string[]) => void;
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

    const DataGridColumns: GridColDef[] = columns.map((column) => ({
        field: column.key,
        headerName: column.label,
        width: column.width ? parseInt(column.width) : 200,
        sortable: column.sortable || false,
        disableColumnMenu: column.disableColumnMenu || false,
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
                loading={data.length === 0}
            />
        </div>
    );
}

export default DataTable;