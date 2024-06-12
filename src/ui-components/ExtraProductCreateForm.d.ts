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
export declare type ExtraProductCreateFormInputValues = {
    isActive?: string;
    name?: string;
    image?: string;
};
export declare type ExtraProductCreateFormValidationValues = {
    isActive?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExtraProductCreateFormOverridesProps = {
    ExtraProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExtraProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ExtraProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExtraProductCreateFormInputValues) => ExtraProductCreateFormInputValues;
    onSuccess?: (fields: ExtraProductCreateFormInputValues) => void;
    onError?: (fields: ExtraProductCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExtraProductCreateFormInputValues) => ExtraProductCreateFormInputValues;
    onValidate?: ExtraProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExtraProductCreateForm(props: ExtraProductCreateFormProps): React.ReactElement;
