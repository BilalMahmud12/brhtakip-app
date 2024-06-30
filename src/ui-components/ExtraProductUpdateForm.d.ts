/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ExtraProduct } from "../API.ts";
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
export declare type ExtraProductUpdateFormInputValues = {
    isActive?: string;
    name?: string;
};
export declare type ExtraProductUpdateFormValidationValues = {
    isActive?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExtraProductUpdateFormOverridesProps = {
    ExtraProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExtraProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExtraProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    extraProduct?: ExtraProduct;
    onSubmit?: (fields: ExtraProductUpdateFormInputValues) => ExtraProductUpdateFormInputValues;
    onSuccess?: (fields: ExtraProductUpdateFormInputValues) => void;
    onError?: (fields: ExtraProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExtraProductUpdateFormInputValues) => ExtraProductUpdateFormInputValues;
    onValidate?: ExtraProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExtraProductUpdateForm(props: ExtraProductUpdateFormProps): React.ReactElement;
