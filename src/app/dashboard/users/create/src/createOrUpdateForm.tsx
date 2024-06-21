import React from 'react'
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange } from '@/reduxStore/features/userSlice';
import { FormControlLabel } from '@mui/material';
import AutoComplete from '@/components/core/autoComplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { roles } from '@/config/roles';
import PermissionSelection from './PermissionSelection';
import type { Permission } from '@/config/index';
import { useRouter } from 'next-nprogress-bar';

interface CreateOrUpdateFormProps {
    isCreate?: boolean
}

const getRoleOptions = (currentUser: any) => {
    return Object.values(roles).map((role) => {
        let label = ''
        switch (role) {
            case roles.ADMIN:
                label = 'Sistem Yöneticisi'
                break
            case roles.CLIENT_ADMIN:
                label = 'Kurumsal Yöneticisi'
                break
            case roles.EDITOR:
                label = 'Sistem Editörü'
                break
            case roles.CLIENT_EDITOR:
                label = 'Kurumsal Editörü'
                break
            default:
                label = ''
        }
        return { value: role, label }
    })
    .filter((role) => {
        if (currentUser.clientprofileID === 'BRH_ADMIN') {
            return currentUser.role === roles.EDITOR ? role.value !== roles.ADMIN : role
        } else {
            return currentUser.role === roles.CLIENT_EDITOR ? 
                (role.value !== roles.CLIENT_ADMIN || role.value !== roles.ADMIN || role.value !== roles.EDITOR)
                : role
        }
    })
}

const getClientOptions = (clientProfiles: any[]) => {
    return clientProfiles.map((client) => {
        return { value: client.id, label: client.name }
    })
}

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = ({ 
    isCreate = false 
}) => {
    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>()
    const clientProfiles = useAppSelector((state: RootState) => state.client.clientProfiles)
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile)
    const { clientprofileID } = currentUser
    const userForm = useAppSelector((state: RootState) => state.user.userForm)
    const userFormRef = React.useRef(userForm)
    userFormRef.current = userForm

    console.log('userFormRef', userFormRef.current)

    const [checked, setChecked] = React.useState(userFormRef.current.isActive as boolean);
    const [selectedPermissions, setSelectedPermissions] = React.useState<Permission[]>([]);

    const getRoleSelectedValue = (role: string) => {
        return getRoleOptions(currentUser).find((option) => option.value === role)?.label as string || ''
    }

    React.useEffect(() => {
        dispatch(handleFormChange({ key: 'permissions', value: selectedPermissions }))
    }, [selectedPermissions])

    React.useEffect(() => {
        dispatch(handleFormChange({ 
            key: 'clientprofileID', 
            value: [roles.ADMIN, roles.EDITOR].includes(userFormRef.current.role as string)  ? 'BRH_ADMIN' : ''
        }))

        if (userFormRef.current.role === roles.ADMIN) {
            setSelectedPermissions(['ALL_PERMISSIONS'] as unknown as Permission[])
        } else {
            setSelectedPermissions([])
        }
    }, [userFormRef.current.role])

    return (
        <div className='h-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='h-full col-span-2'>
                    <div className='flex items-center justify-between'>
                        <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={() => router.push('/dashboard/users')}>
                            Kullanıcılara Geri Dön
                        </Button>

                        <Button variant="contained" startIcon={<SaveIcon />}>
                            Kaydı Et
                        </Button>
                    </div>
                </div>

                <div className='p-6 bg-white shadow col-span-2'>
                    <h2 className='text-base font-semibold mb-6'>Hesap Durumu ve Rol</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                        <div className='input-group w-full'>
                            <label htmlFor="client_name" className='block text-xs font-medium mb-2'>Hesap Durumu</label>
                            <div>
                                <FormControlLabel
                                    label={checked ? 'Aktif' : 'Aktif Değil'}
                                    control={<Switch
                                        color='success'
                                        checked={checked}
                                        onChange={
                                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                                setChecked(event.target.checked)
                                                dispatch(handleFormChange({
                                                    key: 'isActive',
                                                    value: event.target.checked
                                                }))
                                            }
                                        }
                                    />}
                                    sx={{ '.MuiFormControlLabel-label': { fontSize: '0.90rem', fontWeight: '500' } }}
                                />
                            </div>
                        </div>
                        <div className='input-group w-full'>
                            <label htmlFor="role" className='block text-xs font-medium mb-1.5'>Rol *</label>
                            <AutoComplete
                                id="role"
                                options={[...getRoleOptions(currentUser)]}
                                value={getRoleSelectedValue(userFormRef.current.role as string)}
                                handleOnChange={(option) => {
                                    if (typeof option !== 'string') {
                                        dispatch(handleFormChange({ key: 'role', value: option?.value as string || '' }))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='p-6 bg-white shadow h-full col-span-2 lg:col-span-1'>
                    <h2 className='text-base font-semibold mb-6'>Kullanıcı Bilgileri</h2>

                    <Stack spacing={2} sx={{ mt: 2, mb: 3, display: 'none' }} >
                        <Alert severity="info">
                            Kullanıcı bilgilerini girerek yeni bir kullanıcı oluşturabilirsiniz.
                        </Alert>
                    </Stack>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                        {(clientprofileID === 'BRH_ADMIN' && [roles.CLIENT_ADMIN, roles.CLIENT_EDITOR].includes(userFormRef.current.role as string)) && (
                            <div className='input-group w-full col-span-2'>
                                <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma</label>
                                <AutoComplete
                                    id="client_name"
                                    options={getClientOptions(clientProfiles)}
                                    value={clientProfiles.find((client) => client.id === userFormRef.current.clientprofileID)?.name as string || ''}
                                    handleOnChange={(option) => {
                                        console.log('option', option)
                                        if (typeof option !== 'string') {
                                            dispatch(handleFormChange({ key: 'clientprofileID', value: option?.value as string || '' }))
                                        }
                                    }}
                                />
                            </div>
                        )}
                        
                        <div className='input-group w-full col-span-2 lg:col-span-1'>
                            <label htmlFor="firstName" className='block text-xs font-medium mb-1.5'>Adı *</label>
                            <TextField
                                id='firstName'
                                variant="standard"
                                sx={{ width: '100%' }}
                                helperText={''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'firstName',
                                        value: event.target.value
                                    }))
                                }}
                                required
                            />
                        </div>

                        <div className='input-group w-full col-span-2 lg:col-span-1'>
                            <label htmlFor="lastName" className='block text-xs font-medium mb-1.5'>Soyadı *</label>
                            <TextField
                                id='lastName'
                                variant="standard"
                                sx={{ width: '100%' }}
                                helperText={''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'lastName',
                                        value: event.target.value
                                    }))
                                }}
                            />
                        </div>
                    </div>
                </div>

                {isCreate && (
                    <div className='p-6 bg-white shadow mb-6 h-full col-span-2 lg:col-span-1'>
                        <h2 className='text-base font-semibold mb-6'>Giriş Bilgileri</h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                            <div className='input-group w-full sm:col-span-2'>
                                <label htmlFor="email" className='block text-xs font-medium mb-1.5'>E-Posta Adresi *</label>
                                <TextField
                                    id='email'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'email',
                                            value: event.target.value
                                        }))
                                    }}
                                    autoComplete='email'
                                />
                            </div>
                            <div className='input-group w-full'>
                                <label htmlFor="password" className='block text-xs font-medium mb-1.5'>Şifre *</label>
                                <TextField
                                    id='password'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'password',
                                            value: event.target.value
                                        }))
                                    }}
                                    type='password'
                                    autoComplete='new-password'
                                />
                            </div>

                            <div className='input-group w-full'>
                                <label htmlFor="confirmPassword" className='block text-xs font-medium mb-1.5'>Şifre Tekrar *</label>
                                <TextField
                                    id='confirmPassword'
                                    variant="standard"
                                    sx={{ width: '100%' }}
                                    helperText={''}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        dispatch(handleFormChange({
                                            key: 'confirmPassword',
                                            value: event.target.value
                                        }))
                                    }}
                                    type='password'
                                    autoComplete='new-password'
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className='p-6 bg-white shadow h-full col-span-2'>
                    <h2 className='text-base font-semibold mb-6'>İzinler</h2>

                    {((userFormRef.current.role ?? '') !== roles.ADMIN && (userFormRef.current.role ?? '') !== roles.CLIENT_ADMIN) ? (
                        <div className='sm:col-span-2'>
                            <div className='p-6 bg-zinc-100'>
                                <PermissionSelection
                                    selectedPermissions={selectedPermissions}
                                    setSelectedPermissions={(permissions) => {
                                        setSelectedPermissions(permissions)
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <Alert severity="info">
                            {(userFormRef.current.role ?? '') !== roles.ADMIN ? 'Kurumsal yöneticisi olarak tüm izinlere sahiptir' : 'Sistem yöneticisi olarak tüm izinlere sahiptir'}
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateOrUpdateForm



/** 
 * User Profile Field Groups
 * Client Profile: Client Profile
 * Status: Active, Inactive
 * Info: First Name, Last Name, Email, Password, Confirm Password
 * Role & Permissions: Role, Permissions
 * 
 * who will see User Create page?
 * * Admin
 * * Editor
 * * Client Admin
 * * Client User
 * 
 * Admin Side:
 * * Available roles to assign:
 * * Available Features: 
 * 
 * Client Side:;
 * * Available roles to assign:
 * * Available Features:
 * 
 * Load the client select form before the page or whenever
*/

