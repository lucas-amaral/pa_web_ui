import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function MultilineSelect({ initialState, items, label, id }) {
    return (
        <Autocomplete
            multiple
            id={id}
            options={items}
            getOptionLabel={(item) => item.value}
            defaultValue={initialState}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={label} />
            )}
        />
    );
}
