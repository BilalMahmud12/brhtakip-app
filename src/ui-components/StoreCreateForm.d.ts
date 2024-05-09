/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type StoreCreateFormInputValues = {};
export declare type StoreCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreCreateFormOverridesProps = {
    StoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type StoreCreateFormProps = React.PropsWithChildren<{
    overrides?: StoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onSuccess?: (fields: StoreCreateFormInputValues) => void;
    onError?: (fields: StoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onValidate?: StoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoreCreateForm(props: StoreCreateFormProps): React.ReactElement;
