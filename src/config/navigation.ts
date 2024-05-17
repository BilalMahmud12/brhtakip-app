export const adminNavItems = [
    {
        "section_name": "gösterge_paneli",
        "section_title": "Gösterge Paneli",
        show_title: false,
        items: [
            { name: 'Panel Girişi', href: '/dashboard', icon: 'FcTemplate' },
        ]
    },
    {
        "section_name": "yonet",
        "section_title": "Yonet",
        show_title: true,
        items: [
            { name: 'Müşteri Profilleri', href: '/clients', icon: 'FcBriefcase' },
            { name: 'Müşteri Talepleri', href: '/dashboard/requests', icon: 'FcViewDetails' },
            { name: 'Sistem Tanıtmaları', href: '/definitions', icon: 'FcFolder' },
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

export const clientNavItems = []