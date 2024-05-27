
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
            { label: 'Marka', key: 'brand_name', width: '15%' },
            { label: 'Durum', key: 'status', width: '13%' },
            { label: 'Product', key: 'product_kount', width: '35%' },
            { label: 'Müşteri', key: 'client', width: '20%' },
            { label: '', key: 'actions', width: '2%' },
        ]
    }
}