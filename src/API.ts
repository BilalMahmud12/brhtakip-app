/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMaterialInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelMaterialConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelMaterialConditionInput | null > | null,
  or?: Array< ModelMaterialConditionInput | null > | null,
  not?: ModelMaterialConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Material = {
  __typename: "Material",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMaterialInput = {
  id: string,
  name?: string | null,
};

export type DeleteMaterialInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserProfileInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateAreaInput = {
  id?: string | null,
  districtID: string,
};

export type ModelAreaConditionInput = {
  districtID?: ModelIDInput | null,
  and?: Array< ModelAreaConditionInput | null > | null,
  or?: Array< ModelAreaConditionInput | null > | null,
  not?: ModelAreaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Area = {
  __typename: "Area",
  id: string,
  districtID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAreaInput = {
  id: string,
  districtID?: string | null,
};

export type DeleteAreaInput = {
  id: string,
};

export type CreateDistrictInput = {
  id?: string | null,
  cityID: string,
  name?: string | null,
};

export type ModelDistrictConditionInput = {
  cityID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDistrictConditionInput | null > | null,
  or?: Array< ModelDistrictConditionInput | null > | null,
  not?: ModelDistrictConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type District = {
  __typename: "District",
  id: string,
  cityID: string,
  name?: string | null,
  Areas?: ModelAreaConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAreaConnection = {
  __typename: "ModelAreaConnection",
  items:  Array<Area | null >,
  nextToken?: string | null,
};

export type UpdateDistrictInput = {
  id: string,
  cityID?: string | null,
  name?: string | null,
};

export type DeleteDistrictInput = {
  id: string,
};

export type CreateCityInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type City = {
  __typename: "City",
  id: string,
  name?: string | null,
  Districts?: ModelDistrictConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDistrictConnection = {
  __typename: "ModelDistrictConnection",
  items:  Array<District | null >,
  nextToken?: string | null,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
};

export type DeleteCityInput = {
  id: string,
};

export type CreateClientProfilInput = {
  id?: string | null,
};

export type ModelClientProfilConditionInput = {
  and?: Array< ModelClientProfilConditionInput | null > | null,
  or?: Array< ModelClientProfilConditionInput | null > | null,
  not?: ModelClientProfilConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ClientProfil = {
  __typename: "ClientProfil",
  id: string,
  Brands?: ModelBrandConnection | null,
  Requests?: ModelRequestConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  name: string,
  Products?: ModelProductConnection | null,
  clientprofilID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  brandID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelRequestConnection = {
  __typename: "ModelRequestConnection",
  items:  Array<Request | null >,
  nextToken?: string | null,
};

export type Request = {
  __typename: "Request",
  id: string,
  request_number?: string | null,
  Brand?: Brand | null,
  Product?: Product | null,
  Store?: Store | null,
  clientprofilID: string,
  status?: RequestStatus | null,
  createdAt: string,
  updatedAt: string,
  requestBrandId?: string | null,
  requestProductId?: string | null,
  requestStoreId?: string | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  cityID: string,
  districtID: string,
  areaID: string,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum RequestStatus {
  PENDING_APPROAL = "PENDING_APPROAL",
  WAITING_DESIGN = "WAITING_DESIGN",
  WAITING_PRESS = "WAITING_PRESS",
  COMPLETE = "COMPLETE",
  CANCELLED = "CANCELLED",
}


export type UpdateClientProfilInput = {
  id: string,
};

export type DeleteClientProfilInput = {
  id: string,
};

export type CreateStoreInput = {
  id?: string | null,
};

export type ModelStoreConditionInput = {
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateStoreInput = {
  id: string,
};

export type DeleteStoreInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  brandID: string,
};

export type ModelProductConditionInput = {
  brandID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProductInput = {
  id: string,
  brandID?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateBrandInput = {
  id?: string | null,
  clientprofilID: string,
};

export type ModelBrandConditionInput = {
  clientprofilID?: ModelIDInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBrandInput = {
  id: string,
  clientprofilID?: string | null,
};

export type DeleteBrandInput = {
  id: string,
};

export type CreateRequestInput = {
  id?: string | null,
  request_number?: string | null,
  clientprofilID: string,
  status?: RequestStatus | null,
  requestBrandId?: string | null,
  requestProductId?: string | null,
  requestStoreId?: string | null,
};

export type ModelRequestConditionInput = {
  request_number?: ModelStringInput | null,
  clientprofilID?: ModelIDInput | null,
  status?: ModelRequestStatusInput | null,
  and?: Array< ModelRequestConditionInput | null > | null,
  or?: Array< ModelRequestConditionInput | null > | null,
  not?: ModelRequestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  requestBrandId?: ModelIDInput | null,
  requestProductId?: ModelIDInput | null,
  requestStoreId?: ModelIDInput | null,
};

export type ModelRequestStatusInput = {
  eq?: RequestStatus | null,
  ne?: RequestStatus | null,
};

export type UpdateRequestInput = {
  id: string,
  request_number?: string | null,
  clientprofilID?: string | null,
  status?: RequestStatus | null,
  requestBrandId?: string | null,
  requestProductId?: string | null,
  requestStoreId?: string | null,
};

export type DeleteRequestInput = {
  id: string,
};

export type ModelMaterialFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaterialFilterInput | null > | null,
  or?: Array< ModelMaterialFilterInput | null > | null,
  not?: ModelMaterialFilterInput | null,
};

export type ModelMaterialConnection = {
  __typename: "ModelMaterialConnection",
  items:  Array<Material | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelAreaFilterInput = {
  id?: ModelIDInput | null,
  districtID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAreaFilterInput | null > | null,
  or?: Array< ModelAreaFilterInput | null > | null,
  not?: ModelAreaFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDistrictFilterInput = {
  id?: ModelIDInput | null,
  cityID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDistrictFilterInput | null > | null,
  or?: Array< ModelDistrictFilterInput | null > | null,
  not?: ModelDistrictFilterInput | null,
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection",
  items:  Array<City | null >,
  nextToken?: string | null,
};

export type ModelClientProfilFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClientProfilFilterInput | null > | null,
  or?: Array< ModelClientProfilFilterInput | null > | null,
  not?: ModelClientProfilFilterInput | null,
};

export type ModelClientProfilConnection = {
  __typename: "ModelClientProfilConnection",
  items:  Array<ClientProfil | null >,
  nextToken?: string | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  brandID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  clientprofilID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
};

export type ModelRequestFilterInput = {
  id?: ModelIDInput | null,
  request_number?: ModelStringInput | null,
  clientprofilID?: ModelIDInput | null,
  status?: ModelRequestStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRequestFilterInput | null > | null,
  or?: Array< ModelRequestFilterInput | null > | null,
  not?: ModelRequestFilterInput | null,
  requestBrandId?: ModelIDInput | null,
  requestProductId?: ModelIDInput | null,
  requestStoreId?: ModelIDInput | null,
};

export type ModelSubscriptionMaterialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMaterialFilterInput | null > | null,
  or?: Array< ModelSubscriptionMaterialFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionAreaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  districtID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAreaFilterInput | null > | null,
  or?: Array< ModelSubscriptionAreaFilterInput | null > | null,
};

export type ModelSubscriptionDistrictFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cityID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDistrictFilterInput | null > | null,
  or?: Array< ModelSubscriptionDistrictFilterInput | null > | null,
};

export type ModelSubscriptionCityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCityFilterInput | null > | null,
  or?: Array< ModelSubscriptionCityFilterInput | null > | null,
};

export type ModelSubscriptionClientProfilFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientProfilFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientProfilFilterInput | null > | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  brandID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionBrandFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientprofilID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBrandFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandFilterInput | null > | null,
};

export type ModelSubscriptionRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  request_number?: ModelSubscriptionStringInput | null,
  clientprofilID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionRequestFilterInput | null > | null,
  requestBrandId?: ModelSubscriptionIDInput | null,
  requestProductId?: ModelSubscriptionIDInput | null,
  requestStoreId?: ModelSubscriptionIDInput | null,
};

export type CreateMaterialMutationVariables = {
  input: CreateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type CreateMaterialMutation = {
  createMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMaterialMutationVariables = {
  input: UpdateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type UpdateMaterialMutation = {
  updateMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMaterialMutationVariables = {
  input: DeleteMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type DeleteMaterialMutation = {
  deleteMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAreaMutationVariables = {
  input: CreateAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type CreateAreaMutation = {
  createArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAreaMutationVariables = {
  input: UpdateAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type UpdateAreaMutation = {
  updateArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAreaMutationVariables = {
  input: DeleteAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type DeleteAreaMutation = {
  deleteArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDistrictMutationVariables = {
  input: CreateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type CreateDistrictMutation = {
  createDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDistrictMutationVariables = {
  input: UpdateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type UpdateDistrictMutation = {
  updateDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDistrictMutationVariables = {
  input: DeleteDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type DeleteDistrictMutation = {
  deleteDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientProfilMutationVariables = {
  input: CreateClientProfilInput,
  condition?: ModelClientProfilConditionInput | null,
};

export type CreateClientProfilMutation = {
  createClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientProfilMutationVariables = {
  input: UpdateClientProfilInput,
  condition?: ModelClientProfilConditionInput | null,
};

export type UpdateClientProfilMutation = {
  updateClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientProfilMutationVariables = {
  input: DeleteClientProfilInput,
  condition?: ModelClientProfilConditionInput | null,
};

export type DeleteClientProfilMutation = {
  deleteClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBrandMutationVariables = {
  input: CreateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type CreateBrandMutation = {
  createBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBrandMutationVariables = {
  input: UpdateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type UpdateBrandMutation = {
  updateBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBrandMutationVariables = {
  input: DeleteBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type DeleteBrandMutation = {
  deleteBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRequestMutationVariables = {
  input: CreateRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type CreateRequestMutation = {
  createRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type UpdateRequestMutationVariables = {
  input: UpdateRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type UpdateRequestMutation = {
  updateRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type DeleteRequestMutationVariables = {
  input: DeleteRequestInput,
  condition?: ModelRequestConditionInput | null,
};

export type DeleteRequestMutation = {
  deleteRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type GetMaterialQueryVariables = {
  id: string,
};

export type GetMaterialQuery = {
  getMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMaterialsQueryVariables = {
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaterialsQuery = {
  listMaterials?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAreaQueryVariables = {
  id: string,
};

export type GetAreaQuery = {
  getArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAreasQueryVariables = {
  filter?: ModelAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAreasQuery = {
  listAreas?:  {
    __typename: "ModelAreaConnection",
    items:  Array< {
      __typename: "Area",
      id: string,
      districtID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AreasByDistrictIDQueryVariables = {
  districtID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AreasByDistrictIDQuery = {
  areasByDistrictID?:  {
    __typename: "ModelAreaConnection",
    items:  Array< {
      __typename: "Area",
      id: string,
      districtID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDistrictQueryVariables = {
  id: string,
};

export type GetDistrictQuery = {
  getDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDistrictsQueryVariables = {
  filter?: ModelDistrictFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDistrictsQuery = {
  listDistricts?:  {
    __typename: "ModelDistrictConnection",
    items:  Array< {
      __typename: "District",
      id: string,
      cityID: string,
      name?: string | null,
      Areas?:  {
        __typename: "ModelAreaConnection",
        items:  Array< {
          __typename: "Area",
          id: string,
          districtID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DistrictsByCityIDQueryVariables = {
  cityID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDistrictFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DistrictsByCityIDQuery = {
  districtsByCityID?:  {
    __typename: "ModelDistrictConnection",
    items:  Array< {
      __typename: "District",
      id: string,
      cityID: string,
      name?: string | null,
      Areas?:  {
        __typename: "ModelAreaConnection",
        items:  Array< {
          __typename: "Area",
          id: string,
          districtID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name?: string | null,
      Districts?:  {
        __typename: "ModelDistrictConnection",
        items:  Array< {
          __typename: "District",
          id: string,
          cityID: string,
          name?: string | null,
          Areas?:  {
            __typename: "ModelAreaConnection",
            items:  Array< {
              __typename: "Area",
              id: string,
              districtID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientProfilQueryVariables = {
  id: string,
};

export type GetClientProfilQuery = {
  getClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientProfilsQueryVariables = {
  filter?: ModelClientProfilFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientProfilsQuery = {
  listClientProfils?:  {
    __typename: "ModelClientProfilConnection",
    items:  Array< {
      __typename: "ClientProfil",
      id: string,
      Brands?:  {
        __typename: "ModelBrandConnection",
        items:  Array< {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      Requests?:  {
        __typename: "ModelRequestConnection",
        items:  Array< {
          __typename: "Request",
          id: string,
          request_number?: string | null,
          Brand?:  {
            __typename: "Brand",
            id: string,
            Products?:  {
              __typename: "ModelProductConnection",
              items:  Array< {
                __typename: "Product",
                id: string,
                brandID: string,
                createdAt: string,
                updatedAt: string,
              } | null >,
              nextToken?: string | null,
            } | null,
            clientprofilID: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          Product?:  {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          Store?:  {
            __typename: "Store",
            id: string,
            createdAt: string,
            updatedAt: string,
          } | null,
          clientprofilID: string,
          status?: RequestStatus | null,
          createdAt: string,
          updatedAt: string,
          requestBrandId?: string | null,
          requestProductId?: string | null,
          requestStoreId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByBrandIDQueryVariables = {
  brandID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByBrandIDQuery = {
  productsByBrandID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandQueryVariables = {
  id: string,
};

export type GetBrandQuery = {
  getBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrandsQueryVariables = {
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BrandsByClientprofilIDQueryVariables = {
  clientprofilID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BrandsByClientprofilIDQuery = {
  brandsByClientprofilID?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRequestQueryVariables = {
  id: string,
};

export type GetRequestQuery = {
  getRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type ListRequestsQueryVariables = {
  filter?: ModelRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRequestsQuery = {
  listRequests?:  {
    __typename: "ModelRequestConnection",
    items:  Array< {
      __typename: "Request",
      id: string,
      request_number?: string | null,
      Brand?:  {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Product?:  {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      clientprofilID: string,
      status?: RequestStatus | null,
      createdAt: string,
      updatedAt: string,
      requestBrandId?: string | null,
      requestProductId?: string | null,
      requestStoreId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RequestsByClientprofilIDQueryVariables = {
  clientprofilID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RequestsByClientprofilIDQuery = {
  requestsByClientprofilID?:  {
    __typename: "ModelRequestConnection",
    items:  Array< {
      __typename: "Request",
      id: string,
      request_number?: string | null,
      Brand?:  {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Product?:  {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      Store?:  {
        __typename: "Store",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      clientprofilID: string,
      status?: RequestStatus | null,
      createdAt: string,
      updatedAt: string,
      requestBrandId?: string | null,
      requestProductId?: string | null,
      requestStoreId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnCreateMaterialSubscription = {
  onCreateMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnUpdateMaterialSubscription = {
  onUpdateMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMaterialSubscriptionVariables = {
  filter?: ModelSubscriptionMaterialFilterInput | null,
};

export type OnDeleteMaterialSubscription = {
  onDeleteMaterial?:  {
    __typename: "Material",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAreaSubscriptionVariables = {
  filter?: ModelSubscriptionAreaFilterInput | null,
};

export type OnCreateAreaSubscription = {
  onCreateArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAreaSubscriptionVariables = {
  filter?: ModelSubscriptionAreaFilterInput | null,
};

export type OnUpdateAreaSubscription = {
  onUpdateArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAreaSubscriptionVariables = {
  filter?: ModelSubscriptionAreaFilterInput | null,
};

export type OnDeleteAreaSubscription = {
  onDeleteArea?:  {
    __typename: "Area",
    id: string,
    districtID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnCreateDistrictSubscription = {
  onCreateDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnUpdateDistrictSubscription = {
  onUpdateDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnDeleteDistrictSubscription = {
  onDeleteDistrict?:  {
    __typename: "District",
    id: string,
    cityID: string,
    name?: string | null,
    Areas?:  {
      __typename: "ModelAreaConnection",
      items:  Array< {
        __typename: "Area",
        id: string,
        districtID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnCreateCitySubscription = {
  onCreateCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity?:  {
    __typename: "City",
    id: string,
    name?: string | null,
    Districts?:  {
      __typename: "ModelDistrictConnection",
      items:  Array< {
        __typename: "District",
        id: string,
        cityID: string,
        name?: string | null,
        Areas?:  {
          __typename: "ModelAreaConnection",
          items:  Array< {
            __typename: "Area",
            id: string,
            districtID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClientProfilSubscriptionVariables = {
  filter?: ModelSubscriptionClientProfilFilterInput | null,
};

export type OnCreateClientProfilSubscription = {
  onCreateClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientProfilSubscriptionVariables = {
  filter?: ModelSubscriptionClientProfilFilterInput | null,
};

export type OnUpdateClientProfilSubscription = {
  onUpdateClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientProfilSubscriptionVariables = {
  filter?: ModelSubscriptionClientProfilFilterInput | null,
};

export type OnDeleteClientProfilSubscription = {
  onDeleteClientProfil?:  {
    __typename: "ClientProfil",
    id: string,
    Brands?:  {
      __typename: "ModelBrandConnection",
      items:  Array< {
        __typename: "Brand",
        id: string,
        Products?:  {
          __typename: "ModelProductConnection",
          items:  Array< {
            __typename: "Product",
            id: string,
            brandID: string,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        clientprofilID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Requests?:  {
      __typename: "ModelRequestConnection",
      items:  Array< {
        __typename: "Request",
        id: string,
        request_number?: string | null,
        Brand?:  {
          __typename: "Brand",
          id: string,
          Products?:  {
            __typename: "ModelProductConnection",
            items:  Array< {
              __typename: "Product",
              id: string,
              brandID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          clientprofilID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Product?:  {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        Store?:  {
          __typename: "Store",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        clientprofilID: string,
        status?: RequestStatus | null,
        createdAt: string,
        updatedAt: string,
        requestBrandId?: string | null,
        requestProductId?: string | null,
        requestStoreId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    brandID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnCreateBrandSubscription = {
  onCreateBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnUpdateBrandSubscription = {
  onUpdateBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnDeleteBrandSubscription = {
  onDeleteBrand?:  {
    __typename: "Brand",
    id: string,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brandID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    clientprofilID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnCreateRequestSubscription = {
  onCreateRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type OnUpdateRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnUpdateRequestSubscription = {
  onUpdateRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};

export type OnDeleteRequestSubscriptionVariables = {
  filter?: ModelSubscriptionRequestFilterInput | null,
};

export type OnDeleteRequestSubscription = {
  onDeleteRequest?:  {
    __typename: "Request",
    id: string,
    request_number?: string | null,
    Brand?:  {
      __typename: "Brand",
      id: string,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          brandID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      clientprofilID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Product?:  {
      __typename: "Product",
      id: string,
      brandID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Store?:  {
      __typename: "Store",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientprofilID: string,
    status?: RequestStatus | null,
    createdAt: string,
    updatedAt: string,
    requestBrandId?: string | null,
    requestProductId?: string | null,
    requestStoreId?: string | null,
  } | null,
};
