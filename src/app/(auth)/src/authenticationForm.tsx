'use client'
import React from 'react';

import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Alert from '@mui/material/Alert';
import Link from 'next/link';

interface AuthenticationFormProps {
    codeConfirm?: boolean;
    isLoading?: boolean;
    error?: boolean;
    success?: boolean;
    onSubmit: (authData: { email: string, password: string }) => void;
    onCodeSubmit?: (data: { email: string }) => void;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
    codeConfirm = false, 
    isLoading = false,
    success = false,
    error = false, 
    onSubmit = () => {},
    onCodeSubmit = () => {} 
}) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [code, setCode] = React.useState<string>('');

    const [emailError, setEmailError] = React.useState<boolean>(false);
    const [passwordError, setPasswordError] = React.useState<boolean>(false);

    const handleFormChange = (key: string, value: string) => {
        switch (key) {
            case 'email':
                setEmail(value);
                setEmailError(false);
                break;
            case 'password':
                setPassword(value);
                setPasswordError(false);
                break;
            default:
                break;
        }
    }

    const handleSubmit = () => {
        if (!email || !email.includes('@')) {
            setEmailError(true);
            return;
        }

        if (!password || password.length < 8) {
            setPasswordError(true);
            return;
        }

        setEmailError(false);
        setPasswordError(false);

        onSubmit({ 
            email: email, 
            password: password
        });
    }
    return (
        <div className='grid grid-cols-1 space-y-5 w-full'>
            <TextField
                label="E-Posta Adresi"
                variant="outlined"
                value={email || ''}
                onChange={(e) => handleFormChange('email', e.target.value)}
                disabled={isLoading}
                error={emailError}
                helperText={emailError ? 'Lütfen geçerli bir e-posta adresi giriniz.' : ''}
            />
            <TextField
                label="Şifre"
                variant="outlined"
                type='password'
                value={password || ''}
                onChange={(e) => handleFormChange('password', e.target.value)}
                disabled={isLoading}
                error={passwordError}
                helperText={passwordError ? 'Lütfen geçerli bir şifre giriniz.' : ''}
            />
            <div>
                <LoadingButton
                    variant="contained"
                    color="secondary"
                    size='large'
                    startIcon={<LockPersonIcon />}
                    onClick={handleSubmit}
                    sx={{
                        width: '100%',
                        fontWeight: 400,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: '#333',
                        }
                    }}
                    loading={isLoading}
                    disabled={success}
                >
                    Giriş Yap
                </LoadingButton>
            </div>

            {error && ( 
                <div>
                    <Alert severity="error">E-Posta Adresi veya şifre hatalıdır</Alert>
                </div>
            )}

            <div className='flex items-center justify-end'>
                <Link 
                    href='/password-reset' 
                    className='text-center text-sm font-medium text-black hover:text-[#333]'
                >
                    <span>Şifremi Unuttum</span>
                </Link>
            </div>
        </div>
    );
};

export default AuthenticationForm;