import React from 'react'
import { Autocomplete, TextField } from '@mui/material';

type Option = {
    label: string;
    value: string;
}

interface AutoCompleteProps {
    id: string;
    options: readonly string[] | Option[];
    label?: string;
    value: string;
    handleOnChange: (option: string | Option | null, reason: string) => void;
    variant?: 'standard' | 'outlined' | 'filled';
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
    const { id, options, label, value, handleOnChange = () => { }, variant = 'standard' } = props
    const [currentValue, setCurrentValue] = React.useState('')

    React.useEffect(() => {
        setCurrentValue(value)
    }, [value])
    
    return (
        <div>
            <Autocomplete
                id={id}
                options={options as readonly string[]}
                getOptionLabel={(option) => typeof option === 'string' ? option : (option as Option).label}
                value={currentValue}
                onChange={(_, option, resason) => {
                    setCurrentValue(typeof option === 'string' ? option : (option as unknown as Option)?.value || '')
                    handleOnChange(option, resason)
                }}
                renderInput={(params) => <TextField {...params} label={label} variant={variant} size='small' />}
            />
        </div>
    )
}

export default AutoComplete