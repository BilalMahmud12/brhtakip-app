/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExtraProduct = /* GraphQL */ `mutation CreateExtraProduct(
  $input: CreateExtraProductInput!
  $condition: ModelExtraProductConditionInput
) {
  createExtraProduct(input: $input, condition: $condition) {
    id
    isActive
    name
    images {
      type
      path
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExtraProductMutationVariables,
  APITypes.CreateExtraProductMutation
>;
export const updateExtraProduct = /* GraphQL */ `mutation UpdateExtraProduct(
  $input: UpdateExtraProductInput!
  $condition: ModelExtraProductConditionInput
) {
  updateExtraProduct(input: $input, condition: $condition) {
    id
    isActive
    name
    images {
      type
      path
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExtraProductMutationVariables,
  APITypes.UpdateExtraProductMutation
>;
export const deleteExtraProduct = /* GraphQL */ `mutation DeleteExtraProduct(
  $input: DeleteExtraProductInput!
  $condition: ModelExtraProductConditionInput
) {
  deleteExtraProduct(input: $input, condition: $condition) {
    id
    isActive
    name
    images {
      type
      path
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExtraProductMutationVariables,
  APITypes.DeleteExtraProductMutation
>;
export const createApplicationArea = /* GraphQL */ `mutation CreateApplicationArea(
  $input: CreateApplicationAreaInput!
  $condition: ModelApplicationAreaConditionInput
) {
  createApplicationArea(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApplicationAreaMutationVariables,
  APITypes.CreateApplicationAreaMutation
>;
export const updateApplicationArea = /* GraphQL */ `mutation UpdateApplicationArea(
  $input: UpdateApplicationAreaInput!
  $condition: ModelApplicationAreaConditionInput
) {
  updateApplicationArea(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApplicationAreaMutationVariables,
  APITypes.UpdateApplicationAreaMutation
>;
export const deleteApplicationArea = /* GraphQL */ `mutation DeleteApplicationArea(
  $input: DeleteApplicationAreaInput!
  $condition: ModelApplicationAreaConditionInput
) {
  deleteApplicationArea(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApplicationAreaMutationVariables,
  APITypes.DeleteApplicationAreaMutation
>;
export const createMaterial = /* GraphQL */ `mutation CreateMaterial(
  $input: CreateMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  createMaterial(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMaterialMutationVariables,
  APITypes.CreateMaterialMutation
>;
export const updateMaterial = /* GraphQL */ `mutation UpdateMaterial(
  $input: UpdateMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  updateMaterial(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMaterialMutationVariables,
  APITypes.UpdateMaterialMutation
>;
export const deleteMaterial = /* GraphQL */ `mutation DeleteMaterial(
  $input: DeleteMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  deleteMaterial(input: $input, condition: $condition) {
    id
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMaterialMutationVariables,
  APITypes.DeleteMaterialMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
    id
    cognitoID
    clientprofileID
    isActive
    firstName
    lastName
    email
    role
    permissions
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
    id
    cognitoID
    clientprofileID
    isActive
    firstName
    lastName
    email
    role
    permissions
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
    id
    cognitoID
    clientprofileID
    isActive
    firstName
    lastName
    email
    role
    permissions
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createArea = /* GraphQL */ `mutation CreateArea(
  $input: CreateAreaInput!
  $condition: ModelAreaConditionInput
) {
  createArea(input: $input, condition: $condition) {
    id
    districtID
    isActive
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAreaMutationVariables,
  APITypes.CreateAreaMutation
>;
export const updateArea = /* GraphQL */ `mutation UpdateArea(
  $input: UpdateAreaInput!
  $condition: ModelAreaConditionInput
) {
  updateArea(input: $input, condition: $condition) {
    id
    districtID
    isActive
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAreaMutationVariables,
  APITypes.UpdateAreaMutation
>;
export const deleteArea = /* GraphQL */ `mutation DeleteArea(
  $input: DeleteAreaInput!
  $condition: ModelAreaConditionInput
) {
  deleteArea(input: $input, condition: $condition) {
    id
    districtID
    isActive
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAreaMutationVariables,
  APITypes.DeleteAreaMutation
>;
export const createDistrict = /* GraphQL */ `mutation CreateDistrict(
  $input: CreateDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  createDistrict(input: $input, condition: $condition) {
    id
    cityID
    isActive
    Areas {
      items {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDistrictMutationVariables,
  APITypes.CreateDistrictMutation
>;
export const updateDistrict = /* GraphQL */ `mutation UpdateDistrict(
  $input: UpdateDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  updateDistrict(input: $input, condition: $condition) {
    id
    cityID
    isActive
    Areas {
      items {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDistrictMutationVariables,
  APITypes.UpdateDistrictMutation
>;
export const deleteDistrict = /* GraphQL */ `mutation DeleteDistrict(
  $input: DeleteDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  deleteDistrict(input: $input, condition: $condition) {
    id
    cityID
    isActive
    Areas {
      items {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDistrictMutationVariables,
  APITypes.DeleteDistrictMutation
>;
export const createCity = /* GraphQL */ `mutation CreateCity(
  $input: CreateCityInput!
  $condition: ModelCityConditionInput
) {
  createCity(input: $input, condition: $condition) {
    id
    isActive
    Districts {
      items {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCityMutationVariables,
  APITypes.CreateCityMutation
>;
export const updateCity = /* GraphQL */ `mutation UpdateCity(
  $input: UpdateCityInput!
  $condition: ModelCityConditionInput
) {
  updateCity(input: $input, condition: $condition) {
    id
    isActive
    Districts {
      items {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCityMutationVariables,
  APITypes.UpdateCityMutation
>;
export const deleteCity = /* GraphQL */ `mutation DeleteCity(
  $input: DeleteCityInput!
  $condition: ModelCityConditionInput
) {
  deleteCity(input: $input, condition: $condition) {
    id
    isActive
    Districts {
      items {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Stores {
      items {
        id
        cityID
        districtID
        areaID
        name
        address
        Requests {
          items {
            id
            clientprofileID
            storeID
            requestNumber
            ClientProfile {
              id
              isActive
              UserProfiles {
                items {
                  id
                  cognitoID
                  clientprofileID
                  isActive
                  firstName
                  lastName
                  email
                  role
                  permissions
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Brands {
                items {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              name
              rootUserId
              contactEmail
              contactPhone
              address
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Store {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            requestDetails {
              applicationArea
              material
              branded
              quantity
              width
              height
              designNote
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            ApplicationArea {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            Material {
              id
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            quantity
            width
            height
            branded
            designNote
            productionCost
            cargoBudget
            assemblyBudget
            monthlyFee
            isExtraProductRequest
            referenceImages {
              type
              path
              __typename
            }
            designImages {
              type
              path
              __typename
            }
            printImages {
              type
              path
              __typename
            }
            applicationImages {
              type
              path
              __typename
            }
            extraProducts {
              id
              name
              image
              quantity
              note
              __typename
            }
            passedRevision
            designRevisions {
              revision
              image
              by
              __typename
            }
            createdBy
            updatedBy
            createdAt
            updatedAt
            requestBrandId
            requestProductId
            requestApplicationAreaId
            requestMaterialId
            __typename
          }
          nextToken
          __typename
        }
        phones
        email
        notes
        created_by
        updated_by
        Area {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        District {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        City {
          id
          isActive
          Districts {
            items {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCityMutationVariables,
  APITypes.DeleteCityMutation
>;
export const createClientProfile = /* GraphQL */ `mutation CreateClientProfile(
  $input: CreateClientProfileInput!
  $condition: ModelClientProfileConditionInput
) {
  createClientProfile(input: $input, condition: $condition) {
    id
    isActive
    UserProfiles {
      items {
        id
        cognitoID
        clientprofileID
        isActive
        firstName
        lastName
        email
        role
        permissions
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    name
    rootUserId
    contactEmail
    contactPhone
    address
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientProfileMutationVariables,
  APITypes.CreateClientProfileMutation
>;
export const updateClientProfile = /* GraphQL */ `mutation UpdateClientProfile(
  $input: UpdateClientProfileInput!
  $condition: ModelClientProfileConditionInput
) {
  updateClientProfile(input: $input, condition: $condition) {
    id
    isActive
    UserProfiles {
      items {
        id
        cognitoID
        clientprofileID
        isActive
        firstName
        lastName
        email
        role
        permissions
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    name
    rootUserId
    contactEmail
    contactPhone
    address
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientProfileMutationVariables,
  APITypes.UpdateClientProfileMutation
>;
export const deleteClientProfile = /* GraphQL */ `mutation DeleteClientProfile(
  $input: DeleteClientProfileInput!
  $condition: ModelClientProfileConditionInput
) {
  deleteClientProfile(input: $input, condition: $condition) {
    id
    isActive
    UserProfiles {
      items {
        id
        cognitoID
        clientprofileID
        isActive
        firstName
        lastName
        email
        role
        permissions
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    name
    rootUserId
    contactEmail
    contactPhone
    address
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientProfileMutationVariables,
  APITypes.DeleteClientProfileMutation
>;
export const createStore = /* GraphQL */ `mutation CreateStore(
  $input: CreateStoreInput!
  $condition: ModelStoreConditionInput
) {
  createStore(input: $input, condition: $condition) {
    id
    cityID
    districtID
    areaID
    name
    address
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    phones
    email
    notes
    created_by
    updated_by
    Area {
      id
      districtID
      isActive
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    District {
      id
      cityID
      isActive
      Areas {
        items {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    City {
      id
      isActive
      Districts {
        items {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStoreMutationVariables,
  APITypes.CreateStoreMutation
>;
export const updateStore = /* GraphQL */ `mutation UpdateStore(
  $input: UpdateStoreInput!
  $condition: ModelStoreConditionInput
) {
  updateStore(input: $input, condition: $condition) {
    id
    cityID
    districtID
    areaID
    name
    address
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    phones
    email
    notes
    created_by
    updated_by
    Area {
      id
      districtID
      isActive
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    District {
      id
      cityID
      isActive
      Areas {
        items {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    City {
      id
      isActive
      Districts {
        items {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStoreMutationVariables,
  APITypes.UpdateStoreMutation
>;
export const deleteStore = /* GraphQL */ `mutation DeleteStore(
  $input: DeleteStoreInput!
  $condition: ModelStoreConditionInput
) {
  deleteStore(input: $input, condition: $condition) {
    id
    cityID
    districtID
    areaID
    name
    address
    Requests {
      items {
        id
        clientprofileID
        storeID
        requestNumber
        ClientProfile {
          id
          isActive
          UserProfiles {
            items {
              id
              cognitoID
              clientprofileID
              isActive
              firstName
              lastName
              email
              role
              permissions
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Brands {
            items {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          name
          rootUserId
          contactEmail
          contactPhone
          address
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        requestDetails {
          applicationArea
          material
          branded
          quantity
          width
          height
          designNote
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        ApplicationArea {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        Material {
          id
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        quantity
        width
        height
        branded
        designNote
        productionCost
        cargoBudget
        assemblyBudget
        monthlyFee
        isExtraProductRequest
        referenceImages {
          type
          path
          __typename
        }
        designImages {
          type
          path
          __typename
        }
        printImages {
          type
          path
          __typename
        }
        applicationImages {
          type
          path
          __typename
        }
        extraProducts {
          id
          name
          image
          quantity
          note
          __typename
        }
        passedRevision
        designRevisions {
          revision
          image
          by
          __typename
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestApplicationAreaId
        requestMaterialId
        __typename
      }
      nextToken
      __typename
    }
    phones
    email
    notes
    created_by
    updated_by
    Area {
      id
      districtID
      isActive
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    District {
      id
      cityID
      isActive
      Areas {
        items {
          id
          districtID
          isActive
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    City {
      id
      isActive
      Districts {
        items {
          id
          cityID
          isActive
          Areas {
            items {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          Stores {
            items {
              id
              cityID
              districtID
              areaID
              name
              address
              Requests {
                items {
                  id
                  clientprofileID
                  storeID
                  requestNumber
                  status
                  quantity
                  width
                  height
                  branded
                  designNote
                  productionCost
                  cargoBudget
                  assemblyBudget
                  monthlyFee
                  isExtraProductRequest
                  passedRevision
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  requestBrandId
                  requestProductId
                  requestApplicationAreaId
                  requestMaterialId
                  __typename
                }
                nextToken
                __typename
              }
              phones
              email
              notes
              created_by
              updated_by
              Area {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              District {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              City {
                id
                isActive
                Districts {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Stores {
        items {
          id
          cityID
          districtID
          areaID
          name
          address
          Requests {
            items {
              id
              clientprofileID
              storeID
              requestNumber
              ClientProfile {
                id
                isActive
                UserProfiles {
                  nextToken
                  __typename
                }
                Brands {
                  nextToken
                  __typename
                }
                Requests {
                  nextToken
                  __typename
                }
                name
                rootUserId
                contactEmail
                contactPhone
                address
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Store {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              status
              Brand {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              requestDetails {
                applicationArea
                material
                branded
                quantity
                width
                height
                designNote
                __typename
              }
              Product {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              ApplicationArea {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              Material {
                id
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              quantity
              width
              height
              branded
              designNote
              productionCost
              cargoBudget
              assemblyBudget
              monthlyFee
              isExtraProductRequest
              referenceImages {
                type
                path
                __typename
              }
              designImages {
                type
                path
                __typename
              }
              printImages {
                type
                path
                __typename
              }
              applicationImages {
                type
                path
                __typename
              }
              extraProducts {
                id
                name
                image
                quantity
                note
                __typename
              }
              passedRevision
              designRevisions {
                revision
                image
                by
                __typename
              }
              createdBy
              updatedBy
              createdAt
              updatedAt
              requestBrandId
              requestProductId
              requestApplicationAreaId
              requestMaterialId
              __typename
            }
            nextToken
            __typename
          }
          phones
          email
          notes
          created_by
          updated_by
          Area {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          District {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          City {
            id
            isActive
            Districts {
              items {
                id
                cityID
                isActive
                Areas {
                  nextToken
                  __typename
                }
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStoreMutationVariables,
  APITypes.DeleteStoreMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    brandID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    brandID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    brandID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createBrand = /* GraphQL */ `mutation CreateBrand(
  $input: CreateBrandInput!
  $condition: ModelBrandConditionInput
) {
  createBrand(input: $input, condition: $condition) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBrandMutationVariables,
  APITypes.CreateBrandMutation
>;
export const updateBrand = /* GraphQL */ `mutation UpdateBrand(
  $input: UpdateBrandInput!
  $condition: ModelBrandConditionInput
) {
  updateBrand(input: $input, condition: $condition) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBrandMutationVariables,
  APITypes.UpdateBrandMutation
>;
export const deleteBrand = /* GraphQL */ `mutation DeleteBrand(
  $input: DeleteBrandInput!
  $condition: ModelBrandConditionInput
) {
  deleteBrand(input: $input, condition: $condition) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    isActive
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBrandMutationVariables,
  APITypes.DeleteBrandMutation
>;
export const createRequest = /* GraphQL */ `mutation CreateRequest(
  $input: CreateRequestInput!
  $condition: ModelRequestConditionInput
) {
  createRequest(input: $input, condition: $condition) {
    id
    clientprofileID
    storeID
    requestNumber
    ClientProfile {
      id
      isActive
      UserProfiles {
        items {
          id
          cognitoID
          clientprofileID
          isActive
          firstName
          lastName
          email
          role
          permissions
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Brands {
        items {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      name
      rootUserId
      contactEmail
      contactPhone
      address
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      cityID
      districtID
      areaID
      name
      address
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      phones
      email
      notes
      created_by
      updated_by
      Area {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      District {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      City {
        id
        isActive
        Districts {
          items {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    requestDetails {
      applicationArea
      material
      branded
      quantity
      width
      height
      designNote
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    ApplicationArea {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Material {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    quantity
    width
    height
    branded
    designNote
    productionCost
    cargoBudget
    assemblyBudget
    monthlyFee
    isExtraProductRequest
    referenceImages {
      type
      path
      __typename
    }
    designImages {
      type
      path
      __typename
    }
    printImages {
      type
      path
      __typename
    }
    applicationImages {
      type
      path
      __typename
    }
    extraProducts {
      id
      name
      image
      quantity
      note
      __typename
    }
    passedRevision
    designRevisions {
      revision
      image
      by
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestApplicationAreaId
    requestMaterialId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRequestMutationVariables,
  APITypes.CreateRequestMutation
>;
export const updateRequest = /* GraphQL */ `mutation UpdateRequest(
  $input: UpdateRequestInput!
  $condition: ModelRequestConditionInput
) {
  updateRequest(input: $input, condition: $condition) {
    id
    clientprofileID
    storeID
    requestNumber
    ClientProfile {
      id
      isActive
      UserProfiles {
        items {
          id
          cognitoID
          clientprofileID
          isActive
          firstName
          lastName
          email
          role
          permissions
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Brands {
        items {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      name
      rootUserId
      contactEmail
      contactPhone
      address
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      cityID
      districtID
      areaID
      name
      address
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      phones
      email
      notes
      created_by
      updated_by
      Area {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      District {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      City {
        id
        isActive
        Districts {
          items {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    requestDetails {
      applicationArea
      material
      branded
      quantity
      width
      height
      designNote
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    ApplicationArea {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Material {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    quantity
    width
    height
    branded
    designNote
    productionCost
    cargoBudget
    assemblyBudget
    monthlyFee
    isExtraProductRequest
    referenceImages {
      type
      path
      __typename
    }
    designImages {
      type
      path
      __typename
    }
    printImages {
      type
      path
      __typename
    }
    applicationImages {
      type
      path
      __typename
    }
    extraProducts {
      id
      name
      image
      quantity
      note
      __typename
    }
    passedRevision
    designRevisions {
      revision
      image
      by
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestApplicationAreaId
    requestMaterialId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRequestMutationVariables,
  APITypes.UpdateRequestMutation
>;
export const deleteRequest = /* GraphQL */ `mutation DeleteRequest(
  $input: DeleteRequestInput!
  $condition: ModelRequestConditionInput
) {
  deleteRequest(input: $input, condition: $condition) {
    id
    clientprofileID
    storeID
    requestNumber
    ClientProfile {
      id
      isActive
      UserProfiles {
        items {
          id
          cognitoID
          clientprofileID
          isActive
          firstName
          lastName
          email
          role
          permissions
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Brands {
        items {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      name
      rootUserId
      contactEmail
      contactPhone
      address
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      cityID
      districtID
      areaID
      name
      address
      Requests {
        items {
          id
          clientprofileID
          storeID
          requestNumber
          ClientProfile {
            id
            isActive
            UserProfiles {
              items {
                id
                cognitoID
                clientprofileID
                isActive
                firstName
                lastName
                email
                role
                permissions
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Brands {
              items {
                id
                Products {
                  nextToken
                  __typename
                }
                clientprofileID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            name
            rootUserId
            contactEmail
            contactPhone
            address
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Store {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          status
          Brand {
            id
            Products {
              items {
                id
                brandID
                isActive
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            clientprofileID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          requestDetails {
            applicationArea
            material
            branded
            quantity
            width
            height
            designNote
            __typename
          }
          Product {
            id
            brandID
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          ApplicationArea {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          Material {
            id
            isActive
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          quantity
          width
          height
          branded
          designNote
          productionCost
          cargoBudget
          assemblyBudget
          monthlyFee
          isExtraProductRequest
          referenceImages {
            type
            path
            __typename
          }
          designImages {
            type
            path
            __typename
          }
          printImages {
            type
            path
            __typename
          }
          applicationImages {
            type
            path
            __typename
          }
          extraProducts {
            id
            name
            image
            quantity
            note
            __typename
          }
          passedRevision
          designRevisions {
            revision
            image
            by
            __typename
          }
          createdBy
          updatedBy
          createdAt
          updatedAt
          requestBrandId
          requestProductId
          requestApplicationAreaId
          requestMaterialId
          __typename
        }
        nextToken
        __typename
      }
      phones
      email
      notes
      created_by
      updated_by
      Area {
        id
        districtID
        isActive
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      District {
        id
        cityID
        isActive
        Areas {
          items {
            id
            districtID
            isActive
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      City {
        id
        isActive
        Districts {
          items {
            id
            cityID
            isActive
            Areas {
              items {
                id
                districtID
                isActive
                Stores {
                  nextToken
                  __typename
                }
                name
                createdBy
                updatedBy
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            Stores {
              items {
                id
                cityID
                districtID
                areaID
                name
                address
                Requests {
                  nextToken
                  __typename
                }
                phones
                email
                notes
                created_by
                updated_by
                Area {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                District {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                City {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            name
            createdBy
            updatedBy
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        Stores {
          items {
            id
            cityID
            districtID
            areaID
            name
            address
            Requests {
              items {
                id
                clientprofileID
                storeID
                requestNumber
                ClientProfile {
                  id
                  isActive
                  name
                  rootUserId
                  contactEmail
                  contactPhone
                  address
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Store {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                requestDetails {
                  applicationArea
                  material
                  branded
                  quantity
                  width
                  height
                  designNote
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                ApplicationArea {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                Material {
                  id
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                quantity
                width
                height
                branded
                designNote
                productionCost
                cargoBudget
                assemblyBudget
                monthlyFee
                isExtraProductRequest
                referenceImages {
                  type
                  path
                  __typename
                }
                designImages {
                  type
                  path
                  __typename
                }
                printImages {
                  type
                  path
                  __typename
                }
                applicationImages {
                  type
                  path
                  __typename
                }
                extraProducts {
                  id
                  name
                  image
                  quantity
                  note
                  __typename
                }
                passedRevision
                designRevisions {
                  revision
                  image
                  by
                  __typename
                }
                createdBy
                updatedBy
                createdAt
                updatedAt
                requestBrandId
                requestProductId
                requestApplicationAreaId
                requestMaterialId
                __typename
              }
              nextToken
              __typename
            }
            phones
            email
            notes
            created_by
            updated_by
            Area {
              id
              districtID
              isActive
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            District {
              id
              cityID
              isActive
              Areas {
                items {
                  id
                  districtID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            City {
              id
              isActive
              Districts {
                items {
                  id
                  cityID
                  isActive
                  name
                  createdBy
                  updatedBy
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              Stores {
                items {
                  id
                  cityID
                  districtID
                  areaID
                  name
                  address
                  phones
                  email
                  notes
                  created_by
                  updated_by
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              name
              createdBy
              updatedBy
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        name
        createdBy
        updatedBy
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
          createdBy
          updatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    requestDetails {
      applicationArea
      material
      branded
      quantity
      width
      height
      designNote
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    ApplicationArea {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    Material {
      id
      isActive
      name
      createdBy
      updatedBy
      createdAt
      updatedAt
      __typename
    }
    quantity
    width
    height
    branded
    designNote
    productionCost
    cargoBudget
    assemblyBudget
    monthlyFee
    isExtraProductRequest
    referenceImages {
      type
      path
      __typename
    }
    designImages {
      type
      path
      __typename
    }
    printImages {
      type
      path
      __typename
    }
    applicationImages {
      type
      path
      __typename
    }
    extraProducts {
      id
      name
      image
      quantity
      note
      __typename
    }
    passedRevision
    designRevisions {
      revision
      image
      by
      __typename
    }
    createdBy
    updatedBy
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestApplicationAreaId
    requestMaterialId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRequestMutationVariables,
  APITypes.DeleteRequestMutation
>;
