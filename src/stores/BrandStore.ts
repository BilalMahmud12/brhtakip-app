import { makeObservable, extendObservable, action, observable } from 'mobx';
import { RootStore } from './RootStore';
import type { Brand } from '@/API';

interface BrandStoreInitialState {
    brands: Brand[];
}

const initialState: BrandStoreInitialState = {
    brands: []
};

export class BrandStore {
    brands: Brand[] = [];

    requestForm = {
        name: '',
        clientprofileID: '',
        isActive: false
    };

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            requestForm: observable,
            setBrands: action,
            addBrand: action,
            removeBrand: action,
            handleFormChange: action,
            resetFormValues: action
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
        this.brands = this.brands.filter(brand => brand.id !== brandId);
    }

    setBrandFormValues(values: any) {
        this.requestForm = {
            ...this.requestForm,
            ...values,
        };
    }

    handleFormChange = (input: string, field: keyof typeof this.requestForm) => {
        switch (field) {
            case 'name':
                this.requestForm = {
                    ...this.requestForm,
                    name: input,
                }
                break;
            case 'isActive':
                this.requestForm = {
                    ...this.requestForm,
                    isActive: input === '1' || input === 'true',
                }
                break;
            default:
                this.requestForm = {
                    ...this.requestForm,
                    [field]: input,
                }
                break;
        }
    }

    resetFormValues = () => {
        this.requestForm = {
            name: '',
            clientprofileID: '',
            isActive: false
        };
    }

    get getBrands() {
        return this.brands;
    }

    get getBrandFormValues() {
        return this.requestForm;
    }
}
