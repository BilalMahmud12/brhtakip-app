'use client'
import Reports from './src/reports';
import DashboardView from './src/dashboardView';

function Dashboard() {
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

export default Dashboard;