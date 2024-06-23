
export const dataTables = {
    requests: {
        columns: [
            { label: '', key: 'actions', width: '30', sortable: false, disableColumnMenu: true },
            { label: 'Talep Numarası', key: 'requestNumber', width: '150', sortable: false  },
            { label: 'Mağaza', key: 'store', width: '450', sortable: false },
            { label: 'Marka', key: 'brand', width: '300', sortable: false },
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
    clients:{
        columns: [
            { label: 'Firma Adı', key: 'name', width: '240' },
            { label: 'Kullanıcı', key: 'users', width: '100' },
            { label: 'Markalar', key: 'brands', width: '100' },
            { label: 'Durum', key: 'status', width: '120' },
            { label: '', key: 'actions', width: '80' },
        ]
    }
}