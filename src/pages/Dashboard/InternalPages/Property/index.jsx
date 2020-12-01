import React, { useEffect } from 'react';
import { Box, Checkbox, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '../User/styles';
import { Title } from '../../../Register/styles';
import {
    ADD_PROPERTY,
    EDIT_PROPERTY,
    LOAD_PROPERTY,
    LOADING_PROPERTY,
    REMOVE_PROPERTY,
    RESET_SUCCESS_PROPERTY,
} from '../../../../constants/ActionTypes';
import { types } from '../../../../constants/PropertyTypes';
import ControlledSelect from '../../../../components/ControlledSelect';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/LoadButton';
import Garages from './Garages';

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

export default function Property() {
    const { register, handleSubmit, control } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const username = localStorage.getItem('username');
    const data = { username };

    const property = useSelector((state) => state.property.property);
    const loading = useSelector((state) => state.property.loading);
    const success = useSelector((state) => state.property.success);

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_PROPERTY,
        });
        dispatch({
            type: LOAD_PROPERTY,
            data,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (formData) => {
        dispatch({
            type: LOADING_PROPERTY,
        });
        dispatch({
            type: property.id ? EDIT_PROPERTY : ADD_PROPERTY,
            data: {
                ...formData,
                id: parseFloat(formData.id),
                area: parseFloat(formData.area),
                iptu: parseFloat(formData.iptu),
                registration: parseFloat(formData.registration),
                garages: property.garages,
            },
        });
    };

    const removeProperty = (propertyId) => {
        dispatch({
            type: REMOVE_PROPERTY,
            propertyId,
        });
    };

    return (
        <Grid container>
            <Grid item md={12}>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title>Imóvel</Title>
                            </Box>
                        </Grid>
                        <TextField
                            inputRef={register()}
                            type="hidden"
                            name="id"
                            defaultValue={property.id}
                        />
                        <TextField
                            inputRef={register()}
                            type="hidden"
                            name="username"
                            defaultValue={
                                property.user && property.username
                                    ? property.user.username
                                    : username
                            }
                        />
                    </Grid>
                    {property.id && (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container>
                                <GridBox xs={11}>
                                    <TextField
                                        fullWidth
                                        name="description"
                                        defaultValue={property.description}
                                        inputRef={register()}
                                        label="Descrição"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={3}>
                                    <TextField
                                        fullWidth
                                        name="area"
                                        type="number"
                                        defaultValue={property.area}
                                        inputRef={register()}
                                        label="Area"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={4}>
                                    <TextField
                                        fullWidth
                                        name="registration"
                                        defaultValue={property.registration}
                                        inputRef={register()}
                                        label="Registro"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={3}>
                                    <TextField
                                        fullWidth
                                        name="iptu"
                                        defaultValue={property.iptu}
                                        inputRef={register()}
                                        label="Número do IPTU"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={2}>
                                    <ControlledSelect
                                        id="type"
                                        label="Tipo do imóvel"
                                        defaultValue={
                                            property.type
                                                ? property.type
                                                : 'HOUSE'
                                        }
                                        values={types}
                                        control={control}
                                    />
                                </GridBox>
                                <GridBox xs={2}>
                                    <TextField
                                        id="dorms"
                                        name="dorms"
                                        defaultValue={property.dorms}
                                        inputRef={register()}
                                        type="number"
                                        label="Nº de dormitórios"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={2}>
                                    <TextField
                                        id="bathrooms"
                                        name="bathrooms"
                                        defaultValue={property.bathrooms}
                                        inputRef={register()}
                                        type="number"
                                        label="Nº de banheiros"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox xs={5}>
                                    <TextField
                                        id="suites"
                                        name="suites"
                                        defaultValue={property.suites}
                                        inputRef={register()}
                                        type="number"
                                        label="Nº de suites"
                                        variant="outlined"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="balcony"
                                                name="balcony"
                                                color="primary"
                                                defaultChecked={
                                                    property.balcony
                                                }
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
                                                defaultChecked={
                                                    property.elevator
                                                }
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com elevador"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="barbecueGrill"
                                                name="barbecueGrill"
                                                color="primary"
                                                defaultChecked={
                                                    property.barbecueGrill
                                                }
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com churrasqueira"
                                    />
                                </GridBox>
                                <GridBox>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                id="pool"
                                                name="pool"
                                                color="primary"
                                                defaultChecked={property.pool}
                                                inputRef={register()}
                                            />
                                        }
                                        label="Com piscina"
                                    />
                                </GridBox>
                                <Address
                                    address={property.address}
                                    register={register()}
                                />
                                <Garages garages={property.garages} />
                                <CardActions style={{ marginTop: '10px' }}>
                                    <div className={classes.bottomBoxButtons}>
                                        <LoadButton
                                            label="Salvar"
                                            type="submit"
                                            success={success}
                                            loading={loading}
                                        />
                                        {property.id && (
                                            <div
                                                style={{
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                }}
                                            >
                                                <div>
                                                    <Button
                                                        style={{
                                                            width: '230px',
                                                            height: '38px',
                                                        }}
                                                        className={
                                                            classes.bottomButton
                                                        }
                                                        variant="contained"
                                                        size="medium"
                                                        color="primary"
                                                        onClick={() =>
                                                            removeProperty(
                                                                property.id
                                                            )
                                                        }
                                                        fullWidth
                                                    >
                                                        Excluir
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardActions>
                            </Grid>
                        </form>
                    )}
                </Container>
            </Grid>
        </Grid>
    );
}
