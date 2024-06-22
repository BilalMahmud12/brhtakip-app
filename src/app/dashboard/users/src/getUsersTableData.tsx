import type { UserProfile } from '@/API'
import { formateDate } from '@/utils/helpers';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { roles } from '@/config/roles';

const getRoleLabel = (userRole: string) => {
    let label = ''
    switch (userRole) {
        case roles.ADMIN:
            label = 'Sistem Yöneticisi'
            break
        case roles.CLIENT_ADMIN:
            label = 'Kurumsal Yöneticisi'
            break
        case roles.EDITOR:
            label = 'Sistem Editörü'
            break
        case roles.CLIENT_EDITOR:
            label = 'Kurumsal Editörü'
            break
        default:
            label = ''
    }
    return label
}

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
                    row[column.key] = `${ user.firstName } ${ user.lastName }`
                    break;
                case 'status':
                    row[column.key] = (
                        <div className='flex items-center space-x-1 h-full'>
                            <FiberManualRecordIcon
                                color={user.isActive === true ? 'success' : 'disabled'}
                                fontSize="small"
                            />
                            <span className='text-xs block font-medium'>{user.isActive === true ? 'Aktif' : 'Aktif Değil'}</span>
                        </div>
                    )
                    break;
                case 'role':
                    row[column.key] = (
                        <Chip 
                            label={getRoleLabel(user.role as string)}
                            size="small"
                            color="default" 
                        />
                    )
                    break;
                case 'createdAt':
                    row[column.key] = formateDate(user.createdAt);
                    break;
                case 'actions':
                    row[column.key] = (
                        <div className='flex items-center justify-center h-full'>
                            <IconButton aria-label="delete" size="small" color='default' onClick={() => handleEdit(user)}>
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            
                            <IconButton aria-label="delete" size="small" color='default' onClick={() => handleDelete(user)}>
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

        row['id'] = user.id;

        return row;
    });
}