'use client'
import React from 'react'
import { permissions } from '@/config/index';
import withAuthorization from '../../../withAuthorization';
import { useAppSelector } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import CreateOrUpdateForm from './src/createOrUpdateForm'
import * as Repo from '@/repository'
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';


const UserCreatePage: React.FC = () => {
    const router = useRouter()
    const userForm = useAppSelector((state: RootState) => state.user.userForm)
    const userFormRef = React.useRef(userForm)
    userFormRef.current = userForm

    const handleOnSubmit = async () => {
        console.log('submit', userFormRef.current)
        try {
            const { password, confirmPassword, ...userProfile } = userFormRef.current
            if (password !== confirmPassword) {
                toast.error('Şifreler eşleşmiyor')
                return
            }
            
            const cognitoUser = await Repo.UserRepository.signUserUp({
                username: userProfile.email as string,
                password: password as string,
                email: userProfile.email as string,
                name: `${userProfile.firstName} ${userProfile.lastName}`
            })

            console.log(cognitoUser)

            if (!cognitoUser?.userId) {
                toast.error('Kullanıcı oluşturulurken bir hata oluştu')
                return
            }

            userProfile.cognitoID = cognitoUser.userId
            const response = await Repo.UserRepository.create(userProfile)

            console.log(response)

            if (response?.id) {
                console.log('User created successfully')
                toast.success('Kullanıcı başarıyla oluşturuldu')
                router.push('/dashboard/users')
            }
        }
        catch (error) {
            console.error(error)
            toast.error('Kullanıcı oluşturulurken bir hata oluştu')
        }
    }

    return (
        <div>
            <title>Kullanıcı Ekle - BRH Takip</title>

            <div className='space-y-3'>
                <CreateOrUpdateForm isCreate={true} onSubmitted={handleOnSubmit} />
            </div>
        </div>
    )
}

export default withAuthorization([permissions.CREATE_USERS])(UserCreatePage)