
export const dataTables = {
    requests: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Talep Detaiları', key: 'detailed', width: '98%' },
        ]
    },
    users: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Kullanıcı', key: 'username', width: '40%' },
            { label: 'Rol', key: 'role', width: '20%' },
            { label: '', key: 'actions', width: '3%' },
        ]
    },

    brands: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Marka', key: 'name', width: '10%' },
            { label: 'Durum', key: 'isActive', width: '4%' },
            { label: 'Ürün Sayısı', key: 'Products', width: '2%' },
            { label: 'Müşteri', key: 'clientprofileID', width: '20%' },
            { label: '', key: 'actions', width: '2%' },
        ]
    },

    products: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Ürün', key: 'name', width: '70%' },
            { label: 'Durum', key: 'isActive', width: '5%' },
            // { label: 'Marka', key: 'brandID', width: '20%' },
            { label: '', key: 'actions', width: '2%' },
        ]
    },

    materials: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Malzeme', key: 'name', width: '70%' },
            { label: 'Durum', key: 'isActive', width: '5%' },
            // { label: 'Marka', key: 'brandID', width: '20%' },
            { label: '', key: 'actions', width: '2%' },
        ]
    },

    applicationArea: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Uygulama Alanları', key: 'name', width: '70%' },
            { label: 'Durum', key: 'isActive', width: '5%' },
            // { label: 'Marka', key: 'brandID', width: '20%' },
            { label: '', key: 'actions', width: '2%' },
        ]
    }
}