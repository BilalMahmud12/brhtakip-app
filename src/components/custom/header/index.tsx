'use client'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useRouter } from "next/navigation"
import { signOut } from "aws-amplify/auth"
import { Button, Divider } from '@aws-amplify/ui-react'
import Logo from './src/logo'
import { useStore } from '@/stores/utils/useStore'



const AppHeader: React.FC = observer(() => {
    const store = useStore()
    const router = useRouter()

    const handleLogOut = async () => {
        await signOut()
        router.push("/")
    }

    return (
        <React.Fragment>
            <header className='border-b border-zinc-200'>
                <div className='grid grid-cols-5 xl:grid-cols-6'>
                    <div className='flex items-center space-x-3 col-span-1'>
                        <Logo />
                    </div>
                    <div className='flex items-center col-span-2 px-4'>
                        <h1 className='text-lg font-medium'>{store.utilityStore.getCurrentPageTitle}</h1>
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

                            <Divider orientation="vertical" size='small' borderColor={'#777777'} height={'25px'} />

                            <Button
                                onClick={handleLogOut}
                                size="small"
                                color={'gray'}
                                fontWeight={'normal'}
                                fontSize={14}
                                className=' '
                            >
                                <div className='flex items-center space-x-1'>
                                    <span className='block'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                        </svg>
                                    </span>
                                    <span className='block '>Çıkış</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
})

export default AppHeader