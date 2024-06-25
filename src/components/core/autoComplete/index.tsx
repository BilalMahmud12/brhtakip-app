import React, { use } from 'react'
import { Autocomplete, TextField } from '@mui/material';

type Option = {
    label: string;
    value: string;
}

interface AutoCompleteProps {
    id: string;
    options: Option[];
    label?: string;
    value: string;
    handleOnChange: (option: Option) => void;
    variant?: 'standard' | 'outlined' | 'filled';
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
    const { 
        id, 
        options, 
        label, 
        handleOnChange = () => { }, 
        variant = 'standard' 
    } = props

    const [currentValue, setCurrentValue] = React.useState<Option | null>(options[0])
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        const option = options.find(option => option.value === props.value)
        setCurrentValue(option || null)
        setInputValue(option?.label || '')
    }
    , [props.value, options])


    return (
        <div>
            <Autocomplete
                id={id}
                options={options}
                value={currentValue}
                onChange={(_, option) => {
                    setCurrentValue(option)
                    handleOnChange(option as Option)
                }}
                onInputChange={(_, newInputValue: string) => {
                    setInputValue(newInputValue);
                }}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.value === value?.value}
                renderInput={(params) => (
                    <TextField 
                        {...params} 
                        label={label} 
                        variant={variant} 
                        size='small' 
                    />
                )}
                loading
            />
        </div>
    )
}

export default AutoComplete