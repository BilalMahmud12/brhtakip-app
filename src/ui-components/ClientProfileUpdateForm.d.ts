/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ClientProfile } from "../API.ts";
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
export declare type ClientProfileUpdateFormInputValues = {
    isActive?: boolean;
    name?: string;
    rootUserId?: string;
    contactEmail?: string;
    contactPhone?: string;
    address?: string;
};
export declare type ClientProfileUpdateFormValidationValues = {
    isActive?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    rootUserId?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientProfileUpdateFormOverridesProps = {
    ClientProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    rootUserId?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clientProfile?: ClientProfile;
    onSubmit?: (fields: ClientProfileUpdateFormInputValues) => ClientProfileUpdateFormInputValues;
    onSuccess?: (fields: ClientProfileUpdateFormInputValues) => void;
    onError?: (fields: ClientProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientProfileUpdateFormInputValues) => ClientProfileUpdateFormInputValues;
    onValidate?: ClientProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientProfileUpdateForm(props: ClientProfileUpdateFormProps): React.ReactElement;
