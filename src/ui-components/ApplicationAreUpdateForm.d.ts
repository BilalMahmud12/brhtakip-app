/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ApplicationAre } from "../API.ts";
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
export declare type ApplicationAreUpdateFormInputValues = {
    name?: string;
};
export declare type ApplicationAreUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationAreUpdateFormOverridesProps = {
    ApplicationAreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationAreUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationAreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicationAre?: ApplicationAre;
    onSubmit?: (fields: ApplicationAreUpdateFormInputValues) => ApplicationAreUpdateFormInputValues;
    onSuccess?: (fields: ApplicationAreUpdateFormInputValues) => void;
    onError?: (fields: ApplicationAreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationAreUpdateFormInputValues) => ApplicationAreUpdateFormInputValues;
    onValidate?: ApplicationAreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationAreUpdateForm(props: ApplicationAreUpdateFormProps): React.ReactElement;
