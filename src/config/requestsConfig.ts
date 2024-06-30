export const statusMap: { [key: string]: string } = {
    'pending-approval': 'PENDING_APPROVAL',
    'in-design': 'IN_DESIGN',
    'in-press': 'IN_PRESS',
    'in-application': 'IN_APPLICATION',
    'completed': 'COMPLETED',
    'cancelled': 'CANCELLED',
};

export const requestStatus= (pathname: string): string => {
    const status: string = statusMap[pathname.split('/').pop() as string];
    return status !== undefined ? status : 'PENDING_APPROVAL';
};

export const requestStatusOptions: { [key: string]: string } = {
    'PENDING_APPROVAL': 'Onayı Bekleyen',
    'IN_DESIGN': 'Tasarıma Bekleyen',
    'IN_PRESS': 'Baskı Bekleyen',
    'IN_APPLICATION': 'Uygulama Bekleyen',
    'COMPLETED': 'Tamamlandı',
    'CANCELLED': 'İptal Edildi',
}

export const requestStatusColors: { [key: string]: string } = {
    'PENDING_APPROVAL': 'red',
    'IN_DESIGN': 'yellow',
    'IN_PRESS': 'cyan',
    'IN_APPLICATION': 'blue',
    'COMPLETED': 'green',
    'CANCELLED': 'gray',
}

export const requestActionOptions: { [key: string]: string } = {
    'IN_DESIGN': 'Onayla ve Tasarıma Aktar',
    'IN_PRESS': 'Tasarıma Onay ve Baskıya Aktar',
    'IN_APPLICATION': 'Uygulamaya Gönder',
    'PENDING_APPROVAL': 'Onay Bekleyenlere geri Aktar',
    'COMPLETED': 'Tamamlananlara Aktar',
    'CANCELLED': 'İptal Et',
}
