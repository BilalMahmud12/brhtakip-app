import { makeObservable, extendObservable, action, observable } from 'mobx';
import { RootStore } from './RootStore';
import type { Brand } from '@/API';
interface BrandStoreInitialState {
    brands: Brand[];
}

interface BrandFormState {
    id?: string
    name?: string
    isActive?: boolean
    clientprofileID?: string
}

const initialState: BrandStoreInitialState = {
    brands: []
};

export class BrandStore {
    brands: Brand[] = [];

    brandForm: BrandFormState = {
        id: '',
        name: '',
        clientprofileID: '',
        isActive: false ?? ''
    };

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            brandForm: observable,
            setBrands: action,
            addBrand: action,
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
            case 'id':
                this.brandForm = {
                    ...this.brandForm,
                    id: input,
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
            isActive: false ?? ''
        };
    }

    get getBrands() {
        return this.brands;
    }

    get getBrandFormValues() {
        return this.brandForm;
    }
}
