import { useEffect } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next-nprogress-bar';
import { permissions } from '@/config';

const useAuthorization = (requiredPermissions: string[]) => {
    const userProfile = useAppSelector((state) => state.user.userProfile);

    console.log('userProfile', userProfile);
    const router = useRouter();

    useEffect(() => {
        if (userProfile.id !== '') {
            const hasAllPermissions = userProfile?.permissions?.includes(permissions.ALL_PERMISSIONS);

            const hasRequiredPermissions = requiredPermissions.every(permission =>
                userProfile?.permissions?.includes(permission)
            );

            if (!hasAllPermissions && !hasRequiredPermissions) {
                router.push('/dashboard/unauthorized');
            }
        }
        
    }, [userProfile, requiredPermissions, router]);
};

export default useAuthorization;