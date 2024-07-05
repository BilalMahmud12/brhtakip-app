
export const formateDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date).replace(/\//g, ' - ');
}

export const generateRequestNumber = (): string => {
    const Year = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `BRH-${Year}-${randomNumber}`;
}

export const findKeyByValue = (obj: { [key: string]: string }, value: string): string | undefined => {
    return Object.keys(obj).find(key => obj[key] === value);
}

export const isValidKey = (key: string, obj: object): key is keyof typeof obj => {
    return key in obj;
}

export const filterEmptyValues = (obj: any) => {
    const newObj: { [key: string]: any } = {};
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (value !== '' && value !== null && !(Array.isArray(value) && value.length === 0)) {
            if (typeof value === 'object' && !Array.isArray(value)) {
                newObj[key] = filterEmptyValues(value);
            } else {
                newObj[key] = value;
            }
        }
    });
    return newObj;
};

export const removeSchemaTypeName = (input: any): any => {
    if (Array.isArray(input)) {
        return input.map(removeSchemaTypeName);
    } else if (input !== null && typeof input === 'object') {
        const newObj: any = {};
        for (const key in input) {
            if (key !== '__typename') {
                newObj[key] = removeSchemaTypeName(input[key]);
            }
        }
        return newObj;
    } else {
        return input;
    }
}

export const removeRelationshipProperties = (input: any): any => {
    if (Array.isArray(input)) {
        return input.map(removeRelationshipProperties);
    } else if (input !== null && typeof input === 'object') {
        const newObj: any = {};
        for (const key in input) {
            if (key[0] !== key[0].toUpperCase()) {
                newObj[key] = removeRelationshipProperties(input[key]);
            }
        }
        return newObj;
    } else {
        return input;
    }
}
