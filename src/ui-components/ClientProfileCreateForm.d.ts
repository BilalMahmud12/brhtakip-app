/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ClientProfileCreateFormInputValues = {
    isActive?: boolean;
    name?: string;
    rootUserId?: string;
    contactEmail?: string;
    contactPhone?: string;
    address?: string;
};
export declare type ClientProfileCreateFormValidationValues = {
    isActive?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    rootUserId?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientProfileCreateFormOverridesProps = {
    ClientProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    rootUserId?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientProfileCreateFormInputValues) => ClientProfileCreateFormInputValues;
    onSuccess?: (fields: ClientProfileCreateFormInputValues) => void;
    onError?: (fields: ClientProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientProfileCreateFormInputValues) => ClientProfileCreateFormInputValues;
    onValidate?: ClientProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientProfileCreateForm(props: ClientProfileCreateFormProps): React.ReactElement;
