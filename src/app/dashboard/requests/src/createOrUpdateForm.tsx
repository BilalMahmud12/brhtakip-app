import React from 'react';
import type { Request, RequestStatus } from '@/API';
import { Input, Label, Autocomplete } from '@aws-amplify/ui-react';
import { Tabs, Tab } from "@nextui-org/react"
 

interface CreateOrUpdateFormProps {
    isCreate?: boolean;
    request?: Request;
    onSubmit?: (data: Request) => void;
}

const statusOptions = [
    { id: 'PENDING_APPROAL', label: 'PENDING APPROAL' },
] 

const CreateOrUpdateForm: React.FC<CreateOrUpdateFormProps> = (props) => {
    const { 
        isCreate = false, 
        request = {} as Request, 
        //onSubmit = () => { }, 
    } = props;

    const {
        request_number,
        Brand,
        Product,
        Store,
        status,
    } = request as Request;

    return (
        <div>
            <form>
                <div className='mb-6'>
                    <div className='grid grid-cols-2 gap-8 mb-6'>
                        <div className='input-group'>
                            <Label htmlFor="brand_name" className='block text-xs font-medium mb-1.5'>Talep Numarası</Label>
                            <Input
                                id="request_number"
                                name="request_number"
                                defaultValue={request?.request_number as string}
                                variation="quiet"
                                className='custom-input'
                                style={{ padding: '0.5rem 1rem', color: '#374151' }}
                                isDisabled
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-8 mb-6'>
                        <div className='input-group'>
                            <Label htmlFor="status" className='block text-xs font-medium mb-1.5'>Talep Durumu</Label>
                            <Autocomplete
                                id="status"
                                label="Talep Durumu"
                                variation="quiet"
                                options={statusOptions}
                                className='custom-input'
                                defaultValue={status as RequestStatus}
                            />
                        </div>
                    </div>
                </div>
                

                {/* Form Tabs section */}
                <div className='bg-[#eeeff0] px-3 py-3  relative w-full'>
                    <Tabs 
                        variant='underlined'
                        color='default' 
                        aria-label="Tabs variants"
                        className='w-full'
                    >
                        <Tab key="brand" title={<div className='px-5 py-2 mb-2.5 font-medium'>Marka Bilgileri</div>}>
                            <div className='mx-3 px-6 py-6 space-y-6 bg-white rounded-lg shadow'>
                                <div className='grid grid-cols-2 gap-8 mb-6'>
                                    <div className='input-group'>
                                        <Label htmlFor="brand_name" className='block text-xs font-medium'>Marka</Label>
                                        <Input
                                            id="brand_name"
                                            name="brand_name"
                                            defaultValue={Brand?.name as string}
                                            variation="quiet"
                                            className='custom-input'
                                        />
                                    </div>

                                    <div className='input-group'>
                                        <Label htmlFor="product_name" className='block text-xs font-medium'>Ürün</Label>
                                        <Input
                                            id="product_name"
                                            name="product_name"
                                            defaultValue={Product?.name as string}
                                            variation="quiet"
                                            className='custom-input'
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </Tab>

                        <Tab key="store" title={<div className='px-5 py-2 mb-2.5 font-medium'>Mağaza Bilgileri</div>}>
                            <div className='mx-3 px-6 py-6 space-y-6 bg-white rounded-lg shadow'>
                                <div className='grid grid-cols-2 gap-8 mb-6'>
                                    <div className='input-group'>
                                        <Label htmlFor="store_name" className='block text-xs font-medium'>Mağaza</Label>
                                        <Input
                                            id="store_name"
                                            name="store_name"
                                            defaultValue={Store?.name as string}
                                            variation="quiet"
                                            className='custom-input'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab key="request" title={<div className='px-5 py-2 mb-2.5 font-medium'>Talep Detaiları</div>}>
                            <div className='mx-3 px-6 py-6 space-y-6 bg-white rounded-lg shadow'></div>
                        </Tab>
                    </Tabs>
                </div>
            </form>
        </div>
    );
}

export default CreateOrUpdateForm;