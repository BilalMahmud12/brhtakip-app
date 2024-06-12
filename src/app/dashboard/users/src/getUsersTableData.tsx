import type { UserProfile } from '@/API'
import { formateDate } from '@/utils/helpers';

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
            if (column.transform) {
                row[column.key] = column.transform(user[column.key as keyof UserProfile], user);
            }

            else {
                switch (column.key) {
                    case 'username':
                        row[column.key] = (
                            <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>
                                {user.firstName} {user.lastName}
                            </span>
                        )
                        break;

                    case 'email':
                        row[column.key] = (
                            <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>{user.email}</span>
                        )
                        break;

                    case 'role':
                        row[column.key] = user.role;
                        break;

                    case 'createdAt':
                        row[column.key] = formateDate(user.createdAt);
                        break;

                    case 'actions':
                        row[column.key] = (
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => handleEdit(user)}
                                    className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full mr-2'
                                >
                                    {/* <EditIcon /> */}
                                </button>

                                <button
                                    onClick={() => handleDelete(user)}
                                    className='p-2 bg-red-500 hover:bg-red-600 text-white rounded-full'
                                >
                                    {/* <DeleteIcon /> */}
                                </button>
                            </div>
                        )
                        break;

                    default:
                        row[column.key] = user[column.key as keyof UserProfile];
                        break;
                }
            }
        });

        return row;
    });
}