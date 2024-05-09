import type { Request, RequestStatus, Brand, Product, Store } from '@/API'

export type RequestCopy = {
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

export const requests: Request[] = [
    {
        __typename: "Request",
        id: '93938ac7-4af2-42d1-8e47-1ea6e9d1cffd',
        request_number: 'BRH-2021-0001',
        clientprofilID: 'c0dbfd8d-05d2-4f73-8364-61c157178379',
        status: 'PENDING_APPROAL' as RequestStatus,
        Brand: {
            __typename: "Brand",
            id: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            name: 'BIODERMA',
            clientprofilID: 'c0dbfd8d-05d2-4f73-8364-61c157178379',
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
        Product: {
            __typename: "Product",
            id: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            name: 'Sensibio',
            brandID: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
        Store: {
            __typename: "Store",
            id: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            name: 'Store 1',
            cityID: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            districtID: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            areaID: 'e5b3c3b5-9e4a-4f8a-8f6b-4d9f0e7f3b4b',
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
        createdAt: '2021-09-01T00:00:00.000Z',
        updatedAt: '2021-09-01T00:00:00.000Z',
    },
    {
        __typename: "Request",
        id: "80be3395-c63d-4f95-9c03-61a3d6464c2d",
        request_number: "BRH-2021-1001",
        clientprofilID: "953ee90f-75a1-4c74-a620-41ff8102f133",
        status: "COMPLETE" as RequestStatus,
        Brand: {
            "__typename": "Brand",
            "id": "b98affc9-4ef4-4539-be20-fd369aa9a67d",
            "name": "Nivea",
            "clientprofilID": "953ee90f-75a1-4c74-a620-41ff8102f133",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        Product: {
            "__typename": "Product",
            "id": "276fa27e-3987-4e1a-919f-7de477ed33cc",
            "name": "Atoderm",
            "brandID": "b98affc9-4ef4-4539-be20-fd369aa9a67d",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        Store: {
            "__typename": "Store",
            "id": "502a4033-c6e7-4a50-8e55-541099b8219d",
            "name": "Store 2",
            "cityID": "71fc6395-95ce-4fcd-829c-f3cd142d1db1",
            "districtID": "2dff69d9-354b-4ee5-9681-550fb06f1be9",
            "areaID": "126fc52a-029e-47d6-830c-73b31a5e404b",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        createdAt: "2021-09-01T00:00:00.000Z",
        updatedAt: "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "daa5b8ce-f207-44d8-b7a2-b03925739d49",
        "request_number": "BRH-2021-1002",
        "clientprofilID": "39721ac1-b62e-4f88-8526-652507c87199",
        "status": "WAITING_DESIGN" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "192e2249-3a6c-40f1-a82c-c44e604c0919",
            "name": "Nivea",
            "clientprofilID": "39721ac1-b62e-4f88-8526-652507c87199",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "6ba5641f-b945-43d6-8ab2-3b8a59f5b3e2",
            "name": "Hydrabio",
            "brandID": "192e2249-3a6c-40f1-a82c-c44e604c0919",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "4bb57f53-941f-412b-a932-918893248b5a",
            "name": "Store 3",
            "cityID": "da951791-1251-4d54-82e5-7c535f420ebd",
            "districtID": "accdd051-6327-406a-9c1d-3612e390ba81",
            "areaID": "9f181650-193c-4d02-8839-5cf13871d042",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "b16f7c19-df7a-42c6-a5d1-2bfb59b28589",
        "request_number": "BRH-2021-1004",
        "clientprofilID": "3f8fb1bd-7a1f-42b6-ace8-c44544cb7d7e",
        "status": "COMPLETE" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "89967f7e-3db7-43b2-b92f-3685f4029b03",
            "name": "Vichy",
            "clientprofilID": "3f8fb1bd-7a1f-42b6-ace8-c44544cb7d7e",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "2fae4fa1-421c-4d6b-a0a5-2252b6b0b7c4",
            "name": "Dercos",
            "brandID": "89967f7e-3db7-43b2-b92f-3685f4029b03",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "8a550a77-5577-4855-a8ee-a1e603619c06",
            "name": "Store 5",
            "cityID": "67d7ba57-3e25-478e-a4d5-07f2d2d92d60",
            "districtID": "7f0b050d-13ce-4d99-bd3f-11d3660c8cda",
            "areaID": "9d18a01a-8b52-4bc0-a5d1-340bba8d11b7",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    }


]

