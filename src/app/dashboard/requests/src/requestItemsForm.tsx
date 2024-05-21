import { Label, Input, Autocomplete, SelectField } from '@aws-amplify/ui-react'
import React from 'react'

interface RequestItemsFormProps {
    brandsList: { id: string, label: string }[]
    productsList: { id: string, label: string }[]
    applicationAreasList: { id: string, label: string }[]
    materialsList: { id: string, label: string }[]
}

const RequestItemsForm: React.FC<RequestItemsFormProps> = (props) => {
    const {
        brandsList = [],
        productsList = [],
        applicationAreasList = [],
        materialsList = []
    } = props


    return (
        <>
            <div className='pt-6 pb-12 space-y-6'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='input-group'>
                        <Label htmlFor="brand_name" className='block text-xs font-medium mb-1.5'>Marka</Label>
                        <Autocomplete
                            id="brand_name"
                            label="Marka"
                            placeholder='Marka Seç'
                            variation="quiet"
                            options={brandsList}
                            className='custom-input'
                        />
                    </div>
                    <div className='input-group'>
                        <Label htmlFor="product_name" className='block text-xs font-medium mb-1.5'>Ürün</Label>
                        <Autocomplete
                            id="product_name"
                            label="Ürün"
                            placeholder='Ürün Seç'
                            variation="quiet"
                            options={productsList}
                            className='custom-input'
                        />
                    </div>

                    <div className='input-group'>
                        <Label htmlFor="application_area" className='block text-xs font-medium mb-1.5'>Uygulama Alanı</Label>
                        <Autocomplete
                            id="application_area"
                            label="Uygulama Alanı"
                            placeholder='Uygulama Alanı Seç'
                            variation="quiet"
                            options={applicationAreasList}
                            className='custom-input'
                        />
                    </div>
                    <div className='input-group'>
                        <Label htmlFor="material" className='block text-xs font-medium mb-1.5'>Malzeme</Label>
                        <Autocomplete
                            id="material"
                            label="Malzeme"
                            placeholder='Malzeme Seç'
                            variation="quiet"
                            options={materialsList}
                            className='custom-input'
                        />
                    </div>

                    <div className='input-group'>
                        <Label htmlFor="branded" className='block text-xs font-medium mb-1.5'>Markalı mı?</Label>
                        <Autocomplete
                            id="branded"
                            label="Markalı mı?"
                            placeholder='Cevap Seç'
                            variation="quiet"
                            options={[
                                { id: '1', label: 'Evet' },
                                { id: '0', label: 'Hayır' }
                            ]}
                            className='custom-input'
                        />
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-8 my-6'>

                    <div className='input-group'>
                        <Label htmlFor="quantity" className='block text-xs font-medium mb-1.5'>Miktar</Label>
                        <Input
                            id="quantity"
                            name="quantity"
                            variation="quiet"
                            className='custom-input'
                        />
                    </div>

                    <div className='input-group'>
                        <Label htmlFor="width" className='block text-xs font-medium mb-1.5'>Genişlik</Label>
                        <Input
                            id="width"
                            name="width"
                            variation="quiet"
                            className='custom-input'
                        />
                    </div>

                    <div className='input-group'>
                        <Label htmlFor="height" className='block text-xs font-medium mb-1.5'>Yükseklik</Label>
                        <Input
                            id="height"
                            name="height"
                            variation="quiet"
                            className='custom-input'
                        />
                    </div>

                    <div className='input-group col-span-3'>
                        <Label htmlFor="design_notes" className='block text-xs font-medium mb-1.5'>Tasarım Notu</Label>
                        <Input
                            id="design_notes"
                            name="design_notes"
                            variation="quiet"
                            className='custom-input'
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default RequestItemsForm