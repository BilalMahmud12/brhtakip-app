import type { ClientProfile } from '@/API'
import { formateDate } from '@/utils/helpers';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useRouter } from 'next-nprogress-bar';

export default function getClientsTableData(
    data: ClientProfile[],
    columns: any[],
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void,
    isLoading: boolean
) {
    const router = useRouter()
    return data.map((client) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column) => {
            switch (column.key) {
                case 'name':
                    row[column.key] = (
                        <div
                            className='hover:underline hover:text-blue-700 cursor-pointer'
                            onClick={() => {
                                router.push(`/dashboard/system/clients/${client.id}`);
                                handleEdit(client)
                            }}
                        >
                            {client.name}
                        </div>
                    );
                    break;
                case 'users':
                    row[column.key] = (
                        <div className='h-full flex items-center ml-3.5'>
                            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-green-100 border border-green-200 text-xs font-medium'>{client.UserProfiles?.items.length}</span>
                        </div>
                    )
                    break;
                case 'brands':
                    row[column.key] = (
                        <div className='h-full flex items-center ml-3.5'>
                            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-red-100 border border-red-200 text-xs font-medium'>{client.Brands?.items.length}</span>
                        </div>
                    )
                    break;
                case 'status':
                    row[column.key] = (
                        <div className='flex items-center space-x-1 h-full'>
                            <FiberManualRecordIcon
                                color={client.isActive === true ? 'success' : 'disabled'}
                                fontSize="small"
                            />
                            <span className='text-xs block font-medium'>{client.isActive === true ? 'Aktif' : 'Aktif Değil'}</span>
                        </div>
                    )
                    break;
                case 'actions':
                    row[column.key] = (
                        <div className='flex items-center  h-full'>
                            <IconButton
                                size='small'
                                onClick={() => handleEdit(client)}
                            >
                                <EditIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                                size='small'
                                onClick={() => handleDelete(client)}
                            >
                                <DeleteIcon fontSize='small' />
                            </IconButton>
                        </div>
                    )
                    break;
                default:
                    row[column.key as keyof ClientProfile] = (client as ClientProfile)[column.key as keyof ClientProfile]
            }
        })

        return row
    })
}