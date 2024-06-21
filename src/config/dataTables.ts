
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
            { label: 'Kullanıcı', key: 'username', width: '20%' },
            { label: 'Durum', key: 'status', width: '5%' },
            { label: 'Rol', key: 'role', width: '5%' },
            { label: 'Eposta', key: 'email', width: '65%' },
            { label: '', key: 'actions', width: '3%' },
        ]
    }
}