'use client'
import { useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { permissions } from '@/config/index';
import withAuthorization from '../withAuthorization';
import Charts from './src/charts';
import DashboardView from './src/dashboardView';

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
                <DashboardView />
            </div>
        </>
    );
}

export default withAuthorization([permissions.VIEW_DASHBOARD])(Dashboard);