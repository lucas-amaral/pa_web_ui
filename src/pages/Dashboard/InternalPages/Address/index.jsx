import { Box, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridBox from '../../../../components/GridBox';
import { Title } from '../../../Register/styles';
import { LOAD_STREET } from '../../../../constants/ActionTypes';

export default function Address({ address, register, loadingData }) {
    const dispatch = useDispatch();
    const street = useSelector((state) => state.street.street);

    function findStreet(event) {
        dispatch({
            type: LOAD_STREET,
            zipCode: event.target.value,
        });
    }

    return (
        <>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        <Title style={{ fontSize: '15px' }}>Endereço</Title>
                    </Box>
                </Grid>
            </Grid>
            <TextField
                inputRef={register}
                type="hidden"
                id="address.id"
                name="address.id"
                defaultValue={address ? address.id : null}
            />
            <GridBox xs={3} loadingData={loadingData}>
                <TextField
                    fullWidth
                    id="address.streetId"
                    name="address.streetId"
                    defaultValue={
                        address && address.street
                            ? address.street.zipCode
                            : null
                    }
                    inputRef={register}
                    onChange={findStreet}
                    label="Cep"
                    variant="outlined"
                />
            </GridBox>
            <GridBox xs={8} loadingData={loadingData}>
                <TextField
                    fullWidth
                    id="street"
                    defaultValue={
                        address && address.street ? address.street.name : ' '
                    }
                    value={street.name}
                    label="Rua"
                    aria-readonly
                    variant="outlined"
                />
            </GridBox>
            <GridBox xs={3} loadingData={loadingData}>
                <TextField
                    fullWidth
                    id="number"
                    name="address.number"
                    defaultValue={address ? address.number : null}
                    inputRef={register}
                    label="Número"
                    variant="outlined"
                />
            </GridBox>
            <GridBox xs={5} loadingData={loadingData}>
                <TextField
                    fullWidth
                    id="complement"
                    name="address.complement"
                    defaultValue={address ? address.complement : null}
                    inputRef={register}
                    label="Complemento"
                    variant="outlined"
                />
            </GridBox>
        </>
    );
}
