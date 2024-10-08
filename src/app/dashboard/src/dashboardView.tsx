'use client'
import React from 'react'
import { dashboardNavigavtion } from '@/config/index';
import Icon from '@/components/core/icon';
import Link from 'next/link';
import { useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';

export default function DashboardView() {
    const currentUserProfile = useAppSelector((state: RootState) => state.global.currentUserProfile);
    const currentUserProfileRef = React.useRef(currentUserProfile);
    currentUserProfileRef.current = currentUserProfile;

    return (
        <div>
            {dashboardNavigavtion.map((navGroup, index) => (
                <div key={`${navGroup.section_name}-${index}`} className='space-y-3'>
                    <div className='text-sm font-medium text-zinc-400'>{navGroup.section_title}</div>
                    <div className='mt-2'>
                        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>
                            {navGroup.items
                                .filter(item => {
                                    if (item.href === '/dashboard/clients' && currentUserProfileRef.current.clientprofileID !== 'BRH_ADMIN') {
                                        return false;
                                    }

                                    return true
                                })
                                .map((link, index) => (
                                <Link
                                    href={link.href}
                                    key={index}
                                    className='col-span-1 bg-white shadow flex items-center justify-start'
                                >
                                    <span className='flex items-center w-full'>
                                        <span className='px-4 py-4 border-r border-gray-100 text-3xl'>
                                            <Icon iconName={link.icon} className='text-2xl' />
                                        </span>
                                        <span className='px-4 py-4 text-sm text-center font-medium'>{link.name}</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}