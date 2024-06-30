
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
