
export const dataTables = {
    requests: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Talep Detaiları', key: 'detailed', width: '98%' },
        ]
    },
    users: {
        columns: [
            { label: 'Kullanıcı', key: 'username', width: '240' },
            { label: 'Eposta', key: 'email', width: '240' },
            { label: 'Rol', key: 'role', width: '180' },
            { label: 'Durum', key: 'status', width: '150' },
            { label: '', key: 'actions', width: '80' },
        ]
    },
    brands: {
        columns: [
            { label: 'Marka', key: 'name', width: '240' },
            { label: 'Durum', key: 'isActive', width: '150' },
            { label: 'Ürün S.', key: 'Products', width: '80' },
            { label: 'Müşteri', key: 'clientprofileID', width: '500' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    products: {
        columns: [
            { label: 'Ürün', key: 'name', width: '240' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    materials: {
        columns: [
            { label: 'Malzeme', key: 'name', width: '250' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    applicationArea: {
        columns: [
            { label: 'Uygulama Alanları', key: 'name', width: '250' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    stores: {
        columns: [
            { label: 'Mağaza', key: 'name', width: '240' },
            { label: 'Adres', key: 'address', width: '500' },
            { label: '', key: 'actions', width: '80' },
        ]
    },

    cities: {
        columns: [
            { label: 'Şehir', key: 'name', width: '240%' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    districts: {
        columns: [
            { label: 'İlçe', key: 'name', width: '240' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },

    areas: {
        columns: [
            { label: 'mahalle', key: 'name', width: '240' },
            { label: 'Durum', key: 'isActive', width: '80' },
            { label: '', key: 'actions', width: '150' },
        ]
    },
}