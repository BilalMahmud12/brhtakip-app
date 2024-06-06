'use client'
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useStore } from '@/stores/utils/useStore';
import { useDataModal } from '@/contexts/DataModalContext';
import RequestDataCards from './requestDataCards';
import ClientSelectForm from './clientSelectForm';
import CreateOrUpdateForm from './createOrUpdateForm';
import { SearchField, SelectField, Button } from '@aws-amplify/ui-react'
import Icon from '@/components/core/icon';
import { usePathname, useRouter } from 'next/navigation'
import * as Repo from '@/repository/index';
import type { Request, RequestStatus } from '@/API';
import { toast } from 'sonner';
import { statusMap } from '@/config';
import { Pagination, Button as UIButton } from "@nextui-org/react";

const SelectClientModalFooter = (
    props: {
        handleConfirm: () => void
        handleCancel?: () => void;
    }
) => {
    const {
        handleConfirm = () => {},
        handleCancel = () => { },
    } = props

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İptal Et</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleConfirm}
                    className='rounded-none bg-amber-500 text-gray-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>Devam Et</span>
                    </span>
                </Button>                
            </div>
        </div>
    )
}

const ModalCustomFooter = (
    props: {
        type: 'create' | 'update'
        handleCreate?: (data: any) => void;
        handleUpdate?: (data: any) => void;
        handleCancel?: () => void;
    }
) => {
    const {
        type,
        handleCreate = () => { },
        handleUpdate = () => { },
        handleCancel = () => { },
    } = props;

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={handleCancel}
                    className='rounded-none bg-transparent text-gray-800 px-6 font-bold'
                >
                    <span>İPTAL ET</span>
                </Button>

                <Button
                    variation="primary"
                    colorTheme="success"
                    size="small"
                    loadingText=""
                    onClick={type === 'create' ? handleCreate : handleUpdate}
                    className='rounded-none bg-amber-500 text-zinc-800 font-bold px-6'
                >
                    <span className='flex items-center space-x-2'>
                        <span>ONAYLA</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}


const RequestsView: React.FC = observer((props) => {
    const pathname = usePathname();
    const { requestStore, userStore } = useStore();
    const { userData } = userStore;

    const { showDataModal, hideDataModal } = useDataModal();
    const [currentPage, setCurrentPage] = React.useState(1);

    const requestStatus = (): string => {
        const status: string = statusMap[pathname.split('/').pop() as string];
        return status !== undefined ? status : 'PENDING_APPROVAL' as RequestStatus;
    };

    const handleCancelForm = () => {
        requestStore.resetFormValues()
        hideDataModal()
    }

    const handleCreateForm = () => {
        if (userData.isClient) {
            //
        } else {
            showDataModal(
                <div><span className='text-sm font-bold'>Müşteri Seç</span></div>,
                <ClientSelectForm />,
                <SelectClientModalFooter
                    handleConfirm={() => {
                        hideDataModal()
                        showDataModal(
                            <div><span className='text-base font-bold'>Talep Oluştur</span></div>,
                            <CreateOrUpdateForm
                                isCreate={true}
                            />,
                            <ModalCustomFooter
                                type='create'
                                handleCreate={handleCreateRequest}
                                handleCancel={handleCancelForm}
                            />
                        )
                    }} 
                    handleCancel={handleCancelForm} 
                />
            )
        }
    }

    const handleUpdateForm = (data: any) => {
        console.log('Edit', data)
        showDataModal(
            <div><span className='text-sm font-bold'>Talep Güncelle</span></div>,
            <CreateOrUpdateForm
                isCreate={false}
                request={data}  
            />,
            <ModalCustomFooter
                type='update'
                handleUpdate={handleUpdateRequest} 
                handleCancel={handleCancelForm} 
            />
        )
    }

    const handleCreateRequest = async () => {
        try {
            const createRequest = await Repo.RequestRepository.create(toJS(requestStore.getRequestFormValues))

            if (createRequest && createRequest.data) {
                requestStore.setRequests([])
                hideDataModal()
                toast.success(`${createRequest.data.createRequest.requestNumber} numaralı talep oluşturuldu.`);
                requestStore.setIsFetching(true)

                const newRequests = await Repo.RequestRepository.getRequestsByStatus(`${requestStatus()}`);

                const sortedRequests = (newRequests as unknown as Request[]).sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });

                requestStore.setRequests(sortedRequests)
                requestStore.resetFormValues()
                requestStore.setIsFetching(false)
            }
        } catch (error) {
            console.log('Error')
            alert(`Error while creating: ${error}`)
        }
    }

    const handleUpdateRequest = (data: any) => {
        console.log('Update Request', data)
    }

    const handleDelete = (data: any) => {
        console.log('Delete', data)
    }
    
    return (
        <>   
            <div className='mb-8 py-4'>
                <div className='px-6 py-3 bg-white shadow mb-4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>

                            {/* <SearchField
                            label="Search"
                            placeholder="Search here..."
                            size="small"
                            hasSearchButton={false}
                            hasSearchIcon={true}
                        /> */}

                            <SelectField
                                label="Seçilen Talepler Eylemleri"
                                size="small"
                                placeholder="Eylem Seçiniz ..."
                                labelHidden={true}
                                isDisabled={!requestStore.getSelectedRequests.length}
                            >
                                <option value="IN_DESIGN">Tasarıma Aktar</option>
                                <option value="IN_PRESS">Baskıya Aktar</option>
                                <option value="IN_APPLICATION">Uygulamaya Aktar</option>
                                <option value="COMPLETED">Tamamla</option>
                                <option value="CANCELLED" disabled>İpat Et</option>
                            </SelectField>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={handleCreateForm}
                                className='rounded-md bg-amber-500 text-gray-800 px-6 py-1.5 h-[35px]'
                            >
                                <span>Talep Oluştur</span>
                            </Button>

                            <Button
                                variation="primary"
                                colorTheme="success"
                                size="small"
                                loadingText=""
                                onClick={() => { }}
                                className='rounded-md bg-zinc-200 text-gray-800 px-6 py-1.5 h-[35px]'
                            >
                                <span>Ek Ürün Talep Oluştur</span>
                            </Button>
                        </div>
                    </div>
                </div>
                
                <RequestDataCards
                    data={requestStore.getAllRequests}
                    handleEdit={handleUpdateForm}
                />

                <div className='px-6 py-4 bg-white shadow'>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-6">
                            <UIButton
                                size="sm"
                                variant="flat"
                                color="secondary"
                                onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                            >
                                Onceki
                            </UIButton>
                            <Pagination
                                total={10}
                                color="secondary"
                                page={currentPage}
                                onChange={setCurrentPage}
                            />
                            <UIButton
                                size="sm"
                                variant="flat"
                                color="secondary"
                                onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                            >
                                Sonraki
                            </UIButton>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
});

export default RequestsView;