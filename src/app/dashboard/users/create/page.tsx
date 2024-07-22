'use client'
import React from 'react';
//import { permissions } from '@/config/index';
//import WithAuthorization from '../../../withAuthorization';
import { useAppDispatch, useAppSelector } from '@/reduxStore/hooks';
import { AppDispatch, RootState } from '@/reduxStore/store';
import { setValidationErrors, resetUserForm, resetValidationErrors, setUsers } from '@/reduxStore/features/userSlice';
import CreateOrUpdateForm from '../src/CreateOrUpdateForm';
import * as Repo from '@/repository';
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';
import validateUserFormInputs from '../src/validateUserFormInputs';
import { UserProfile } from '@/API';

const UserCreatePage: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch<AppDispatch>();
    
    const [validationIsEnabled, setValidationIsEnabled] = React.useState(false);
    const validationErrors = useAppSelector((state: RootState) => state.user.validationErrors);
    const validationErrorsRef = React.useRef(validationErrors);
    validationErrorsRef.current = validationErrors;

    const userForm = useAppSelector((state: RootState) => state.user.userForm);
    const userFormRef = React.useRef(userForm);
    userFormRef.current = userForm;

    const [isFetchingData, setIsFetchingData] = React.useState<boolean>(false);

    React.useEffect(() => {
        return () => {
            dispatch(resetUserForm());
            dispatch(resetValidationErrors());
        }
    }, [])

    React.useEffect(() => {
        if (validationIsEnabled) {
            dispatch(setValidationErrors(validateUserFormInputs(userFormRef.current, true)));
        }
    }, [userFormRef.current, validationIsEnabled])
    
    const handleOnSubmit = async () => {
        setIsFetchingData(true);
        setValidationIsEnabled(true);
        dispatch(setValidationErrors(validateUserFormInputs(userFormRef.current)))

        let isFormValid = false;
        let formData = Object.assign({}, userFormRef.current);
        delete formData?.cognitoID;
        delete formData?.profilePhoto;

        const { id, password, confirmPassword, ...userProfileData } = formData;

        isFormValid = 
            Object.values(validationErrorsRef.current).every(value => value === null) 
            && Object.values(userProfileData).every(value => value !== '');

        if (!isFormValid && password !== '' && confirmPassword !== '') {
            setIsFetchingData(false);
            toast.error('Formda hatalar var. Lütfen düzeltin');
            return;
        }

        if (password !== confirmPassword) {
            setIsFetchingData(false);
            toast.error('Şifreler eşleşmiyor');
            return;
        }

        try {
            let cognitoUser = undefined;

            try {
                cognitoUser = await Repo.UserRepository.createCognitoAccount({
                    username: userProfileData.email as string,
                    password: password as string,
                    email: userProfileData.email as string,
                    name: `${userProfileData.firstName} ${userProfileData.lastName}`
                });

                if (!cognitoUser) {
                    setIsFetchingData(false);
                    toast.error('Kullanıcı zaten mevcut. Lütfen başka bir email kullanın.');
                    dispatch(setValidationErrors({
                        ...validationErrorsRef.current,
                        email: 'Bu email adresi zaten kullanımda'
                    }));
                    return
                }

            } catch (error: any) {
                console.log('error', error);
                toast.error('Kullanıcı zaten mevcut. Lütfen başka bir email kullanın.');

                dispatch(setValidationErrors({
                    ...validationErrorsRef.current,
                    email: 'Bu email adresi zaten kullanımda'
                }));

                return;
            }
            
            if (cognitoUser) {
              userProfileData.cognitoID = cognitoUser.userId;
            }

            const response = await Repo.UserRepository.create({
                ...userProfileData
            });

            if (response?.id) {
                setIsFetchingData(false);
                setValidationIsEnabled(false);
                dispatch(resetUserForm());
                dispatch(resetValidationErrors());
                toast.success('Kullanıcı başarıyla oluşturuldu');
                
                const users = await Repo.UserRepository.getAllUsers();
                dispatch(setUsers(users as UserProfile[]));
                router.push('/dashboard/users');
            }
        } catch (error) {
            console.error(error);
            toast.error('Kullanıcı oluşturulurken bir hata oluştu');
        }
    }

    return (
        <div>
            <title>Kullanıcı Ekle - BRH Takip</title>

            <div className='space-y-3'>
                <CreateOrUpdateForm 
                    isCreate={true}
                    isFetching={isFetchingData} 
                    onSubmitted={handleOnSubmit} 
                />
            </div>
        </div>
    )
}

export default UserCreatePage

//export default WithAuthorization([permissions.CREATE_USERS])(UserCreatePage);
