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
export declare type ApplicationAreaCreateFormInputValues = {
    isActive?: boolean;
    name?: string;
};
export declare type ApplicationAreaCreateFormValidationValues = {
    isActive?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationAreaCreateFormOverridesProps = {
    ApplicationAreaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationAreaCreateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationAreaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApplicationAreaCreateFormInputValues) => ApplicationAreaCreateFormInputValues;
    onSuccess?: (fields: ApplicationAreaCreateFormInputValues) => void;
    onError?: (fields: ApplicationAreaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationAreaCreateFormInputValues) => ApplicationAreaCreateFormInputValues;
    onValidate?: ApplicationAreaCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationAreaCreateForm(props: ApplicationAreaCreateFormProps): React.ReactElement;
