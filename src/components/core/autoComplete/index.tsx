import React from 'react';
import { Autocomplete, AutocompleteChangeReason, TextField } from '@mui/material';

type Option = {
    label: string;
    value: string;
};

interface AutoCompleteProps<T extends Option> {
    id: string;
    options: T[];
    label?: string;
    value: string;
    variant?: 'standard' | 'outlined' | 'filled';
    handleOnChange: (option: T, reason: AutocompleteChangeReason) => void;
    renderOption?: (props: any, option: T) => React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
}

const AutoComplete = <T extends Option>(props: AutoCompleteProps<T>) => {
    const {
        id,
        options,
        label,
        variant = 'standard',
        disabled = false,
        isLoading = false,
        handleOnChange,
        renderOption
    } = props;

    const [currentValue, setCurrentValue] = React.useState<T | null>(options.find(option => option.value === props.value) || null);
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        const option = options.find(option => option.value === props.value) || null;
        setCurrentValue(option);
        setInputValue(option?.label || '');
    }, [props.value, options]);

    return (
        <Autocomplete
            id={id}
            options={options}
            value={currentValue}
            onChange={(_, option, reason) => {
                setCurrentValue(option as T);
                handleOnChange(option as T, reason);
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
            renderOption={renderOption}
            disabled={disabled}
            loading={isLoading}
        />
    );
};

export default AutoComplete;
