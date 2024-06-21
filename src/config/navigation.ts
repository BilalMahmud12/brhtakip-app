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
            { name: 'Talepler', href: '/dashboard/requests', icon: 'FcViewDetails' },
            { name: 'Sistem Tanıtmaları', href: '/dashboard/system', icon: 'FcFolder' },
            { name: 'Müşteri Profilleri', href: '/dashboard/clients', icon: 'FcBriefcase' },
        ]
    },
    {
        "section_name": "ayarlar",
        "section_title": "Ayarlar",
        show_title: true,
        items: [
            { name: 'Sistem Ayarları', href: '/dashboard/system-settings', icon: 'FcSettings' },
            { name: 'Kullanıcılar', href: '/dashboard/users', icon: 'FcConferenceCall' },
            //{ name: 'Yetkiler', href: '/permissions', icon: 'FcKey' },
        ]
    }
]

export const navigation = [
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
            { name: 'Talepler', href: '/dashboard/requests', icon: 'FcViewDetails' },
            { name: 'Sistem Tanıtmaları', href: '/dashboard/system', icon: 'FcFolder' },
            { name: 'Müşteri Profilleri', href: '/dashboard/clients', icon: 'FcBriefcase' },
        ]
    },
    {
        "section_name": "ayarlar",
        "section_title": "Ayarlar",
        show_title: true,
        items: [
            { name: 'Sistem Ayarları', href: '/dashboard/system-settings', icon: 'FcSettings' },
            { name: 'Kullanıcılar', href: '/dashboard/users', icon: 'FcConferenceCall' },
        ]
    }
]