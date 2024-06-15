'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import UsersDataTable from "./usersDataTable";
import { Button } from "@aws-amplify/ui-react";

const UsersView: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const users = useAppSelector((state: RootState) => state.user.users);

    return (
        <>
            <div className="mb-8 py-4 px-8">
                <div className="px-6 py-3 bg-white shadow mb-4">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={() => {}}
                                className='rounded-md bg-amber-500 text-gray-800 px-6 py-1.5 h-[35px]'
                            >
                                <span>Kullanıcı Ekle</span>
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
