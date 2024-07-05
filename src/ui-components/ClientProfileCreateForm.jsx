/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createClientProfile } from "../graphql/mutations";
const client = generateClient();
export default function ClientProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isActive: false,
    name: "",
    rootUserId: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    createdBy: "",
    updatedBy: "",
  };
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [name, setName] = React.useState(initialValues.name);
  const [rootUserId, setRootUserId] = React.useState(initialValues.rootUserId);
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [updatedBy, setUpdatedBy] = React.useState(initialValues.updatedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIsActive(initialValues.isActive);
    setName(initialValues.name);
    setRootUserId(initialValues.rootUserId);
    setContactEmail(initialValues.contactEmail);
    setContactPhone(initialValues.contactPhone);
    setAddress(initialValues.address);
    setCreatedBy(initialValues.createdBy);
    setUpdatedBy(initialValues.updatedBy);
    setErrors({});
  };
  const validations = {
    isActive: [],
    name: [],
    rootUserId: [],
    contactEmail: [{ type: "Email" }],
    contactPhone: [],
    address: [],
    createdBy: [],
    updatedBy: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          isActive,
          name,
          rootUserId,
          contactEmail,
          contactPhone,
          address,
          createdBy,
          updatedBy,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createClientProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClientProfileCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isActive: value,
              name,
              rootUserId,
              contactEmail,
              contactPhone,
              address,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name: value,
              rootUserId,
              contactEmail,
              contactPhone,
              address,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Root user id"
        isRequired={false}
        isReadOnly={false}
        value={rootUserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId: value,
              contactEmail,
              contactPhone,
              address,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.rootUserId ?? value;
          }
          if (errors.rootUserId?.hasError) {
            runValidationTasks("rootUserId", value);
          }
          setRootUserId(value);
        }}
        onBlur={() => runValidationTasks("rootUserId", rootUserId)}
        errorMessage={errors.rootUserId?.errorMessage}
        hasError={errors.rootUserId?.hasError}
        {...getOverrideProps(overrides, "rootUserId")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId,
              contactEmail: value,
              contactPhone,
              address,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
      <TextField
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId,
              contactEmail,
              contactPhone: value,
              address,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.contactPhone ?? value;
          }
          if (errors.contactPhone?.hasError) {
            runValidationTasks("contactPhone", value);
          }
          setContactPhone(value);
        }}
        onBlur={() => runValidationTasks("contactPhone", contactPhone)}
        errorMessage={errors.contactPhone?.errorMessage}
        hasError={errors.contactPhone?.hasError}
        {...getOverrideProps(overrides, "contactPhone")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId,
              contactEmail,
              contactPhone,
              address: value,
              createdBy,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Created by"
        isRequired={false}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId,
              contactEmail,
              contactPhone,
              address,
              createdBy: value,
              updatedBy,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <TextField
        label="Updated by"
        isRequired={false}
        isReadOnly={false}
        value={updatedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isActive,
              name,
              rootUserId,
              contactEmail,
              contactPhone,
              address,
              createdBy,
              updatedBy: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedBy ?? value;
          }
          if (errors.updatedBy?.hasError) {
            runValidationTasks("updatedBy", value);
          }
          setUpdatedBy(value);
        }}
        onBlur={() => runValidationTasks("updatedBy", updatedBy)}
        errorMessage={errors.updatedBy?.errorMessage}
        hasError={errors.updatedBy?.hasError}
        {...getOverrideProps(overrides, "updatedBy")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
