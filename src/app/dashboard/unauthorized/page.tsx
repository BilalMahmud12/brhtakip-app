import React from 'react';
import Icon from '@/components/core/icon';
import Link from 'next/link';

const Unauthorized: React.FC = () => {
    return (
        <div className='px-6 py-3 h-[80%] w-full flex items-center justify-center'>
            <div className='text-center'>
                <div className='flex flex-col items-center justify-center space-x-1 mb-5'>
                    <Icon iconName='FcCancel' className='text-6xl mb-2' />
                    <h1 className='text-3xl font-bold'>Yetkisiz!</h1>
                    <p className='text-lg'>Bu sayfayı görüntüleme izniniz yok.</p>
                </div>

                <div>
                    <Link href='/dashboard' className=''>
                        <span className='text-sm font-medium rounded-md bg-amber-500 text-gray-800 px-6 py-2 h-[35px]'>Panel Girişi'ye Dön</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;