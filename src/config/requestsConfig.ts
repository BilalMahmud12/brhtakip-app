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
    'PENDING_APPROVAL': 'Onay Bekliyor',
    'IN_DESIGN': 'Tasarım Bekliyor',
    'IN_PRESS': 'Baskı Bekliyor',
    'IN_APPLICATION': 'Uygulama Bekliyor',
    'COMPLETED': 'Tamamlandı',
    'CANCELLED': 'İptal Edildi',
}