import React, { useEffect } from 'react';
import { Box, Checkbox, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Container } from '../User/styles';
import { Title } from '../../../Register/styles';
import {
    ADD_PROPERTY,
    ADD_PROPERTY_IMAGE,
    EDIT_PROPERTY,
    LOAD_PROPERTY,
    LOADING_PROPERTY,
    REMOVE_PROPERTY,
    REMOVE_PROPERTY_IMAGE,
    RESET_SUCCESS_PROPERTY,
} from '../../../../constants/ActionTypes';
import { types } from '../../../../constants/PropertyTypes';
import ControlledSelect from '../../../../components/Select/ControlledSelect';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/Button/LoadButton';
import Garages from './Garages';
import FormButton from '../../../../components/Button/FormButton';
import Images from '../Images';

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
}));

export default function Property() {
    const { register, handleSubmit, control } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.user.username);
    const { property, images, loading, success } = useSelector(
        (state) => state.property
    );

    const data = { username };

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
                            <GridBox xs={2}>
                                <ControlledSelect
                                    id="type"
                                    label="Tipo do imóvel"
                                    defaultValue={
                                        property.type ? property.type : 'HOUSE'
                                    }
                                    values={types}
                                    control={control}
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    name="area"
                                    defaultValue={property.area}
                                    inputRef={register()}
                                    label="Area"
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                m²
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </GridBox>
                            <GridBox xs={3}>
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
                            <GridBox xs={7}>
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
                                            defaultChecked={property.balcony}
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
                                            defaultChecked={property.elevator}
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
                            <Images
                                parentId={property.id}
                                parentLabelId="propertyId"
                                images={images}
                                type_add={ADD_PROPERTY_IMAGE}
                                type_remove={REMOVE_PROPERTY_IMAGE}
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
                                        <FormButton
                                            label="Excluir"
                                            onClick={() =>
                                                removeProperty(property.id)
                                            }
                                        />
                                    )}
                                </div>
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}
