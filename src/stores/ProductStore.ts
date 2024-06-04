import { makeObservable, extendObservable, action, observable } from 'mobx';
import { RootStore } from './RootStore';
import type { Product } from '@/API';

interface ProductStoreInitialState {
    products: Product[];
}

export interface ProductInput {
    name?: string;
    brandID?: string;
    isActive?: boolean;
}

const initialState: ProductStoreInitialState = {
    products: []
};



export class ProductStore {
    products: Product[] = [];

    productForm = {
        name: '',
        brandID: '',
        isActive: false,
    };

    constructor(private rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            productForm: observable,
            setProducts: action,
            addProduct: action,
            removeProduct: action,
            handleFormChange: action,
            resetFormValues: action,
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
        this.setProducts(this.products.filter(product => product.id !== productId) || []);
    }

    setProductFormValues(values: any) {
        this.productForm = {
            ...this.productForm,
            ...values,
        };
    }

    handleFormChange = (input: string, field: keyof typeof this.productForm) => {
        switch (field) {
            case 'name':
                this.productForm = {
                    ...this.productForm,
                    name: input,
                }
                break;
            case 'isActive':
                this.productForm = {
                    ...this.productForm,
                    isActive: input === '1' || input === 'true',
                }
                break;
            default:
                this.productForm = {
                    ...this.productForm,
                    [field]: input,
                }
                break;
        }
    }

    resetFormValues() {
        this.productForm = {
            name: '',
            brandID: '',
            isActive: false,
        };
    }

    get getAllProducts() {
        return this.products;
    }

    get getProductFormValues() {
        return this.productForm;
    }
}
