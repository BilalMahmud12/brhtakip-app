import type { UserProfile } from '@/API';

export default function getRoleSelectOptions(currentUser: UserProfile) {
    const roles = {
        ADMIN: 'ADMIN',
        CLIENT_ADMIN: 'CLIENT_ADMIN',
        EDITOR: 'EDITOR',
        CLIENT_EDITOR: 'CLIENT_EDITOR',
    }

    return Object.values(roles)
        .map((role) => {
            let label = '';
            switch (role) {
                case roles.ADMIN:
                    label = 'Sistem Yöneticisi';
                    break;
                case roles.CLIENT_ADMIN:
                    label = 'Kurumsal Yöneticisi';
                    break;
                case roles.EDITOR:
                    label = 'Sistem Editörü';
                    break;
                case roles.CLIENT_EDITOR:
                    label = 'Kurumsal Editörü';
                    break;
                default:
                    label = '';
            }
            return { value: role, label };
        })
        .filter((role) => {
            if (currentUser.clientprofileID === 'BRH_ADMIN') {
                return currentUser.role === roles.EDITOR ? role.value !== roles.ADMIN : true;
            } else {
                return currentUser.role === roles.CLIENT_EDITOR
                    ? role.value !== roles.CLIENT_ADMIN && role.value !== roles.ADMIN && role.value !== roles.EDITOR
                    : true;
            }
        })
}