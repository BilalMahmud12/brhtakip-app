
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
            { label: 'Kullanıcı', key: 'username', width: '30%' },
            { label: 'Durum', key: 'status', width: '10%' },
            { label: 'Eposta', key: 'email', width: '25%' },
            { label: 'Rol', key: 'role', width: '20%' },
            { label: '', key: 'actions', width: '3%' },
        ]
    }
}