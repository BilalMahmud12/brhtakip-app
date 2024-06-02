import { makeObservable, extendObservable, action, observable } from 'mobx';
import { RootStore } from './RootStore';
import type { Product } from '@/API';

interface ProductStoreInitialState {
    products: Product[];
}

const initialState: ProductStoreInitialState = {
    products: []
};

export class ProductStore {
    products: Product[] = [];

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            setProducts: action,
            addProduct: action,
            removeProduct: action,
        });
        extendObservable(this, initialState);
    }

    initStore({ products }: ProductStoreInitialState) {
        this.setProducts(products);
    }

    setProducts(products: Product[]) {
        this.products = products;
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    removeProduct(productId: string) {
        this.setProducts(this.products.filter(product => product.id !== productId) || [])
    }

    get getProducts() {
        return this.products;
    }
};

