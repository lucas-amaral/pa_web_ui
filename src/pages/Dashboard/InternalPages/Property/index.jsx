import React, { useEffect } from 'react';
import { Box, Checkbox, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container } from '../User/styles';
import { Title } from '../../../Register/styles';
import {
    EDIT_PROPERTY,
    LOAD_PROPERTY,
} from '../../../../constants/ActionTypes';
import { types } from '../../../../constants/PropertyTypes';
import ControlledSelect from '../../../../components/ControlledSelect';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';

export default function Property() {
    const { register, handleSubmit, control } = useForm();
    const dispatch = useDispatch();
    const data = { username: localStorage.getItem('username') };
    const property = useSelector((state) => state.property.property);

    useEffect(() => {
        // dispatch({
        //     type: LOAD_PROPERTY,
        //     data,
        // });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) =>
        dispatch({
            type: EDIT_PROPERTY,
            data: { ...data },
        });

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
                            defaultValue={property.user.username}
                        />
                        <TextField
                            inputRef={register()}
                            type="hidden"
                            name="enable"
                            value
                            defaultValue={property.enable}
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
                                    name="register"
                                    defaultValue={property.register}
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
                                    defaultValue={property.type}
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
                                    label="No de dormitórios"
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
                                    label="No de banheiros"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    id="suites"
                                    name="suites"
                                    defaultValue={property.suites}
                                    inputRef={register()}
                                    type="number"
                                    label="No de suites"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    id="garages"
                                    name="garages"
                                    defaultValue={property.garages}
                                    inputRef={register()}
                                    type="number"
                                    label="No de garagens"
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
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}
