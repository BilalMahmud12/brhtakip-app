/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ApplicationArea } from "../API.ts";
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
export declare type ApplicationAreaUpdateFormInputValues = {
    isActive?: boolean;
    name?: string;
};
export declare type ApplicationAreaUpdateFormValidationValues = {
    isActive?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationAreaUpdateFormOverridesProps = {
    ApplicationAreaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationAreaUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationAreaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicationArea?: ApplicationArea;
    onSubmit?: (fields: ApplicationAreaUpdateFormInputValues) => ApplicationAreaUpdateFormInputValues;
    onSuccess?: (fields: ApplicationAreaUpdateFormInputValues) => void;
    onError?: (fields: ApplicationAreaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationAreaUpdateFormInputValues) => ApplicationAreaUpdateFormInputValues;
    onValidate?: ApplicationAreaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationAreaUpdateForm(props: ApplicationAreaUpdateFormProps): React.ReactElement;
