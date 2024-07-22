'use client'
import React from 'react'
import * as Repo from '@/repository/index';
import { useRouter } from 'next-nprogress-bar';
import { useAppSelector, useAppDispatch } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { handleFormChange, resetUserForm } from '@/reduxStore/features/userSlice';
import getRoleSelectOptions from './getRoleSelectOptions';
import PermissionSelection from '../create/src/PermissionSelection';
import AutoComplete from '@/components/core/autoComplete';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormControlLabel, Switch, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import { roles } from '@/config/roles';
import type { Permission } from '@/config/index';
import type { UserProfile } from '@/API';
import { toast } from 'sonner';

interface CreateOrUpdateFormProps {
    isCreate?: boolean
    isFetching?: boolean
    onSubmitted?: () => void
}

type RoleSelectOption = {
    label: string;
    value: string;
}

type ClientSelectOption = {
    label: string;
    value: string;
}


const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const {
        isCreate = false,
        isFetching = false,
        onSubmitted = () => { },
    } = props

    const router = useRouter()
    const dispatch = useAppDispatch<AppDispatch>()
    const currentUser = useAppSelector((state: RootState) => state.global.currentUserProfile)

    const userForm = useAppSelector((state: RootState) => state.user.userForm)
    const userFormRef = React.useRef(userForm)
    userFormRef.current = userForm
    console.log('userFormRef', userFormRef.current)

    const validationErrors = useAppSelector((state: RootState) => state.user.validationErrors)
    const validationErrorsRef = React.useRef(validationErrors)
    validationErrorsRef.current = validationErrors

    const [_, setChecked] = React.useState(userFormRef.current.isActive as boolean)
    const [roleSelectOptions, setRoleSelectOptions] = React.useState<RoleSelectOption[]>([])
    const [selectedRole, setSelectedRole] = React.useState<RoleSelectOption | null>(null)

    const [clientProfileOptions, setClientProfileOptions] = React.useState<ClientSelectOption[]>([])
    const [selectedClientProfile, setSelectedClientProfile] = React.useState<ClientSelectOption | null>(null)
    const [selectedPermissions, setSelectedPermissions] = React.useState<Permission[]>([])

    const handleOnRoleSelect = (option: RoleSelectOption, reason: string) => {
        setSelectedRole(reason === 'clear' ? null : option)
        dispatch(handleFormChange({ key: 'role', value: option?.value as string }))
        
        if (option?.value === roles.ADMIN) {
            setSelectedPermissions(['ALL_PERMISSIONS'] as unknown as Permission[])
        } else {
            setSelectedPermissions([])
        }

        if (option?.value === roles.ADMIN || option?.value === roles.EDITOR) {
            dispatch(handleFormChange({ key: 'clientprofileID', value: 'BRH_ADMIN' }))
        } else {
            dispatch(handleFormChange({ key: 'clientprofileID', value: '' }))
        }
    }

    const handleOnClientProfileSelect = (option: ClientSelectOption) => {
        setSelectedClientProfile(option)
        dispatch(handleFormChange({ key: 'clientprofileID', value: option?.value as string }))
    }

    const handleOnPermissionSelect = (permissions: Permission[]) => {
        setSelectedPermissions(permissions)
        dispatch(handleFormChange({ key: 'permissions', value: permissions }))
    }

    const handleOnCancel = () => {
        toast.info('İşlem iptal edildi')
        dispatch(resetUserForm())
        router.push('/dashboard/users')
    }

    React.useEffect(() => {
        setChecked(userFormRef.current.isActive as boolean)
        //setSelectedPermissions(userFormRef.current.permissions as Permission[])
    }, [])

    React.useEffect(() => {
        console.log('useEffect selectedPermissions 2 start', selectedPermissions)
        setSelectedRole(null);
        const getAndSetRoleOptions = async () => {
            const roles = getRoleSelectOptions(currentUser as UserProfile);
            setRoleSelectOptions(roles);
            const currentRole = roles.find((role) => role.value === userForm.role) || null;
            setSelectedRole(currentRole);
        };
        getAndSetRoleOptions();

        console.log('useEffect selectedPermissions 2 end', selectedPermissions)
    }, [currentUser, userFormRef.current.role])

    React.useEffect(() => {
        console.log('useEffect selectedPermissions 3 start', selectedPermissions)
        setSelectedClientProfile(null);
        const getAndSetClientProfileOptions = async () => {
            const clientProfiles = await Repo.ClientProfileRepository.getClientProfiles();
            const clientProfileOptions = clientProfiles?.map(clientProfile => ({
                value: clientProfile.id,
                label: clientProfile.name || ""
            })) || [];
            setClientProfileOptions(clientProfileOptions);

            const currentClientProfile = clientProfileOptions.find(clientProfile => clientProfile.value === userForm.clientprofileID) || null;
            setSelectedClientProfile(currentClientProfile);
            console.log('selectedPermissions', selectedPermissions)
        };

        getAndSetClientProfileOptions();
        console.log('useEffect selectedPermissions 3 end', selectedPermissions)
    }, [userFormRef.current.clientprofileID])

    React.useEffect(() => {
        console.log('useEffect selectedPermissions 4 start', selectedPermissions)
        if (!isCreate) {
            setSelectedPermissions(userFormRef.current.permissions as Permission[])
        }
        //setSelectedPermissions(userFormRef.current.permissions as Permission[])
        console.log('useEffect selectedPermissions 4 end', selectedPermissions)
    }, [userFormRef.current])

    return (
        <React.Fragment>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div className='p-6 bg-white shadow col-span-2'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-lg font-bold'>{isCreate ? 'Kullanıcı Oluştur' : 'Kullanıcı Düzenle'}</h1>
                        </div>

                        <div className='flex items-center justify-end space-x-3'>
                            <Button
                                variant="contained"
                                color='secondary'
                                size='small'
                                endIcon={<ClearIcon />}
                                onClick={() => handleOnCancel()}
                            >
                                Vazgeç
                            </Button>

                            <LoadingButton
                                variant="contained"
                                color='primary'
                                size='small'
                                endIcon={<DoneIcon />}
                                onClick={onSubmitted}
                                loading={isFetching}
                                sx={{
                                    fontWeight: 400,
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    }
                                }}
                            >
                                Kaydı Et
                            </LoadingButton>
                        </div>
                    </div>
                </div>

                {/** Hesap Durumu ve Rol */}
                <div className='p-6 bg-white shadow col-span-2'>
                    <h2 className='text-base font-semibold mb-6'>Hesap Durumu ve Rol</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                        <div className='input-group w-full'>
                            <label htmlFor="client_name" className='block text-xs font-medium mb-2'>Hesap Durumu</label>

                            <div>
                                <FormControlLabel
                                    label={userFormRef.current.isActive as boolean ? 'Aktif' : 'Aktif Değil'}
                                    control={
                                        <Switch
                                            color='success'
                                            checked={isCreate ? true : userFormRef.current.isActive as boolean}
                                            onChange={
                                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setChecked(event.target.checked)
                                                    dispatch(handleFormChange({
                                                        key: 'isActive',
                                                        value: event.target.checked
                                                    }))
                                                }
                                            }
                                        />
                                    }
                                    sx={{ '.MuiFormControlLabel-label': { fontSize: '0.90rem', fontWeight: '500' } }}
                                />
                            </div>
                        </div>

                        <div className='input-group w-full'>
                            <label htmlFor="role" className='block text-xs font-medium mb-1.5'>Rol *</label>
                            <AutoComplete
                                id="role"
                                options={roleSelectOptions}
                                value={selectedRole ? selectedRole.value : ''}
                                handleOnChange={handleOnRoleSelect}
                                error={validationErrorsRef.current.role ? true : false}
                                helperText={validationErrorsRef.current.role || ''}
                            />
                        </div>
                    </div>
                </div>

                {/** Kullanıcı Bilgileri */}
                <div className='p-6 bg-white shadow h-full col-span-2 lg:col-span-1'>
                    <h2 className='text-base font-semibold mb-6'>Kullanıcı Bilgileri</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                        {(currentUser.clientprofileID === 'BRH_ADMIN' && [roles.CLIENT_ADMIN, roles.CLIENT_EDITOR].includes(userFormRef.current.role as string)) && (
                            <div className='input-group w-full col-span-2'>
                                <label htmlFor="client_name" className='block text-xs font-medium mb-1.5'>Firma</label>
                                <AutoComplete
                                    id="client_name"
                                    options={clientProfileOptions}
                                    value={selectedClientProfile ? selectedClientProfile.value : ''}
                                    handleOnChange={handleOnClientProfileSelect}
                                    error={validationErrorsRef.current.clientprofileID ? true : false}
                                    helperText={validationErrorsRef.current.clientprofileID || ''}
                                />
                            </div>
                        )}

                        <div className='input-group w-full col-span-2 lg:col-span-1'>
                            <label htmlFor="firstName" className='block text-xs font-medium mb-1.5'>Adı *</label>
                            <TextField
                                id='firstName'
                                variant="standard"
                                sx={{ width: '100%' }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'firstName',
                                        value: event.target.value
                                    }))
                                }}
                                value={userFormRef.current.firstName}
                                error={validationErrorsRef.current.firstName ? true : false}
                                helperText={validationErrorsRef.current.firstName || ''}
                            />
                        </div>

                        <div className='input-group w-full col-span-2 lg:col-span-1'>
                            <label htmlFor="lastName" className='block text-xs font-medium mb-1.5'>Soyadı *</label>
                            <TextField
                                id='lastName'
                                variant="standard"
                                sx={{ width: '100%' }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'lastName',
                                        value: event.target.value
                                    }))
                                }}
                                value={userFormRef.current.lastName}
                                error={validationErrorsRef.current.lastName ? true : false}
                                helperText={validationErrorsRef.current.lastName || ''}
                            />
                        </div>
                    </div>
                </div>

                {/** Hesap Giriş Bilgileri */}
                <div className='p-6 bg-white shadow mb-6 h-full col-span-2 lg:col-span-1'>
                    <h2 className='text-base font-semibold mb-6'>Hesap Giriş Bilgileri</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-4'>
                        <div className='input-group w-full sm:col-span-2'>
                            <label htmlFor="email" className='block text-xs font-medium mb-1.5'>E-Posta Adresi *</label>
                            <TextField
                                id='email'
                                variant="standard"
                                sx={{ width: '100%' }}
                                value={userFormRef.current.email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'email',
                                        value: event.target.value
                                    }))
                                }}
                                autoComplete='email'
                                error={validationErrorsRef.current.email ? true : false}
                                helperText={validationErrorsRef.current.email || ''}
                                disabled={!isCreate}
                            />
                        </div>

                        <div className='input-group w-full'>
                            <label htmlFor="password" className='block text-xs font-medium mb-1.5'>Şifre *</label>
                            <TextField
                                id='password'
                                variant="standard"
                                sx={{ width: '100%' }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'password',
                                        value: event.target.value
                                    }))
                                }}
                                type='password'
                                autoComplete='new-password'
                                error={validationErrorsRef.current.password ? true : false}
                                helperText={validationErrorsRef.current.password || ''}
                            />
                        </div>

                        <div className='input-group w-full'>
                            <label htmlFor="confirmPassword" className='block text-xs font-medium mb-1.5'>Şifre Tekrar *</label>
                            <TextField
                                id='confirmPassword'
                                variant="standard"
                                sx={{ width: '100%' }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(handleFormChange({
                                        key: 'confirmPassword',
                                        value: event.target.value
                                    }))
                                }}
                                type='password'
                                autoComplete='new-password'
                                error={validationErrorsRef.current.confirmPassword ? true : false}
                                helperText={validationErrorsRef.current.confirmPassword || ''}
                            />
                        </div>
                    </div>
                </div>

                {/** İzinler */}
                <div className='p-6 bg-white shadow h-full col-span-2'>
                    <h2 className='text-base font-semibold mb-6'>İzinler</h2>

                    {((userFormRef.current.role ?? '') !== roles.ADMIN && (userFormRef.current.role ?? '') !== roles.CLIENT_ADMIN) ? (
                        <div className='sm:col-span-2'>
                            <div className='p-6 bg-zinc-100'>
                                <PermissionSelection
                                    selectedPermissions={selectedPermissions}
                                    handleSelectedPermissions={handleOnPermissionSelect}
                                />
                            </div>

                            {validationErrorsRef.current.permissions && (
                                <Alert severity="error" className='mt-4'>
                                    {validationErrorsRef.current.permissions}
                                </Alert>
                            )}
                        </div>
                    ) : (
                        <Alert severity="info">
                            {(userFormRef.current.role ?? '') !== roles.ADMIN ? 'Kurumsal yöneticisi olarak tüm izinlere sahiptir' : 'Sistem yöneticisi olarak tüm izinlere sahiptir'}
                        </Alert>
                    )}
                </div>

                <div className='p-6 bg-white shadow col-span-2'>
                    <div className='flex items-center justify-end space-x-3'>
                        <Button
                            variant="contained"
                            color='secondary'
                            size='small'
                            endIcon={<ClearIcon />}
                            onClick={() => handleOnCancel()}
                        >
                            Vazgeç
                        </Button>

                        <LoadingButton
                            variant="contained"
                            color='primary'
                            size='small'
                            endIcon={<DoneIcon />}
                            onClick={onSubmitted}
                            loading={isFetching}
                            sx={{
                                fontWeight: 400,
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#333',
                                }
                            }}
                        >
                            Kaydı Et
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateOrUpdateForm