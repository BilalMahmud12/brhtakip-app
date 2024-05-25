/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMaterial = /* GraphQL */ `query GetMaterial($id: ID!) {
  getMaterial(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMaterialQueryVariables,
  APITypes.GetMaterialQuery
>;
export const listMaterials = /* GraphQL */ `query ListMaterials(
  $filter: ModelMaterialFilterInput
  $limit: Int
  $nextToken: String
) {
  listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMaterialsQueryVariables,
  APITypes.ListMaterialsQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const userProfilesByClientprofileID = /* GraphQL */ `query UserProfilesByClientprofileID(
  $clientprofileID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  userProfilesByClientprofileID(
    clientprofileID: $clientprofileID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.UserProfilesByClientprofileIDQueryVariables,
  APITypes.UserProfilesByClientprofileIDQuery
>;
export const getArea = /* GraphQL */ `query GetArea($id: ID!) {
  getArea(id: $id) {
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
` as GeneratedQuery<APITypes.GetAreaQueryVariables, APITypes.GetAreaQuery>;
export const listAreas = /* GraphQL */ `query ListAreas(
  $filter: ModelAreaFilterInput
  $limit: Int
  $nextToken: String
) {
  listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                Products {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListAreasQueryVariables, APITypes.ListAreasQuery>;
export const areasByDistrictID = /* GraphQL */ `query AreasByDistrictID(
  $districtID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAreaFilterInput
  $limit: Int
  $nextToken: String
) {
  areasByDistrictID(
    districtID: $districtID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
                Products {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AreasByDistrictIDQueryVariables,
  APITypes.AreasByDistrictIDQuery
>;
export const getDistrict = /* GraphQL */ `query GetDistrict($id: ID!) {
  getDistrict(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDistrictQueryVariables,
  APITypes.GetDistrictQuery
>;
export const listDistricts = /* GraphQL */ `query ListDistricts(
  $filter: ModelDistrictFilterInput
  $limit: Int
  $nextToken: String
) {
  listDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                items {
                  id
                  request_number
                  storeID
                  status
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDistrictsQueryVariables,
  APITypes.ListDistrictsQuery
>;
export const districtsByCityID = /* GraphQL */ `query DistrictsByCityID(
  $cityID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDistrictFilterInput
  $limit: Int
  $nextToken: String
) {
  districtsByCityID(
    cityID: $cityID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
                items {
                  id
                  request_number
                  storeID
                  status
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DistrictsByCityIDQueryVariables,
  APITypes.DistrictsByCityIDQuery
>;
export const getCity = /* GraphQL */ `query GetCity($id: ID!) {
  getCity(id: $id) {
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
` as GeneratedQuery<APITypes.GetCityQueryVariables, APITypes.GetCityQuery>;
export const listCities = /* GraphQL */ `query ListCities(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCitiesQueryVariables,
  APITypes.ListCitiesQuery
>;
export const getClientProfile = /* GraphQL */ `query GetClientProfile($id: ID!) {
  getClientProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetClientProfileQueryVariables,
  APITypes.GetClientProfileQuery
>;
export const listClientProfiles = /* GraphQL */ `query ListClientProfiles(
  $filter: ModelClientProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientProfilesQueryVariables,
  APITypes.ListClientProfilesQuery
>;
export const getStore = /* GraphQL */ `query GetStore($id: ID!) {
  getStore(id: $id) {
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
` as GeneratedQuery<APITypes.GetStoreQueryVariables, APITypes.GetStoreQuery>;
export const listStores = /* GraphQL */ `query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListStoresQueryVariables,
  APITypes.ListStoresQuery
>;
export const storesByCityID = /* GraphQL */ `query StoresByCityID(
  $cityID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  storesByCityID(
    cityID: $cityID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.StoresByCityIDQueryVariables,
  APITypes.StoresByCityIDQuery
>;
export const storesByDistrictID = /* GraphQL */ `query StoresByDistrictID(
  $districtID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  storesByDistrictID(
    districtID: $districtID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.StoresByDistrictIDQueryVariables,
  APITypes.StoresByDistrictIDQuery
>;
export const storesByAreaID = /* GraphQL */ `query StoresByAreaID(
  $areaID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  storesByAreaID(
    areaID: $areaID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.StoresByAreaIDQueryVariables,
  APITypes.StoresByAreaIDQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    brandID
    is_active
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const productsByBrandID = /* GraphQL */ `query ProductsByBrandID(
  $brandID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByBrandID(
    brandID: $brandID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ProductsByBrandIDQueryVariables,
  APITypes.ProductsByBrandIDQuery
>;
export const getBrand = /* GraphQL */ `query GetBrand($id: ID!) {
  getBrand(id: $id) {
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
` as GeneratedQuery<APITypes.GetBrandQueryVariables, APITypes.GetBrandQuery>;
export const listBrands = /* GraphQL */ `query ListBrands(
  $filter: ModelBrandFilterInput
  $limit: Int
  $nextToken: String
) {
  listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListBrandsQueryVariables,
  APITypes.ListBrandsQuery
>;
export const brandsByClientprofileID = /* GraphQL */ `query BrandsByClientprofileID(
  $clientprofileID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBrandFilterInput
  $limit: Int
  $nextToken: String
) {
  brandsByClientprofileID(
    clientprofileID: $clientprofileID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.BrandsByClientprofileIDQueryVariables,
  APITypes.BrandsByClientprofileIDQuery
>;
export const getRequest = /* GraphQL */ `query GetRequest($id: ID!) {
  getRequest(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRequestQueryVariables,
  APITypes.GetRequestQuery
>;
export const listRequests = /* GraphQL */ `query ListRequests(
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListRequestsQueryVariables,
  APITypes.ListRequestsQuery
>;
export const requestsByStoreID = /* GraphQL */ `query RequestsByStoreID(
  $storeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  requestsByStoreID(
    storeID: $storeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.RequestsByStoreIDQueryVariables,
  APITypes.RequestsByStoreIDQuery
>;