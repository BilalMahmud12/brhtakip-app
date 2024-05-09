/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MaterialCreateFormInputValues = {
    name?: string;
};
export declare type MaterialCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialCreateFormOverridesProps = {
    MaterialCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaterialCreateFormProps = React.PropsWithChildren<{
    overrides?: MaterialCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MaterialCreateFormInputValues) => MaterialCreateFormInputValues;
    onSuccess?: (fields: MaterialCreateFormInputValues) => void;
    onError?: (fields: MaterialCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MaterialCreateFormInputValues) => MaterialCreateFormInputValues;
    onValidate?: MaterialCreateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialCreateForm(props: MaterialCreateFormProps): React.ReactElement;
