'use client'
import React from 'react';

import { Button, TextField } from '@mui/material';
import MailLockIcon from '@mui/icons-material/MailLock';
import Alert from '@mui/material/Alert';
import Link from 'next/link';

interface PasswordResetFormProps {
    onCodeRequest: (data: { email: string }) => void;
    onSubmit?: (data: { code: string, username: string, password: string }) => void;
    codeSent?: boolean;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = (props) => {
    const { 
        onCodeRequest = () => {},
        onSubmit = () => {},
        codeSent = false 
    } = props;
    
    const [email, setEmail] = React.useState<string>('');
    const [code, setCode] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const [emailError, setEmailError] = React.useState<boolean>(false);
    const [passwordError, setPasswordError] = React.useState<boolean>(false);
    const [codeError, setCodeError] = React.useState<boolean>(false);

    const handleFormChange = (key: string, value: string) => {
        switch (key) {
            case 'email':
                setEmail(value);
                setEmailError(false);
                break;
            case 'code':
                setCode(value);
                setCodeError(false);
                break;
            case 'password':
                setPassword(value);
                setPasswordError(false);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                setPasswordError(false);
                break;
            default:
                break;
        }
    }

    const handleCodeRequest = () => {
        if (!email || !email.includes('@')) {
            setEmailError(true);
            return;
        }
        onCodeRequest({
            email: email
        });
    }

    const handleSubmit = () => {
        console.log('code', code);
        if (!password || password.length < 8 || password !== confirmPassword) {
            setPasswordError(true);
            return;
        }

        onSubmit({
            code: code,
            username: email,
            password: password
        });
    }

    return (

        <div className='grid grid-cols-1 space-y-5'>
            {!codeSent && (
                <>
                    <TextField
                        label="Eposta"
                        variant="outlined"
                        value={email || ''}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        error={emailError}
                        helperText={emailError ? 'Lütfen geçerli bir e-posta adresi giriniz.' : ''}
                    />

                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            size='large'
                            startIcon={<MailLockIcon />}
                            onClick={handleCodeRequest}
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#333',
                                }
                            }}
                        >
                            Kod Gönder
                        </Button>
                    </div>
                </>
            )}

            {codeSent && (
                <>
                    <TextField
                        label="Kod"
                        variant="outlined"
                        value={code || ''}
                        onChange={(e) => handleFormChange('code', e.target.value)}
                        error={codeError}
                        helperText={codeError ? 'Lütfen geçerli bir kod giriniz.' : ''}
                    />

                    <div>
                        <Alert severity="info">
                            no-reply@verificationemail.com adresinden e-posta adresinize bir onay kodu gönderildi.
                        </Alert>
                    </div>

                    <TextField
                        label="Şifre"
                        variant="outlined"
                        type='password'
                        value={password || ''}
                        onChange={(e) => handleFormChange('password', e.target.value)}
                        error={passwordError}
                        helperText={passwordError ? 'Lütfen geçerli bir şifre giriniz.' : ''}
                    />

                    <TextField
                        label="Şifre Tekrarla"
                        variant="outlined"
                        type='password'
                        value={confirmPassword || ''}
                        onChange={(e) => handleFormChange('confirmPassword', e.target.value)}
                        error={passwordError}
                        helperText={passwordError ? 'Lütfen geçerli bir şifre giriniz.' : ''}
                    />

                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            size='large'
                            startIcon={<MailLockIcon />}
                            onClick={handleSubmit}
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#333',
                                }
                            }}
                        >
                            Şifremi Sıfırla
                        </Button>
                    </div>
                </>
            )}
            
            <div className='flex items-center justify-end'>
                <Link
                    href='/login'
                    className='text-center text-sm font-medium text-black hover:text-[#333]'
                >
                    <span>Giriş Yap</span>
                </Link>
            </div>
        </div>
    );
};

export default PasswordResetForm;