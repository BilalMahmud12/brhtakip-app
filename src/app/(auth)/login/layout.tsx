'use client'
import Image from 'next/image'
import { Authenticator } from '@aws-amplify/ui-react';

export default function AuthLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className='relative h-screen flex items-center justify-center'>
            <div>
                <div className='absolute z-0 top-0 left-0 right-0 w-full h-screen bg-black/60'></div>
                <Image 
                    priority
                    src="/login.jpg" 
                    alt="login background" 
                    width={1000} 
                    height={1000}
                    className='absolute -z-10 top-0 left-0 w-full h-full object-cover' 
                />
            </div>

            <div className='container '>
                {children}
            </div>
        </div>
    )
}