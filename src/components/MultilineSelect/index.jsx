import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: 120,
        width: '100%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));


export default function MultilineSelect({initialState, items}) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selected, setSelected] = useState(initialState);

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <Select
            className={classes.select}
            labelId="types-label"
            id="types"
            multiple
            value={selected}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
                <div className={classes.chips}>
                    {selected.map((item) => (
                        <Chip key={item.id} label={item.value} className={classes.chip} color="primary"/>
                    ))}
                </div>
            )}
            MenuProps={MenuProps}
        >
            {items.map((item) => (
                <MenuItem key={item.id} value={item} style={getStyles(item, selected, theme)}>
                    {item.value}
                </MenuItem>
            ))}
        </Select>
    );
}
