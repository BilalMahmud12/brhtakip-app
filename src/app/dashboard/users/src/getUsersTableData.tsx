import type { UserProfile } from '@/API'
import { formateDate } from '@/utils/helpers';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function getUsresTableData(
    data: UserProfile[],
    columns: any[],
    handleEdit: (data: any) => void,
    handleDelete: (data: any) => void,
    handleSelect: (data: any) => void
) {
    return data.map((user) => {
        const row: { [key: string]: any } = {};

        columns.forEach((column) => {
            switch (column.key) {
                case 'username':
                    row[column.key] = (
                        <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>
                            {user.firstName} {user.lastName}
                        </span>
                    )
                    break;
                case 'status':
                    row[column.key] = (
                        <Chip 
                            label={user.isActive === true ? 'Aktif' : 'Pasif'}
                            color={user.isActive === true ? 'success' : 'error'}
                            size="small"  
                        />
                    )
                    break;
                case 'email':
                    row[column.key] = (
                        <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>{user.email}</span>
                    )
                    break;
                case 'role':
                    row[column.key] = (
                        <Chip 
                            label={user?.role as string}
                            size="small" 
                        />
                    )
                    break;
                case 'createdAt':
                    row[column.key] = formateDate(user.createdAt);
                    break;
                case 'actions':
                    row[column.key] = (
                        <div className='flex items-center justify-center h-full'>
                            <IconButton aria-label="delete" size="small" color='primary'>
                                <EditIcon fontSize="inherit" />
                            </IconButton>

                            <IconButton aria-label="delete" size="small" color='error'>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    )
                    break;
                default:
                    row[column.key] = user[column.key as keyof UserProfile];
                    break;
            }
        });

        return row;
    });
}