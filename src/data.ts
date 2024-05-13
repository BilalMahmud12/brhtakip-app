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
            name: 'Gratis Ataşehir Bulvarı',
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
            "name": "Doğa Pharmacy",
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
            "name": "Lacivert Eczanesi",
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
            "name": "Metropol Azra Eczanesi",
            "cityID": "67d7ba57-3e25-478e-a4d5-07f2d2d92d60",
            "districtID": "7f0b050d-13ce-4d99-bd3f-11d3660c8cda",
            "areaID": "9d18a01a-8b52-4bc0-a5d1-340bba8d11b7",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "edf52876-f066-4445-a526-0c3d0b9ebe8f",
        "request_number": "BRH-2021-1005",
        "clientprofilID": "856fd5a0-3138-448e-8830-a44d8e4c7c6c",
        "status": "WAITING_DESIGN" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "2c701f12-865f-44b3-a7d1-2f7879b17964",
            "name": "BIODERMA",
            "clientprofilID": "856fd5a0-3138-448e-8830-a44d8e4c7c6c",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "2ebec703-3797-4483-8281-230dfa8f256b",
            "name": "Sensibio",
            "brandID": "2c701f12-865f-44b3-a7d1-2f7879b17964",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "24f3c2f3-a9cb-4c82-a521-577c7f676767",
            "name": "Atatürk Bulvarı Eczanesi",
            "cityID": "1c044b89-fadb-4469-b6ec-9fd7ad42a67d",
            "districtID": "3e81ab04-7682-4117-aa5b-835b0d6f2332",
            "areaID": "4a4b001e-5f02-4f06-aa5c-8a2d8cab8d5f",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "a3ef9924-46b2-4872-8b4a-edfdadeef5ac",
        "request_number": "BRH-2021-1006",
        "clientprofilID": "658a948b-9837-473c-b702-3f12ffc88d16",
        "status": "PENDING_APPROAL" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "ca184524-b4e5-450c-95e2-2c073c6e1622",
            "name": "Avene",
            "clientprofilID": "658a948b-9837-473c-b702-3f12ffc88d16",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "9dc2f547-8153-4a5b-98a3-bf478c97c03b",
            "name": "Cleanance",
            "brandID": "ca184524-b4e5-450c-95e2-2c073c6e1622",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "f3d38b83-e54f-409c-a4d5-8214c5d98a0a",
            "name": "Hayat Eczanesi",
            "cityID": "c776b14e-6851-4a19-9837-f7ad6acea184",
            "districtID": "8868b95e-45f0-4e1e-9c8b-e28e5c2db953",
            "areaID": "7e58d583-850f-4bbf-80d8-8aa6fd5b4f46",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "8c04b1e4-bdac-4b14-a8d0-034bcf8f442a",
        "request_number": "BRH-2021-1007",
        "clientprofilID": "7dbf490f-07e9-4cf0-9245-6b1503ab9755",
        "status": "CANCELLED" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "7df49d88-d0a9-490f-809d-06852060eb25",
            "name": "La Roche-Posay",
            "clientprofilID": "7dbf490f-07e9-4cf0-9245-6b1503ab9755",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "c34731ee-c701-4729-b057-991ca150756e",
            "name": "Atoderm",
            "brandID": "7df49d88-d0a9-490f-809d-06852060eb25",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "27329bc4-7cf3-47c1-9bce-d456c402dce0",
            "name": "Ataşehir Metropole Eczanesi",
            "cityID": "71e8d4b4-fbaf-42cb-8d88-2b625b47ff9c",
            "districtID": "1afb3fb5-30fe-426a-95b8-537d52d45ff1",
            "areaID": "ad2605e2-a462-4013-aa17-a5bad6dd8987",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "5fd04827-3081-4ebc-a9ec-c58165a89cff",
        "request_number": "BRH-2021-1008",
        "clientprofilID": "550fe3bd-a8e7-4ea4-887b-8db016744c4c",
        "status": "COMPLETE" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "3dbb9421-392e-4efb-9fb0-faf719843bce",
            "name": "BIODERMA",
            "clientprofilID": "550fe3bd-a8e7-4ea4-887b-8db016744c4c",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "bd208fc0-049f-4135-b633-a66526344593",
            "name": "Photoderm",
            "brandID": "3dbb9421-392e-4efb-9fb0-faf719843bce",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "cb3a791f-84e7-418b-b4f8-7a0d24c25a5d",
            "name": "Melisa Eczanesi",
            "cityID": "13b274b2-4f1d-4376-8137-98f63d52c957",
            "districtID": "1d6dbaba-70c8-449e-993b-37b54e0c547b",
            "areaID": "a46bc37e-0d2a-4be7-93b7-7a2eb1bf4544",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    },
    {
        "__typename": "Request",
        "id": "0d3cf61e-b5ca-4d22-971a-45638a3b2c83",
        "request_number": "BRH-2021-1009",
        "clientprofilID": "a3843f93-6199-4b4b-8470-50bade75c2f5",
        "status": "WAITING_PRESS" as RequestStatus,
        "Brand": {
            "__typename": "Brand",
            "id": "bd42b5bd-3166-4d0b-8acf-77a73a0b9467",
            "name": "Nivea",
            "clientprofilID": "a3843f93-6199-4b4b-8470-50bade75c2f5",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Product": {
            "__typename": "Product",
            "id": "d0c9a0fc-bdc4-48e6-bb52-c3ab771986ec",
            "name": "Vichy",
            "brandID": "bd42b5bd-3166-4d0b-8acf-77a73a0b9467",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "Store": {
            "__typename": "Store",
            "id": "fa22f918-df7e-4619-8bde-76f45f2ecce1",
            "name": "Anadolu Eczanesi",
            "cityID": "7832cd1b-0e2f-456a-8b8d-aeb40d5f6c8d",
            "districtID": "8ae572b2-5561-44b8-9816-a8f20797d1b2",
            "areaID": "c61b2567-37d8-4173-8cfe-2225cb47631e",
            "createdAt": "2021-09-01T00:00:00.000Z",
            "updatedAt": "2021-09-01T00:00:00.000Z"
        },
        "createdAt": "2021-09-01T00:00:00.000Z",
        "updatedAt": "2021-09-01T00:00:00.000Z"
    }



]

