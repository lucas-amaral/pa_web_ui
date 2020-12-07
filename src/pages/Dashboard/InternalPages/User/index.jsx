import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { Box, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import {
    EDIT_USER,
    LOADING_USER,
    RESET_SUCCESS_USER,
} from '../../../../constants/ActionTypes';
import LoadButton from '../../../../components/Button/LoadButton';
import { getDbType, getType } from '../../../../utils/userUtils';
import 'date-fns';
import {
    setValueDate,
    required,
    setValueAs,
} from '../../../../utils/registerUtils';

function User() {
    const { register, handleSubmit, errors, watch } = useForm();
    const dispatch = useDispatch();
    const { user, loadingData, loading, success } = useSelector(
        (state) => state.user
    );
    const [dataOfBirth, setDateOfBirth] = React.useState(user.dateOfBirth);

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_USER,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        dispatch({
            type: LOADING_USER,
        });
        dispatch({
            type: EDIT_USER,
            data,
        });
    };

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    return (
        <Grid container>
            <Grid item md={12}>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title>Usuário</Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container>
                            <GridBox xs={9} loadingData={loadingData}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    defaultValue={user.name}
                                    label="Nome"
                                    variant="outlined"
                                    inputRef={register(required())}
                                    helperText={errors?.name?.message}
                                    error={errors.name}
                                />
                            </GridBox>
                            <GridBox xs={2} loadingData={loadingData}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        style={{ marginTop: 0 }}
                                        name="dateOfBirth"
                                        disableFuture
                                        disableToolbar
                                        openTo="year"
                                        inputVariant="outlined"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        label="Date de nascimento"
                                        value={dataOfBirth}
                                        onChange={handleDateOfBirthChange}
                                        inputRef={register(setValueDate())}
                                        KeyboardButtonProps={{
                                            'aria-label': 'Alterar data',
                                        }}
                                        helperText={
                                            errors?.dateOfBirth &&
                                            'Data inválida'
                                        }
                                    />
                                </MuiPickersUtilsProvider>
                            </GridBox>
                            <GridBox xs={4} loadingData={loadingData}>
                                <TextField
                                    fullWidth
                                    id="username"
                                    name="username"
                                    type="email"
                                    value={user.username}
                                    inputRef={register()}
                                    label="Login"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3} loadingData={loadingData}>
                                <TextField
                                    fullWidth
                                    id="cpfCnpj"
                                    name="cpfCnpj"
                                    defaultValue={user.cpfCnpj}
                                    inputRef={register(required())}
                                    helperText={errors?.cpfCnpj?.message}
                                    error={errors.cpfCnpj}
                                    label="Cpf"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2} loadingData={loadingData}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    name="type"
                                    value={getType(user.type)}
                                    inputRef={register(setValueAs(getDbType))}
                                    aria-readonly
                                    label="Tipo"
                                    variant="outlined"
                                />
                            </GridBox>
                            <Address
                                address={user.address}
                                register={register}
                                errors={errors}
                                watch={watch}
                                loadingData={loadingData}
                            />
                            <CardActions style={{ marginTop: '10px' }}>
                                <LoadButton
                                    label="Salvar"
                                    success={success}
                                    loading={loading}
                                    loadingData={loadingData}
                                />
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default User;
