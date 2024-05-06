import React from 'react'
import Link from 'next/link'
import { Divider } from '@aws-amplify/ui-react';
import Icon from '@/components/core/icon'
const adminNavigation = [
    {
        "section_name": "gösterge_paneli",
        "section_title": "Gösterge Paneli",
        show_title: false,
        items: [
            { name: 'Panel Girişi', href: '/dashboard', icon: 'FcTemplate' },
        ]
    },
    {
        "section_name": "hizli_islemler",
        "section_title": "Hızlı İşlemler",
        show_title: true,
        items: [
            { name: 'Talep Ekle', href: '/requests/add', icon: 'FcAddDatabase' },
            { name: 'Marka Ekle', href: '/brands/add', icon: 'FcAddDatabase' },
            { name: 'Mağaza Ekle', href: '/branches/add', icon: 'FcAddDatabase' },
            { name: 'Ürün Ekle', href: '/products/add', icon: 'FcAddDatabase' },
        ]
    },
    {
        "section_name": "yonet",
        "section_title": "Yonet",
        show_title: true,
        items: [
            { name: 'Müşteri Profiller', href: '/clients', icon: 'FcBriefcase' },
            { name: 'Talepler', href: '/requests', icon: 'FcFolder' },
            { name: 'Markalar', href: '/brands', icon: 'FcTrademark' },
            { name: 'Mağazalar', href: '/branches', icon: 'FcShop' },
            { name: 'Ürün İşlemler', href: '/products', icon: 'FcSupport' },
        ]
    },
    {
        "section_name": "ayarlar",
        "section_title": "Ayarlar",
        show_title: true,
        items: [
            { name: 'Sistem Ayarları', href: '/system-settings', icon: 'FcSettings' },
            { name: 'Kullanıcılar', href: '/users', icon: 'FcConferenceCall' },
            { name: 'Yetkiler', href: '/permissions', icon: 'FcKey' },
        ]
    }
]

const AdminNavigation: React.FC = () => {
    return (
        <div className=''>
            <div className='space-y-3'>
                {adminNavigation.map((navGroup, index) => (
                    <>
                        <div key={`${navGroup.section_name}-${index}`}>
                            {navGroup.show_title && (
                                <div className='text-gray-400 font-medium text-xs px-4 py-2'>{navGroup.section_title}</div>
                            )}

                            <ul className=''>
                                {navGroup.items.map((item, index) => (
                                    <li key={`${item.name}-${index}`}>
                                        <Link 
                                            href={item.href}
                                            className='block px-5 py-2 text-gray-500 hover:text-gray-800 hover:bg-zinc-100 transition-all ease-in-out duration-300' 
                                        >
                                            <div className='flex items-center space-x-2'>
                                                <span>
                                                    <Icon iconName={item.icon} className='text-xl' />
                                                </span>
                                                <span className='text-sm font-medium'>{item.name}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            
                            <Divider orientation="horizontal" size="small" borderColor={'#dedede'} />
                        </div>
                    </>
                ))}
            </div>
            
        </div>
    )
}

export default AdminNavigation