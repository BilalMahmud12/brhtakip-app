'use client'
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';

function Dashboard() {
    const userProfile = useAppSelector((state: RootState) => state.user.userProfile);

    return (
        <>
            <title>Panel Girişi - BRH Takip</title>
            <div className='px-4 py-6'>
                <div>Merhaba {userProfile.firstName}!</div>
            </div>
        </>
    );
}

export default Dashboard