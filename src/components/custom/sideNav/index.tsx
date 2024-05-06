import React from 'react'
import AdminNavigation from './src/adminNav'

const SideNav: React.FC = () => {
    return (
        <div className='h-screen border-r border-gray-300'>
            <AdminNavigation />
        </div>
    )
}

export default SideNav