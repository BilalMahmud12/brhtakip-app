
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
            { label: 'Durum', key: 'status', width: '150' },
            { label: 'Rol', key: 'role', width: '180' },
            { label: 'Eposta', key: 'email', width: '240' },
            { label: '', key: 'actions', width: '80' },
        ]
    }
}