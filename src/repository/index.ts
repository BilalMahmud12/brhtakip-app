import { generateClient } from "aws-amplify/data";

export * as RequestRepository from './request.repository'
export * as MaterialRepository from './material.repository'
export * as AreaRepository from './area.repository'
export * as DistrictRepository from './district.repository'
export * as CityRepository from './city.repository'
export * as ProductRepository from './product.repository'
export * as BrandRepository from './brand.repository'
export * as ClientProfileRepository from './clientProfile.repository'

export const client = generateClient()
