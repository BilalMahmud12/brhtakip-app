export const selectComponentStyles = {
    width: '100%',
    '& .MuiSelect-select': {
        padding: '3px 14px',
        fontSize: '14px',
        fontWeight: 400,
        color: 'black',
        //backgroundColor: '#fef9c324',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    '& .MuiInputBase-root': {
        borderRadius: '5px',
    },
    '& .MuiMenu-list': {
        borderRadius: '5px',
    }
    
}

export const buttonComponentStyles = {
    fontWeight: 500,
    textTransform: 'none',
    backgroundColor: 'black',
    borderRadius: '5px',
    '&:hover': {
        backgroundColor: '#333',
    }
}

export const dataTableStyles = {
    border: 'none !important', 
    boxShadow: 'none !important'
}