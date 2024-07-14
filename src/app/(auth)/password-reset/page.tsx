'use client'
import React from 'react';
import PasswordResetForm from '../src/passwordResetForm';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import type { ResetPasswordOutput, ConfirmResetPasswordInput } from 'aws-amplify/auth';
import { useRouter } from "next-nprogress-bar";
import { toast } from 'sonner';


export default function PasswordReset() {
    const router = useRouter();

    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);
    const [codeSent, setCodeSent] = React.useState<boolean>(false);

    async function handleResetPassword(username: string) {
        try {
            const output = await resetPassword({ username });
            handleResetPasswordNextSteps(output);
        } catch (error) {
            console.log(error);
        }
    }

    function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
        const { nextStep } = output;
        console.log('nextStep', nextStep);
        switch (nextStep.resetPasswordStep) {
            case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
                const codeDeliveryDetails = nextStep.codeDeliveryDetails;
                console.log(
                    `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
                );
                setCodeSent(true);
                break;
            case 'DONE':
                console.log('Successfully reset password.');
                break;
        }
    }

    async function handleConfirmResetPassword({
        username,
        confirmationCode,
        newPassword
    }: ConfirmResetPasswordInput) {
        try {
            await confirmResetPassword({ username, confirmationCode, newPassword });
            toast.success('Şifre başarıyla sıfırlandı.');
            router.push('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <title>Giriş Yap - BRH Takip</title>
            
            <PasswordResetForm
                onCodeRequest={(data: { email: string }) => {
                    console.log('data', data);
                    handleResetPassword(data.email);
                    toast.info('Kod gonderildi, Lütfen e-posta adresinizi kontrol edin.');
                }}
                codeSent={codeSent}
                onSubmit={(data: { code: string, username: string, password: string }) => {
                    console.log('data', data);
                    handleConfirmResetPassword({
                        username: data.username,
                        confirmationCode: data.code,
                        newPassword: data.password
                    });
                }}
             />
        </>
    )
}

