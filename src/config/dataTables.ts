
export const dataTables = {
    requests: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Talep Detaiları', key: 'detailed', width: '98%' },
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
    }
}