'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import EastIcon from '@mui/icons-material/East';
import Icon from '@/components/core/icon';
import Link from 'next/link';

const reportTiles = [
    {
        href: '/dashboard/requests',
        label: 'Onay Bekleyen Talepler',
        icon: <Icon iconName='FcFinePrint' className='text-9xl' />,
        count: 0
    },
    {
        href: '/dashboard/requests/in-design',
        label: 'Tasarımdaki Talepler',
        icon: <Icon iconName='FcEditImage' className='text-9xl' />,
        count: 0

    },
    {
        href: '/dashboard/requests/in-press',
        label: 'Baskıdaki Talepler',
        icon: <Icon iconName='FcPrint' className='text-9xl' />,
        count: 0
    },
    {
        href: '/dashboard/requests/in-application',
        label: 'Uygulamadaki Talepler',
        icon: <Icon iconName='FcServices' className='text-9xl' />,
        count: 0
    }
]


const Reports: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const currentClientProfile = useAppSelector((state: RootState) => state.global.currentClientProfile);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            {reportTiles.map((tile, index) => (
                <div key={index} className='relative overflow-hidden px-6 py-4 bg-white shadow rounded-lg'>
                    <div className='absolute -top-8 -right-8 opacity-15'>
                        {tile.icon}
                    </div>
                    <div className='text-sm font-semibold text-zinc-500 mb-2'>{tile.label}</div>

                    <div className='flex items-end justify-between mb-3'>
                        <div className='text-4xl font-semibold text-[#1976d3]'>{tile.count}</div>
                    </div>

                    <div className='flex items-center justify-end'>
                        <Link href={tile.href} className='flex items-center space-x-1 text-zinc-600 hover:text-[#1976d3] transition-all ease-in-out duration-300'>
                            <span className='text-xs font-medium block'>İncele</span>
                            <span className='block'>
                                <EastIcon fontSize='inherit' />
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reports