/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Store } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoreUpdateFormInputValues = {};
export declare type StoreUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreUpdateFormOverridesProps = {
    StoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type StoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    store?: Store;
    onSubmit?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onSuccess?: (fields: StoreUpdateFormInputValues) => void;
    onError?: (fields: StoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onValidate?: StoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoreUpdateForm(props: StoreUpdateFormProps): React.ReactElement;
