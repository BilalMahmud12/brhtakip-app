/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    name?: string;
};
export declare type ClientProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientProfileUpdateFormOverridesProps = {
    ClientProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
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
