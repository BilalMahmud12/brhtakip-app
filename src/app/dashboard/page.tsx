'use client'
import { useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { permissions } from '@/config/index';
import withAuthorization from '../withAuthorization';
import Reports from './src/reports';
import DashboardView from './src/dashboardView';

function Dashboard() {
    const userProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);

    return (
        <>
            <title>Panel Girişi - BRH Takip</title>

            <div className='px-4 pb-8 space-y-8'>
                <Reports />
                <DashboardView />
            </div>
        </>
    );
}

export default withAuthorization([permissions.VIEW_DASHBOARD])(Dashboard);