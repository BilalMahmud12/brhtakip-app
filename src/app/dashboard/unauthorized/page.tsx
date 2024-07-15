import React from 'react';
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';

const Unauthorized: React.FC = () => {
    return (
        <div className='px-6 py-3 h-[80%] w-full flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <Alert severity="warning">
                    <div>
                        <strong>Yetkisiz Erişim!</strong> Bu sayfayı görüntüleme izniniz yok.
                    </div>
                </Alert>

                <div className='mt-4'>
                    <Link href='/'>
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={<ReplyIcon />}
                        >
                            Panel Anasayfa geri dön
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;