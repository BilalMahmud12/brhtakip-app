'use client'
import React from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockPersonIcon from '@mui/icons-material/LockPerson';


export default function CodeConfirm () {
    const [code, setCode] = React.useState<string>('');
    const [codeError, setCodeError] = React.useState<boolean>(false);

    const handleFormChange = (key: string, value: string) => {
        switch (key) {
            case 'code':
                setCode(value);
                setCodeError(false);
                break;
            default:
                break;
        }
    }

    const handleCodeConfirm = () => {
        if (!code || code.length < 6) {
            setCodeError(true);
            return;
        }
    }

    return (
        <div className='space-y-4'>
            <div className='space-y-4'>
                <TextField
                    label='Code'
                    variant='outlined'
                    value={code}
                    onChange={(e) => handleFormChange('code', e.target.value)}
                    error={codeError}
                    helperText={codeError ? 'Invalid code' : ''}
                />
            </div>
            <LoadingButton
                variant='contained'
                color='primary'
                loading={false}
                onClick={handleCodeConfirm}
                startIcon={<LockPersonIcon />}
            >
                Confirm
            </LoadingButton>
        </div>
    )
}
