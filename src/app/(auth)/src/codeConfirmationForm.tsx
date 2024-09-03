'use client'
import React from 'react'
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';

const CodeConfirmationForm: React.FC = () => {
    const [code, setCode] = React.useState<string>('');
    const [codeError, setCodeError] = React.useState<boolean>(false);

    const handleFormChange = (value: string) => {}


    return (
        <div className='grid grid-cols-1 space-y-5 w-full'>
            <TextField
                label="E-Posta Adresi"
                variant="outlined"
                value={code || ''}
                onChange={(e) => handleFormChange(e.target.value)}
                //disabled={isLoading}
                //error={emailError}
                //helperText={emailError ? 'Lütfen geçerli bir e-posta adresi giriniz.' : ''}
            />
        </div>
    )
} 

export default CodeConfirmationForm