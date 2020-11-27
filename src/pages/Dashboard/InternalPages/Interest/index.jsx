import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Checkbox, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm } from 'react-hook-form';
import NewInterest from '../NewInterest/index';

import { Types as InterestTypes } from '../../../../store/ducks/interest';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import { types } from '../../../../constants/PropertyTypes';
import MultilineSelect from '../../../../components/MultilineSelect';
import MonetaryInput from '../../../../components/MonetaryInput';
import GridBox from '../../../../components/GridBox';
import Barters from '../Barters';
import { EDIT_INTEREST } from '../../../../constants/ActionTypes';

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
    const { register, handleSubmit, errors, control, setValue } = useForm();
    const theme = useTheme();
    const classes = useStyles(theme);
    const dispatch = useDispatch();
    const interest = useSelector((state) => state.interest.interest);
    const neighborhoods = useSelector(
        (state) => state.neighborhood.neighborhoods
    );

    const removeInterest = (interestID) => {
        dispatch({
            type: InterestTypes.REMOVE_INTEREST,
            interestID,
        });
    };

    const onSubmit = (data) => {
        // dispatch({
        //     type: EDIT_INTEREST,
        //     data: { ...data },
        // });
        console.log(data);
    };

    function getSelectNeighborhoods(neighborhoodsList) {
        return neighborhoodsList
            .map((neighborhood) => ({
                id: neighborhood.id,
                value: neighborhood.name,
            }))
            .sort((a, b) => (a.value > b.value ? 1 : -1));
    }

    return interest.id ? (
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
                    <TextField
                        inputRef={register()}
                        type="hidden"
                        id="id"
                        name="id"
                        defaultValue={interest.id}
                    />
                    <TextField
                        inputRef={register()}
                        type="hidden"
                        id="username"
                        name="username"
                        defaultValue={interest.user.username}
                    />
                    {interest.value && (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container>
                                <GridBox>
                                    <MonetaryInput
                                        label="Valor máximo"
                                        id="value"
                                        labelWidth={100}
                                        inputRef={register()}
                                        value={interest.value}
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="dorms"
                                        name="dorms"
                                        defaultValue={interest.dorms}
                                        inputRef={register()}
                                        type="number"
                                        label="Número de dormitórios"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="suites"
                                        name="suites"
                                        defaultValue={interest.suites}
                                        inputRef={register()}
                                        type="number"
                                        label="Número de Suites"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="bathrooms"
                                        name="bathrooms"
                                        defaultValue={interest.bathrooms}
                                        inputRef={register()}
                                        type="number"
                                        label="Número de banheiros"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <TextField
                                        id="garages"
                                        name="garages"
                                        defaultValue={interest.garages}
                                        inputRef={register()}
                                        type="number"
                                        label="Número de garagens"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={11}>
                                    <MultilineSelect
                                        initialState={interest.uiTypes}
                                        items={types}
                                        control={control}
                                        setValue={setValue}
                                        label="Tipos"
                                        id="types"
                                    />
                                </GridBox>
                                <GridBox xs={11}>
                                    <MultilineSelect
                                        initialState={
                                            interest.neighborhoods
                                                ? getSelectNeighborhoods(
                                                      interest.neighborhoods
                                                  )
                                                : []
                                        }
                                        items={getSelectNeighborhoods(
                                            neighborhoods
                                        )}
                                        control={control}
                                        setValue={setValue}
                                        label="Bairros"
                                        id="neighborhoods"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="pool"
                                                name="pool"
                                                color="primary"
                                                defaultValue={interest.pool}
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com piscina"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="balcony"
                                                name="balcony"
                                                color="primary"
                                                defaultValue={interest.balcony}
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com sacada"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="elevator"
                                                name="elevator"
                                                color="primary"
                                                defaultValue={interest.elevator}
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com elevador"
                                    />
                                </GridBox>
                                <GridBox xs={5}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="barbecueGrill"
                                                name="barbecueGrill"
                                                color="primary"
                                                defaultValue={
                                                    interest.barbecueGrill
                                                }
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com churrasqueira"
                                    />
                                </GridBox>
                                <Grid container style={{ marginTop: '20px' }}>
                                    <Grid item md={12}>
                                        <Box pl={1} pb={2}>
                                            <Title style={{ fontSize: '15px' }}>
                                                Financiamento
                                            </Title>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="financing"
                                                name="financing"
                                                color="primary"
                                                defaultChecked={
                                                    interest.financing
                                                }
                                                inputRef={register()}
                                            />
                                        }
                                        label="Financiável"
                                    />
                                </GridBox>
                                <GridBox xs={10}>
                                    {interest.financing && (
                                        <MonetaryInput
                                            id="financingValue"
                                            label="Valor financiado"
                                            labelWidth={125}
                                            value={interest.financingValue}
                                            inputRef={register()}
                                        />
                                    )}
                                </GridBox>
                                <Grid container style={{ marginTop: '20px' }}>
                                    <Grid item md={12}>
                                        <Box pl={1} pb={2}>
                                            <Title style={{ fontSize: '15px' }}>
                                                Permutas
                                            </Title>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Barters />
                                <CardActions style={{ marginTop: '10px' }}>
                                    <div className={classes.bottomBoxButtons}>
                                        <Button
                                            className={classes.bottomButton}
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            fullWidth
                                            type="submit"
                                        >
                                            Salvar
                                        </Button>
                                        <Button
                                            className={classes.bottomButton}
                                            variant="contained"
                                            size="medium"
                                            color="primary"
                                            onClick={() =>
                                                removeInterest(interest.id)
                                            }
                                            fullWidth
                                        >
                                            Excluir
                                        </Button>
                                    </div>
                                </CardActions>
                            </Grid>
                        </form>
                    )}
                </Container>
            </Grid>
        </Grid>
    ) : (
        <NewInterest />
    );
}

export default Interest;
