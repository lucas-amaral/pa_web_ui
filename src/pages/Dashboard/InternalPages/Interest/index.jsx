import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Checkbox, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NewInterest from '../NewInterest/index'

import { Types as InterestTypes } from '../../../../store/ducks/interest';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { types } from '../../../../constants/PropertyTypes';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    card: {
        width: '100%',
    },
    fields: {
        margin: 10,
    },
    bottomBoxButtons: {
        display: 'flex',
        width: 475,
        justifyContent: 'space-between',
    },
    bottomButton: {
        margin: 5,
    },
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

function Interest() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const dataInterest = { username: localStorage.getItem('username') };
    const dispatch = useDispatch();
    let interest = useSelector((state) => state.interest.interest);

    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        dispatch({
            type: InterestTypes.LOAD_INTEREST,
            dataInterest,
        });
    }, []);

    const removeInterest = (interestID) => {
        dispatch({
            type: InterestTypes.REMOVE_INTEREST,
            interestID,
        });
    };

    if (interest.payload) {
        interest = interest.payload;
    }

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    // function getPropertyTypes(apiTypes) {
    //     return types
    //         .filter((type) => apiTypes.includes(type.apiName))
    //         .map((type => type.name));
    // }

    const handleTypeChange = (event) => {
        console.log(selectedTypes);
        console.log(event.target.value);
        setSelectedTypes(event.target.value);
    };

    return (
        interest.value ?
            <Grid container>
                <Grid item md={12}>
                    <Container>
                        <Grid container>
                            <Grid item md={12}>
                                <Box pl={1} pb={2}>
                                    <Title>Interesse</Title>
                                </Box>
                            </Grid>
                        </Grid>
                        {interest.value && (
                        <form>
                            <Grid container>
                                <Grid item xs={2.2}>
                                    <Box p={1}>
                                        <FormControl className={classes.margin} variant="outlined">
                                            <InputLabel htmlFor="title">Valor máximo</InputLabel>
                                            <OutlinedInput
                                                id="title"
                                                value={interest.value}
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                labelWidth={100}
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item xs={2.2}>
                                    <Box p={1}>
                                        <TextField
                                            id="dorms"
                                            value={interest.dorms}
                                            label="Número de dormitórios"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <TextField
                                            id="suites"
                                            value={interest.suites}
                                            label="Número de Suites"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <TextField
                                            id="bathrooms"
                                            value={interest.bathrooms}
                                            label="Número de banheiros"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <TextField
                                            id="garages"
                                            value={interest.garages}
                                            label="Número de garagens"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={11}>
                                    <Box p={1}>
                                        <InputLabel id="types">Tipos</InputLabel>
                                        <Select
                                            className={classes.select}
                                            labelId="types-label"
                                            id="types"
                                            multiple
                                            value={selectedTypes}
                                            onChange={handleTypeChange}
                                            input={<Input id="select-multiple-chip" />}
                                            renderValue={(selected) => (
                                                <div className={classes.chips}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} className={classes.chip} />
                                                    ))}
                                                </div>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {types.map((type) => (
                                                <MenuItem key={type.apiName} value={type.name} style={getStyles(type, selectedTypes, theme)}>
                                                    {type.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item xs={11}>
                                    <Box p={1}>
                                        <InputLabel id="types">Bairros</InputLabel>
                                        <Select
                                            className={classes.select}
                                            labelId="types-label"
                                            id="types"
                                            multiple
                                            value={selectedTypes}
                                            onChange={handleTypeChange}
                                            input={<Input id="select-multiple-chip" />}
                                            renderValue={(selected) => (
                                                <div className={classes.chips}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} className={classes.chip} />
                                                    ))}
                                                </div>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {types.map((type) => (
                                                <MenuItem key={type.apiName} value={type.name} style={getStyles(type, selectedTypes, theme)}>
                                                    {type.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <FormControlLabel
                                            control={<Checkbox id="pool" checked={interest.pool} />}
                                            label="Com piscina"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox id="balcony" checked={interest.balcony} />
                                            }
                                            label="Com sacada"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <FormControlLabel
                                            control={<Checkbox id="elevator" checked={interest.elevator} />}
                                            label="Com elevador"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={5}>
                                    <Box p={1}>
                                        <FormControlLabel
                                            control={<Checkbox id="barbecueGrill" checked={interest.barbecueGrill} />}
                                            label="Com churrasqueira"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    id="financing"
                                                    color="primary"
                                                    checked={interest.financing}
                                                />
                                            }
                                            label="Financiável"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                    <Box p={1}>
                                        <FormControl className={classes.margin} variant="outlined">
                                            <InputLabel htmlFor="fincValue">Valor Financiado</InputLabel>
                                            <OutlinedInput
                                                id="fincValue"
                                                value={interest.financingValue}
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                labelWidth={125}
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <CardActions>
                                    <div className={classes.bottomBoxButtons}>
                                        <Button
                                            className={classes.bottomButton}
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            fullWidth
                                        >
                                            Salvar
                                        </Button>
                                        <Button
                                            className={classes.bottomButton}
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            onClick={() => removeInterest(interest.id)}
                                            fullWidth
                                        >
                                            Excluir
                                        </Button>
                                    </div>
                                </CardActions>
                            </Grid>
                        </form>)}
                    </Container>
                </Grid>
            </Grid> : <NewInterest />
    );
}

export default Interest;
