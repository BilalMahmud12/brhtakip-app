
export const formateDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date).replace(/\//g, ' - ');
}

export const generateRequestNumber = () => {
    const Year = new Date().getFullYear();
    return `BRH-${Year}-${Math.floor(Math.random() * 1000000)}`
}