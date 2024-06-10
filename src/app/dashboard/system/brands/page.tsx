'use client';
import * as Repo from '@/repository/index'
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import type { Brand } from '@/API';
import BrandsView from './src/brandView';
import { useStore } from '@/stores/utils/useStore';
import { getClientProfiles } from '@/repository/clientProfile.repository';
import { Console } from 'console';
import BrandsDataTable from './src/brandsDataTable';


const Brand: React.FC = observer((props) => {
    const { brandStore, clientProfileStore } = useStore();

    const handleDelete = async (data: any) => {
        try {
            const deleteBrand = await Repo.BrandRepository.softDelete(data.originalData.id);
            console.log('deleted brand', deleteBrand)

            const newBrand = await Repo.BrandRepository.getAllBrands();
            brandStore.setBrands(newBrand as unknown as Brand[]);

            console.log('new brand array', newBrand)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandsData = await Repo.BrandRepository.getAllBrands();
                brandStore.initStore({ brands: brandsData as unknown as Brand[] });
                console.log('brands', brandsData);
            } catch (error) {
                console.error('Failed to fetch brands', error);
            }
        };
        fetchData();
    }, []);

    // const getClientName = async (data: string) => {
    //     console.log('Coming Data', data);
    //     try {
    //         const clientProfiles = await Repo.ClientProfileRepository.getClientProfiles();
    //         const clientProfile = clientProfiles?.find(profile => profile.id === data);
    //         console.log('Get Client Name', clientProfile?.name);
    //         clientProfile?.name;
    //     } catch (error) {
    //         console.error('Failed to get client profiles', error);
    //     }
    // };

    return (
        <div>
            <title>Markalar - BRH Takip</title>

            <div className='px-6 py-3 bg-zinc-50 shadow mb-4'>
                <Breadcrumbs
                    items={[
                        {
                            href: '/dashboard',
                            label: 'Panel Girişi',
                        },
                        {
                            href: '/dashboard/system/brands',
                            label: 'Markalar',
                        }
                    ]}
                    className='text-sm font-medium'
                />
            </div>
            <BrandsView
                onDelete={handleDelete}
            // getClientName={getClientName}
            />
        </div>
    );
});

export default Brand;
