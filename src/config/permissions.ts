export const permissions = {
    ALL_PERMISSIONS: 'ALL_PERMISSIONS',
    VIEW_REQUESTS: 'VIEW_REQUESTS',
    VIEW_BRANDS: 'VIEW_BRANDS',
    VIEW_CLIENTS: 'VIEW_CLIENTS',
    VIEW_USERS: 'VIEW_USERS',
    CREATE_USERS: 'CREATE_USERS',
    UPDATE_USERS: 'UPDATE_USERS',
    DELETE_USERS: 'DELETE_USERS',
};

export const abstractPermissions = {
    VIEW: 'VIEW',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
};

export const abstractPermissionsTurkish = {
    VIEW: 'Görüntüle',
    CREATE: 'Oluştur',
    UPDATE: 'Güncelle',
    DELETE: 'Sil',
};

export const features = [
    'Users',
    'Requests',
    'Stores',
    'Brands',
    'Products',
    'Materials',
    'ApplicationAreas',
    'Cities',
    'Districts',
    'Areas',
] as const;

export const featuresTurkish = {
    Requests: 'Talepler',
    Stores: 'Mağazalar',
    Brands: 'Markalar',
    Products: 'Ürünler',
    Materials: 'Malzemeler',
    ApplicationAreas: 'Uygulama Alanları',
    Cities: 'Şehirler',
    Districts: 'İlçeler',
    Areas: 'Mahalleler',
    Users: 'Sistem Kullanıcılar',
};

export type Feature = typeof features[number];
export type AbstractPermission = keyof typeof abstractPermissions;
export type Permission = `${AbstractPermission}_${Uppercase<Feature>}`;

