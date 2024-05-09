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
        "section_name": "hizli_islemler",
        "section_title": "Hızlı İşlemler",
        show_title: true,
        items: [
            { name: 'Talep Ekle', href: '/requests/add', icon: 'FcAddDatabase' }
        ]
    },
    {
        "section_name": "yonet",
        "section_title": "Yonet",
        show_title: true,
        items: [
            { name: 'Müşteri Profiller', href: '/clients', icon: 'FcBriefcase' },
            { name: 'Talepler', href: '/dashboard/requests', icon: 'FcFolder' },
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

export const clientNavItems = []