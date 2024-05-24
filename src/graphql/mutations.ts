/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMaterial = /* GraphQL */ `mutation CreateMaterial(
  $input: CreateMaterialInput!
  $condition: ModelMaterialConditionInput
) {
  createMaterial(input: $input, condition: $condition) {
    id
    name
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
    name
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
    name
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
    first_name
    last_name
    email
    clientprofileID
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
    first_name
    last_name
    email
    clientprofileID
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
    first_name
    last_name
    email
    clientprofileID
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
    name
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Areas {
      items {
        id
        districtID
        name
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Areas {
      items {
        id
        districtID
        name
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Areas {
      items {
        id
        districtID
        name
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Districts {
      items {
        id
        cityID
        name
        Areas {
          items {
            id
            districtID
            name
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
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Districts {
      items {
        id
        cityID
        name
        Areas {
          items {
            id
            districtID
            name
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
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    Districts {
      items {
        id
        cityID
        name
        Areas {
          items {
            id
            districtID
            name
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
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
                request_number
                storeID
                status
                Brand {
                  id
                  clientprofileID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                request_details {
                  application_area
                  material
                  branded
                  quantity
                  width
                  height
                  design_note
                  __typename
                }
                Material {
                  id
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                requestBrandId
                requestProductId
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
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
            request_number
            storeID
            status
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  is_active
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              clientprofileID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            request_details {
              application_area
              material
              branded
              quantity
              width
              height
              design_note
              __typename
            }
            Material {
              id
              name
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            requestBrandId
            requestProductId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    UserProfiles {
      items {
        id
        first_name
        last_name
        email
        clientprofileID
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
            is_active
            name
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    UserProfiles {
      items {
        id
        first_name
        last_name
        email
        clientprofileID
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
            is_active
            name
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
    name
    UserProfiles {
      items {
        id
        first_name
        last_name
        email
        clientprofileID
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
            is_active
            name
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofileID
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
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
        request_number
        storeID
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        request_details {
          application_area
          material
          branded
          quantity
          width
          height
          design_note
          __typename
        }
        Material {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        requestBrandId
        requestProductId
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
        request_number
        storeID
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        request_details {
          application_area
          material
          branded
          quantity
          width
          height
          design_note
          __typename
        }
        Material {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        requestBrandId
        requestProductId
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
        request_number
        storeID
        status
        Brand {
          id
          Products {
            items {
              id
              brandID
              is_active
              name
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofileID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        request_details {
          application_area
          material
          branded
          quantity
          width
          height
          design_note
          __typename
        }
        Material {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        requestBrandId
        requestProductId
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
    is_active
    name
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
    is_active
    name
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
    is_active
    name
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
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    is_active
    name
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
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    is_active
    name
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
        is_active
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofileID
    is_active
    name
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
    request_number
    storeID
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    request_details {
      application_area
      material
      branded
      quantity
      width
      height
      design_note
      __typename
    }
    Material {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    requestBrandId
    requestProductId
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
    request_number
    storeID
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    request_details {
      application_area
      material
      branded
      quantity
      width
      height
      design_note
      __typename
    }
    Material {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    requestBrandId
    requestProductId
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
    request_number
    storeID
    status
    Brand {
      id
      Products {
        items {
          id
          brandID
          is_active
          name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofileID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      is_active
      name
      createdAt
      updatedAt
      __typename
    }
    request_details {
      application_area
      material
      branded
      quantity
      width
      height
      design_note
      __typename
    }
    Material {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestMaterialId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRequestMutationVariables,
  APITypes.DeleteRequestMutation
>;
