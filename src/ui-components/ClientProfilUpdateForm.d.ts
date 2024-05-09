/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { ClientProfil } from "../API.ts";
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
export declare type ClientProfilUpdateFormInputValues = {};
export declare type ClientProfilUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientProfilUpdateFormOverridesProps = {
    ClientProfilUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ClientProfilUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientProfilUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clientProfil?: ClientProfil;
    onSubmit?: (fields: ClientProfilUpdateFormInputValues) => ClientProfilUpdateFormInputValues;
    onSuccess?: (fields: ClientProfilUpdateFormInputValues) => void;
    onError?: (fields: ClientProfilUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientProfilUpdateFormInputValues) => ClientProfilUpdateFormInputValues;
    onValidate?: ClientProfilUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientProfilUpdateForm(props: ClientProfilUpdateFormProps): React.ReactElement;
