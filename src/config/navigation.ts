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
            { name: 'Mağazalar', href: '/dashboard/system/stores', icon: 'FcShop' },
            { name: 'Müşteri Profilleri', href: '/dashboard/clients', icon: 'FcBriefcase' },
            { name: 'Sistem Tanıtmaları', href: '/dashboard/system', icon: 'FcFolder' },
        ]
    },
    {
        "section_name": "ayarlar",
        "section_title": "Ayarlar",
        show_title: true,
        items: [
            { name: 'Kullanıcılar', href: '/dashboard/users', icon: 'FcConferenceCall' },
            // { name: 'Sistem Ayarları', href: '/dashboard/system-settings', icon: 'FcSettings' },
        ]
    }
]

export const dashboardNavigavtion = [
    {
        "section_name": "talepler",
        "section_title": "Talepler",
        show_title: true,
        items: [
            { name: 'Onay Bekleyen Talepler', href: '/dashboard/requests', icon: 'FcFinePrint' },
            { name: 'Tasarımdaki Talepler', href: '/dashboard/requests/in-design', icon: 'FcEditImage' },
            { name: 'Baskıdaki Talepler', href: '/dashboard/requests/in-press', icon: 'FcPrint' },
            { name: 'Uygylamadaki Talepler', href: '/dashboard/requests/in-application', icon: 'FcServices' },
            { name: 'Tamamlanan Talepler', href: '/dashboard/requests/completed', icon: 'FcOk' },
        ]
    },
    {
        "section_name": "yonet",
        "section_title": "Yonet",
        show_title: true,
        items: [
            { name: 'Müşteri Profilleri', href: '/dashboard/clients', icon: 'FcBriefcase' },
            { name: 'Kullanıcılar', href: '/dashboard/users', icon: 'FcConferenceCall' },
            { name: 'Sistem Tanıtmaları', href: '/dashboard/system', icon: 'FcFolder' },
        ]
    },
    {
        "section_name": "sistem_tanıtmaları",
        "section_title": "Sistem Tanıtmaları",
        show_title: false,
        items: [
            { name: 'Markalar', href: '/dashboard/system/brands', icon: 'FcCopyright' },
            { name: 'Malzemeler', href: '/dashboard/system/materials', icon: 'FcCloth' },
            { name: 'Uygulama Alanları', href: '/dashboard/system/applicationAreas', icon: 'FcRuler' },
            { name: 'Mağazalar', href: '/dashboard/system/stores', icon: 'FcShop' },
            { name: 'Şehirler', href: '/dashboard/system/cities', icon: 'FcInTransit' },
        ]
    }
]