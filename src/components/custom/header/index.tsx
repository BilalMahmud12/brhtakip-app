'use client'
import React from 'react'
import { signOut } from "aws-amplify/auth"
import { useRouter } from "next-nprogress-bar"
import { useAppSelector  } from '@/reduxStore/hooks';
import { RootState } from '@/reduxStore/store';
import { Button, Divider } from '@aws-amplify/ui-react'
import Logo from '../../core/logo'


const AppHeader: React.FC = () => {
    const router = useRouter()
    const pageTitle = useAppSelector((state: RootState) => state.global.currentPageTitle)

    const handleLogOut = async () => {
        await signOut()
        router.push('/login')
    }

    return (
        <React.Fragment>
            <header className='border-b border-zinc-200'>
                <div className='grid grid-cols-5 xl:grid-cols-6'>
                    <div className='flex items-center space-x-3 col-span-1'>
                        <div className='bg-zinc-100 w-full py-2 border-r border-gray-300'>
                            <Logo />
                        </div>
                    </div>
                    <div className='flex items-center col-span-2 px-4'>
                        <h1 className='text-lg font-medium'>{pageTitle}</h1>
                    </div>
                    <div className='hidden xl:block xl:col-span-1'></div>
                    <div></div>
                    <div className='flex items-center justify-end'>
                        <div className='mr-6 flex items-center space-x-4'>

                            <div className='text-zinc-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default AppHeader