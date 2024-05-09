/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMaterial = /* GraphQL */ `subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
  onCreateMaterial(filter: $filter) {
    id
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
    name
    Areas {
      items {
        id
        districtID
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
` as GeneratedSubscription<
  APITypes.OnCreateDistrictSubscriptionVariables,
  APITypes.OnCreateDistrictSubscription
>;
export const onUpdateDistrict = /* GraphQL */ `subscription OnUpdateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onUpdateDistrict(filter: $filter) {
    id
    cityID
    name
    Areas {
      items {
        id
        districtID
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
` as GeneratedSubscription<
  APITypes.OnUpdateDistrictSubscriptionVariables,
  APITypes.OnUpdateDistrictSubscription
>;
export const onDeleteDistrict = /* GraphQL */ `subscription OnDeleteDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onDeleteDistrict(filter: $filter) {
    id
    cityID
    name
    Areas {
      items {
        id
        districtID
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
` as GeneratedSubscription<
  APITypes.OnDeleteDistrictSubscriptionVariables,
  APITypes.OnDeleteDistrictSubscription
>;
export const onCreateCity = /* GraphQL */ `subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
  onCreateCity(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCitySubscriptionVariables,
  APITypes.OnDeleteCitySubscription
>;
export const onCreateClientProfil = /* GraphQL */ `subscription OnCreateClientProfil(
  $filter: ModelSubscriptionClientProfilFilterInput
) {
  onCreateClientProfil(filter: $filter) {
    id
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofilID
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
        request_number
        Brand {
          id
          Products {
            items {
              id
              brandID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofilID
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          createdAt
          updatedAt
          __typename
        }
        clientprofilID
        status
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestStoreId
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
` as GeneratedSubscription<
  APITypes.OnCreateClientProfilSubscriptionVariables,
  APITypes.OnCreateClientProfilSubscription
>;
export const onUpdateClientProfil = /* GraphQL */ `subscription OnUpdateClientProfil(
  $filter: ModelSubscriptionClientProfilFilterInput
) {
  onUpdateClientProfil(filter: $filter) {
    id
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofilID
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
        request_number
        Brand {
          id
          Products {
            items {
              id
              brandID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofilID
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          createdAt
          updatedAt
          __typename
        }
        clientprofilID
        status
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestStoreId
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientProfilSubscriptionVariables,
  APITypes.OnUpdateClientProfilSubscription
>;
export const onDeleteClientProfil = /* GraphQL */ `subscription OnDeleteClientProfil(
  $filter: ModelSubscriptionClientProfilFilterInput
) {
  onDeleteClientProfil(filter: $filter) {
    id
    Brands {
      items {
        id
        Products {
          items {
            id
            brandID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        clientprofilID
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
        request_number
        Brand {
          id
          Products {
            items {
              id
              brandID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          clientprofilID
          createdAt
          updatedAt
          __typename
        }
        Product {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        Store {
          id
          createdAt
          updatedAt
          __typename
        }
        clientprofilID
        status
        createdAt
        updatedAt
        requestBrandId
        requestProductId
        requestStoreId
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientProfilSubscriptionVariables,
  APITypes.OnDeleteClientProfilSubscription
>;
export const onCreateStore = /* GraphQL */ `subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
  onCreateStore(filter: $filter) {
    id
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofilID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofilID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    clientprofilID
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
    request_number
    Brand {
      id
      Products {
        items {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofilID
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      createdAt
      updatedAt
      __typename
    }
    clientprofilID
    status
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestStoreId
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
    request_number
    Brand {
      id
      Products {
        items {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofilID
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      createdAt
      updatedAt
      __typename
    }
    clientprofilID
    status
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestStoreId
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
    request_number
    Brand {
      id
      Products {
        items {
          id
          brandID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      clientprofilID
      createdAt
      updatedAt
      __typename
    }
    Product {
      id
      brandID
      createdAt
      updatedAt
      __typename
    }
    Store {
      id
      createdAt
      updatedAt
      __typename
    }
    clientprofilID
    status
    createdAt
    updatedAt
    requestBrandId
    requestProductId
    requestStoreId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRequestSubscriptionVariables,
  APITypes.OnDeleteRequestSubscription
>;
