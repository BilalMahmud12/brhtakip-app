'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/stores/utils/useStore';
import { observer } from 'mobx-react';
import { Breadcrumbs, Button } from '@aws-amplify/ui-react'
import CreateOrUpdateForm from '../src/createOrUpdateForm';
import { generateRequestNumber } from '@/utils/helpers';
import * as Repo from '@/repository/index'
import { useRouter } from 'next/navigation'
import { toJS } from 'mobx'


const CreateRequest: React.FC = observer(() => {
    const router = useRouter()
    const { requestStore } = useStore();

    useEffect(() => {
        console.log('request form', requestStore.getRequestFormValues)
        requestStore.handleFormChange(generateRequestNumber(), 'requestNumber')
    }, [])

    async function handleCreateForm() {
        try {
            const createRequest = await Repo.RequestRepository.create(toJS(requestStore.getRequestFormValues))

            if (createRequest && createRequest.data) {
                router.replace('/dashboard/requests')
                requestStore.resetFormValues()
            }
        } catch (error) {
            console.log('Error')
            alert(`Error while creating: ${error}`)
        }   
    }

    return (
        <div>
            <title>Talepler Oluştur - BRH Takip</title>

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/requests',
                            label: 'Talepler',
                        },
                        {
                            label: 'Talep Oluştur',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>

            <div className='mt-1.5 shadow bg-white py-6'>
                <div className='px-6 mb-3 flex items-center justify-between'>
                    <div>
                        <div className=''>
                            <h2 className='text-2xl font-medium'>Talep Oluştur</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center space-x-2'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={handleCreateForm}
                                className='rounded-none bg-amber-500 text-gray-800 px-6'
                            >
                                <span>Talep Oluştur</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='my-2 pt-5' />

                <div className='mt-8 px-8 py-8 m-6 shadow bg-neutral-100'>
                    <CreateOrUpdateForm
                        isCreate={true}
                    />
                </div>

            </div>
        </div>
    )
})

export default CreateRequest