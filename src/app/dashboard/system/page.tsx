import React from "react";
import Icon from '@/components/core/icon';
import Link from 'next/link';

const requestNavigation = [
    {
        href: '/dashboard/system/stores',
        label: 'Mağazalar',
        icon: <Icon iconName='FcShop' className='' />
    },
    {
        href: '/dashboard/system/applicationAreas',
        label: 'Uygulama Alanları',
        icon: <Icon iconName='FcRuler' className='' />
    },
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
        href: '/dashboard/system/cities',
        label: 'Şehirler',
        icon: <Icon iconName='FcInTransit' className='' />
    },
    {
        href: '/dashboard/system/extraProduct',
        label: 'Ek Ürünler',
        icon: <Icon iconName='FcPlus' className='' />
    },
]

const SystemPage: React.FC = () => {
    return (
        <div>
            <div>
                <title>Sistem Tanıtmalar - BRH Takip</title>
            </div>

            <div className='grid grid-cols-4 gap-4 mb-8'>
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

export default SystemPage