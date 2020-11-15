import React, { useEffect} from 'react';
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
import { types } from '../../../../constants/PropertyTypes';
import MultilineSelect from '../../../../components/MultilineSelect';
import MonetaryInput from '../../../../components/MonetaryInput';
import GridBox from '../../../../components/GridBox';
import Barters from '../Barters';

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
}));

function Interest() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const dataInterest = { username: localStorage.getItem('username') };
    const dispatch = useDispatch();
    let interest = useSelector((state) => state.interest.interest);

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

    function getPropertyTypes(apiTypes) {
        return types
            .filter((type) => apiTypes.includes(type.id))
            .map((type => type.value));
    }

    return (
        interest.id ?
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
                                <GridBox>
                                    <MonetaryInput label="Valor máximo" labelWidth={100} value={interest.value}/>
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="dorms"
                                        defaultValue={interest.dorms}
                                        type="number"
                                        label="Número de dormitórios"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="suites"
                                        defaultValue={interest.suites}
                                        type="number"
                                        label="Número de Suites"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="bathrooms"
                                        defaultValue={interest.bathrooms}
                                        type="number"
                                        label="Número de banheiros"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="garages"
                                        defaultValue={interest.garages}
                                        type="number"
                                        label="Número de garagens"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={11}>
                                    <InputLabel id="types">Tipos</InputLabel>
                                    <MultilineSelect initialState={getPropertyTypes(['HOME'])} items={types} />
                                </GridBox>
                                <GridBox xs={11}>
                                    <InputLabel id="types">Bairros</InputLabel>
                                    <MultilineSelect initialState={[{ id: 1, value: 'CENTRO' }]}
                                                     items={[ { id: 1, value: 'CENTRO' },
                                                                { id: 2, value: 'BOI MORTO' },
                                                                { id: 3, value: 'CAMOBI' }, ]} />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={<Checkbox id="pool" color="primary" defaultValue={interest.pool} />}
                                        label="Com piscina"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={<Checkbox id="balcony" color="primary" defaultValue={interest.balcony} />}
                                        label="Com sacada"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={<Checkbox id="elevator" color="primary" defaultValue={interest.elevator} />}
                                        label="Com elevador"
                                    />
                                </GridBox>
                                <GridBox xs={5}>
                                    <FormControlLabel
                                        control={<Checkbox id="barbecueGrill" color="primary" defaultValue={interest.barbecueGrill} />}
                                        label="Com churrasqueira"
                                    />
                                </GridBox>
                                <Grid container style={{ marginTop: '20px'}}>
                                    <Grid item md={12}>
                                        <Box pl={1} pb={2}>
                                            <Title style={{ fontSize: '15px'}}>Financiamento</Title>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="financing"
                                                color="primary"
                                                defaultChecked={interest.financing}
                                            />
                                        }
                                        label="Financiável"
                                    />
                                </GridBox>
                                <GridBox xs={10}>
                                    {interest.financing && <MonetaryInput label="Valor financiado" labelWidth={125} value={interest.financingValue}/>}
                                </GridBox>
                                <Grid container style={{ marginTop: '20px'}}>
                                    <Grid item md={12}>
                                        <Box pl={1} pb={2}>
                                            <Title style={{ fontSize: '15px'}}>Permutas</Title>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Barters/>
                                <CardActions style={{marginTop: '10px'}}>
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
