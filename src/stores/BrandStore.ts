import { makeObservable, extendObservable, action } from 'mobx';
import { RootStore } from './RootStore';
import type { Brand } from '@/API'

interface BrandStoreInitialState {
    brands: Brand[];
}

const initialState: BrandStoreInitialState = {
    brands: []
}

export class BrandStore {
    brands: Brand[] = [];

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            setBrands: action,
            addBrand: action,
            removeBrand: action
        });
        extendObservable(this, initialState);
    }

    initStore({ brands }: BrandStoreInitialState) {
        this.setBrands(brands);
    }

    setBrands(brands: Brand[]) {
        this.brands = brands;
    }

    get getBrands() {
        return this.brands;
    }

    addBrand(brand: Brand) {
        this.brands.push(brand);
    }

    removeBrand(brandId: string) {
        this.brands = this.brands.filter(brand => brand.id !== brandId);
    }
}

