'use client'
import React from 'react'
import Icon from '@/components/core/icon';
import Link from 'next/link';

const requestNavigation = [
    {
        href: '/dashboard/system/brands',
        label: 'Markalar',
        icon: <Icon iconName='FcCopyright' className='' />
    },
    {
        href: '/dashboard/system/materials',
        label: 'Malzemeler',
        icon: <Icon iconName='FcCloth' className='' />
    },
    {
        href: '/dashboard/system/applicationAreas',
        label: 'Uygulama Alanları',
        icon: <Icon iconName='FcRuler' className='' />
    },
    {
        href: '/dashboard/system/stores',
        label: 'Mağazalar',
        icon: <Icon iconName='FcFinePrint' className='' />
    },
    {
        href: '/dashboard/system/cities',
        label: 'Şehirler',
        icon: <Icon iconName='FcFinePrint' className='' />
    },
]

export default function DashboardView() {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>
                {requestNavigation.map((nav, index) => (
                    <Link
                        href={nav.href}
                        key={index}
                        className='col-span-1 bg-white shadow flex items-center justify-start'
                    >
                        <span className='flex items-center w-full'>
                            <span className='px-4 py-4 border-r border-gray-100 text-3xl'>{nav.icon}</span>
                            <span className='px-4 py-4 text-sm text-center font-semibold'>{nav.label}</span>
                        </span>

                    </Link>
                ))}
            </div>
        </div>
    )
}