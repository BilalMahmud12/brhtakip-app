/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateApplicationArea = /* GraphQL */ `subscription OnCreateApplicationArea(
  $filter: ModelSubscriptionApplicationAreaFilterInput
) {
  onCreateApplicationArea(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationAreaSubscriptionVariables,
  APITypes.OnCreateApplicationAreaSubscription
>;
export const onUpdateApplicationArea = /* GraphQL */ `subscription OnUpdateApplicationArea(
  $filter: ModelSubscriptionApplicationAreaFilterInput
) {
  onUpdateApplicationArea(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationAreaSubscriptionVariables,
  APITypes.OnUpdateApplicationAreaSubscription
>;
export const onDeleteApplicationArea = /* GraphQL */ `subscription OnDeleteApplicationArea(
  $filter: ModelSubscriptionApplicationAreaFilterInput
) {
  onDeleteApplicationArea(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationAreaSubscriptionVariables,
  APITypes.OnDeleteApplicationAreaSubscription
>;
export const onCreateMaterial = /* GraphQL */ `subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onCreateMaterial(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMaterialSubscriptionVariables,
  APITypes.OnCreateMaterialSubscription
>;
export const onUpdateMaterial = /* GraphQL */ `subscription OnUpdateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onUpdateMaterial(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMaterialSubscriptionVariables,
  APITypes.OnUpdateMaterialSubscription
>;
export const onDeleteMaterial = /* GraphQL */ `subscription OnDeleteMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onDeleteMaterial(filter: $filter) {
    id
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMaterialSubscriptionVariables,
  APITypes.OnDeleteMaterialSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
    id
    isActive
    clientprofileID
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
    id
    isActive
    clientprofileID
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
    id
    isActive
    clientprofileID
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateArea = /* GraphQL */ `subscription OnCreateArea($filter: ModelSubscriptionAreaFilterInput) {
  onCreateArea(filter: $filter) {
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAreaSubscriptionVariables,
  APITypes.OnCreateAreaSubscription
>;
export const onUpdateArea = /* GraphQL */ `subscription OnUpdateArea($filter: ModelSubscriptionAreaFilterInput) {
  onUpdateArea(filter: $filter) {
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAreaSubscriptionVariables,
  APITypes.OnUpdateAreaSubscription
>;
export const onDeleteArea = /* GraphQL */ `subscription OnDeleteArea($filter: ModelSubscriptionAreaFilterInput) {
  onDeleteArea(filter: $filter) {
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAreaSubscriptionVariables,
  APITypes.OnDeleteAreaSubscription
>;
export const onCreateDistrict = /* GraphQL */ `subscription OnCreateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onCreateDistrict(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDistrictSubscriptionVariables,
  APITypes.OnCreateDistrictSubscription
>;
export const onUpdateDistrict = /* GraphQL */ `subscription OnUpdateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onUpdateDistrict(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDistrictSubscriptionVariables,
  APITypes.OnUpdateDistrictSubscription
>;
export const onDeleteDistrict = /* GraphQL */ `subscription OnDeleteDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onDeleteDistrict(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDistrictSubscriptionVariables,
  APITypes.OnDeleteDistrictSubscription
>;
export const onCreateCity = /* GraphQL */ `subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
  onCreateCity(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCitySubscriptionVariables,
  APITypes.OnCreateCitySubscription
>;
export const onUpdateCity = /* GraphQL */ `subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
  onUpdateCity(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCitySubscriptionVariables,
  APITypes.OnUpdateCitySubscription
>;
export const onDeleteCity = /* GraphQL */ `subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
  onDeleteCity(filter: $filter) {
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
                Brand {
                  id
                  clientprofileID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                Product {
                  id
                  brandID
                  isActive
                  name
                  createdAt
                  updatedAt
                  __typename
                }
                status
                Material {
                  id
                  isActive
                  name
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
            Brand {
              id
              Products {
                items {
                  id
                  brandID
                  isActive
                  name
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
              createdAt
              updatedAt
              __typename
            }
            Product {
              id
              brandID
              isActive
              name
              createdAt
              updatedAt
              __typename
            }
            status
            Material {
              id
              isActive
              name
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
    name
    createdBy
    updatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCitySubscriptionVariables,
  APITypes.OnDeleteCitySubscription
>;
export const onCreateClientProfile = /* GraphQL */ `subscription OnCreateClientProfile(
  $filter: ModelSubscriptionClientProfileFilterInput
) {
  onCreateClientProfile(filter: $filter) {
    id
    isActive
    UserProfiles {
      items {
        id
        isActive
        clientprofileID
        firstName
        lastName
        email
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClientProfileSubscriptionVariables,
  APITypes.OnCreateClientProfileSubscription
>;
export const onUpdateClientProfile = /* GraphQL */ `subscription OnUpdateClientProfile(
  $filter: ModelSubscriptionClientProfileFilterInput
) {
  onUpdateClientProfile(filter: $filter) {
    id
    isActive
    UserProfiles {
      items {
        id
        isActive
        clientprofileID
        firstName
        lastName
        email
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClientProfileSubscriptionVariables,
  APITypes.OnUpdateClientProfileSubscription
>;
export const onDeleteClientProfile = /* GraphQL */ `subscription OnDeleteClientProfile(
  $filter: ModelSubscriptionClientProfileFilterInput
) {
  onDeleteClientProfile(filter: $filter) {
    id
    isActive
    UserProfiles {
      items {
        id
        isActive
        clientprofileID
        firstName
        lastName
        email
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClientProfileSubscriptionVariables,
  APITypes.OnDeleteClientProfileSubscription
>;
export const onCreateStore = /* GraphQL */ `subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
  onCreateStore(filter: $filter) {
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
` as GeneratedSubscription<
  APITypes.OnCreateStoreSubscriptionVariables,
  APITypes.OnCreateStoreSubscription
>;
export const onUpdateStore = /* GraphQL */ `subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
  onUpdateStore(filter: $filter) {
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
` as GeneratedSubscription<
  APITypes.OnUpdateStoreSubscriptionVariables,
  APITypes.OnUpdateStoreSubscription
>;
export const onDeleteStore = /* GraphQL */ `subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
  onDeleteStore(filter: $filter) {
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
        Brand {
          id
          Products {
            items {
              id
              brandID
              isActive
              name
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
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          isActive
          name
          createdAt
          updatedAt
          __typename
        }
        status
        Material {
          id
          isActive
          name
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
` as GeneratedSubscription<
  APITypes.OnDeleteStoreSubscriptionVariables,
  APITypes.OnDeleteStoreSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    brandID
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    brandID
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    brandID
    isActive
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateBrand = /* GraphQL */ `subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
  onCreateBrand(filter: $filter) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBrandSubscriptionVariables,
  APITypes.OnCreateBrandSubscription
>;
export const onUpdateBrand = /* GraphQL */ `subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
  onUpdateBrand(filter: $filter) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBrandSubscriptionVariables,
  APITypes.OnUpdateBrandSubscription
>;
export const onDeleteBrand = /* GraphQL */ `subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
  onDeleteBrand(filter: $filter) {
    id
    Products {
      items {
        id
        brandID
        isActive
        name
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBrandSubscriptionVariables,
  APITypes.OnDeleteBrandSubscription
>;
export const onCreateRequest = /* GraphQL */ `subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
  onCreateRequest(filter: $filter) {
    id
    clientprofileID
    storeID
    requestNumber
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
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
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdAt
      updatedAt
      __typename
    }
    status
    Material {
      id
      isActive
      name
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
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestMaterialId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRequestSubscriptionVariables,
  APITypes.OnCreateRequestSubscription
>;
export const onUpdateRequest = /* GraphQL */ `subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
  onUpdateRequest(filter: $filter) {
    id
    clientprofileID
    storeID
    requestNumber
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
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
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdAt
      updatedAt
      __typename
    }
    status
    Material {
      id
      isActive
      name
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
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestMaterialId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRequestSubscriptionVariables,
  APITypes.OnUpdateRequestSubscription
>;
export const onDeleteRequest = /* GraphQL */ `subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
  onDeleteRequest(filter: $filter) {
    id
    clientprofileID
    storeID
    requestNumber
    Brand {
      id
      Products {
        items {
          id
          brandID
          isActive
          name
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
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      isActive
      name
      createdAt
      updatedAt
      __typename
    }
    status
    Material {
      id
      isActive
      name
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
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestMaterialId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRequestSubscriptionVariables,
  APITypes.OnDeleteRequestSubscription
>;
