'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import UsersDataTable from "./usersDataTable";
import { useDataModal } from '@/contexts/DataModalContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next-nprogress-bar";



const UsersView: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);

    return (
        <>
            <div className="mb-8">
                <div className="px-6 py-3 bg-white shadow mb-4">
                    <div className='flex items-center justify-between'>
                        <div></div>
                        <div className='flex items-center space-x-3'>
                            <Button 
                                variant="contained" 
                                startIcon={<AddIcon />} 
                                onClick={() => router.push('/dashboard/users/create')}
                            >
                                Kullanıcı Ekle
                            </Button>
                        </div>
                    </div>
                </div>

                <UsersDataTable
                    dataPayload={users}
                 />
            </div>
        </>
    );
}

export default UsersView;
