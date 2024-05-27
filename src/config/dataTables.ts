
export const dataTables = {
    requests: {
        columns: [
            { label: '', key: 'checkbox', width: '2%' },
            { label: 'Talep No', key: 'request_number', width: '15%' },
            { label: 'Durum', key: 'status', width: '13%' },
            { label: 'Marka', key: 'brand', width: '35%' },
            { label: 'Mağaza', key: 'store', width: '20%' },
            { label: 'Tarih', key: 'createdAt', width: '11%' },
            { label: '', key: 'actions', width: '2%' },
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