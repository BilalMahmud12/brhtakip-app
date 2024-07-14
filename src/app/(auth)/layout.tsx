'use client'
import Image from 'next/image'
import AuthCopyright from './src/authCopyright'

export default function AuthLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className='relative h-screen flex items-center justify-center'>
            <div className='container'>
                <div className='flex items-center justify-center'>
                    <div className='space-y-8 w-80'>
                        <div className='flex items-center justify-center'>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={200}
                                height={90}
                                className='cursor-pointer w-[200px] h-[90px]'
                                priority
                            />
                        </div>

                        <div>
                            {children}
                        </div>

                        <AuthCopyright />
                    </div>
                </div>
            </div>
        </div>
    )
}