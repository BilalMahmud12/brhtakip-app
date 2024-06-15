'use client'
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { permissions } from '@/config/index';
import withAuthorization from '../withAuthorization';
import Charts from './src/charts';

function Dashboard() {
    const userProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);

    return (
        <>
            <title>Panel Girişi - BRH Takip</title>
            <div className='px-4 py-6'>
                <div>Merhaba {userProfile.firstName}!</div>
            </div>

            <div className='px-4 py-6'>
                {/* <Charts /> */}
            </div>
        </>
    );
}

export default withAuthorization([permissions.VIEW_DASHBOARD])(Dashboard);