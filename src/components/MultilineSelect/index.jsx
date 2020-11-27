import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

export default function MultilineSelect({
    initialState,
    items,
    label,
    id,
    control,
    setValue,
}) {
    return (
        <Controller
            name={id}
            as={(props) => (
                <Autocomplete
                    id={id}
                    multiple
                    options={items}
                    getOptionLabel={(option) => option.value}
                    getOptionSelected={(option, value) =>
                        option.value === value.value
                    }
                    filterSelectedOptions
                    value={props.value}
                    onChange={(e, values) => setValue(id, values)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label={label}
                            name={id}
                        />
                    )}
                />
            )}
            defaultValue={initialState}
            control={control}
        />
    );
}
