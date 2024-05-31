import { makeObservable, extendObservable, action, observable, runInAction } from 'mobx';
import { softDelete } from '../repository/brand.repository';
import { RootStore } from './RootStore';
import type { Brand } from '@/API';
import * as Repo from '@/repository/index'

interface BrandStoreInitialState {
    brands: Brand[];
}

const initialState: BrandStoreInitialState = {
    brands: []
};

export class BrandStore {
    brands: Brand[] = [];

    brandForm = {
        name: '',
        clientprofileID: '',
        isActive: false
    };

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            brandForm: observable,
            setBrands: action,
            addBrand: action,
            deleteBrand: action,
            removeBrand: action,
            handleFormChange: action,
            resetFormValues: action,
        });
        extendObservable(this, initialState);
    }

    initStore({ brands }: BrandStoreInitialState) {
        this.setBrands(brands);
    }

    setBrands(brands: Brand[]) {
        this.brands = brands;
    }

    addBrand(brand: Brand) {
        this.brands.push(brand);
    }

    removeBrand(brandId: string) {
        this.setBrands(this.brands.filter(brand => brand.id !== brandId) || []);
    }

    async deleteBrand(brandId: string) {
        softDelete(brandId);
        const newBrands = await Repo.BrandRepository.getAllBrands();
        this.setBrands(newBrands as Brand[]);
        console.log('Brand deleted successfully');
    }

    setBrandFormValues(values: any) {
        this.brandForm = {
            ...this.brandForm,
            ...values,
        };
    }

    handleFormChange = (input: string, field: keyof typeof this.brandForm) => {
        switch (field) {
            case 'name':
                this.brandForm = {
                    ...this.brandForm,
                    name: input,
                }
                break;
            case 'isActive':
                this.brandForm = {
                    ...this.brandForm,
                    isActive: input === '1' || input === 'true',
                }
                break;
            default:
                this.brandForm = {
                    ...this.brandForm,
                    [field]: input,
                }
                break;
        }
    }

    resetFormValues = () => {
        this.brandForm = {
            name: '',
            clientprofileID: '',
            isActive: false
        };
    }

    get getBrands() {
        return this.brands;
    }

    get getBrandFormValues() {
        return this.brandForm;
    }
}
