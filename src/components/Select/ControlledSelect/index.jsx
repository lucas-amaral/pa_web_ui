import React from 'react';
import { Controller } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

export default function MultilineSelect({
    id,
    label,
    defaultValue,
    values,
    control,
}) {
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel id="label">{label}</InputLabel>
            <Controller
                name={id}
                control={control}
                defaultValue={defaultValue}
                as={
                    <Select labelId="label" fullWidth label={label}>
                        {values.map((item) => {
                            return (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.value}
                                </MenuItem>
                            );
                        })}
                    </Select>
                }
            />
        </FormControl>
    );
}
