import { generateClient } from "aws-amplify/data";

export * as ClientProfileRepository from './clientProfile.repository'
export * as UserRepository from './user.repository'
export * as RequestRepository from './request.repository'
export * as StoreRepository from './store.repository'
export * as BrandRepository from './brand.repository'
export * as ProductRepository from './product.repository'
export * as MaterialRepository from './material.repository'
export * as ApplicationAreaRepository from './applicationArea.repository'
export * as AreaRepository from './area.repository'
export * as DistrictRepository from './district.repository'
export * as CityRepository from './city.repository'
export * as ExtraProductRepository from './extraProduct.repository'


export const client = generateClient()

export function UpdatePassword(arg0: { oldPassword: string; newPassword: string | undefined; }) {
    throw new Error('Function not implemented.');
}
