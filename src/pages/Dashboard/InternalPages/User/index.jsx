import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { Box, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import { EDIT_USER } from '../../../../constants/ActionTypes';
import LoadButton from '../../../../components/LoadButton';

function User() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    function getType(type) {
        return type !== 'LEGAL' ? 'Pessoa Física' : 'Pessoa Jurídica';
    }

    function getDbType(type) {
        return type === 'Pessoa Física' ? 'FISICAL' : 'LEGAL';
    }

    const onSubmit = (data) => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            dispatch({
                type: EDIT_USER,
                data: { ...data, type: getDbType(data.type) },
            });
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
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
                            <GridBox xs={9}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    defaultValue={user.name}
                                    inputRef={register()}
                                    label="Nome"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    placeholder="dd/MM/yyyy"
                                    format="dd/MM/yyyy"
                                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                    defaultValue={user.dateOfBirth}
                                    inputRef={register()}
                                    type="date"
                                    label="Data de nascimento"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </GridBox>
                            <GridBox xs={4}>
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
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="cpfCnpj"
                                    name="cpfCnpj"
                                    defaultValue={user.cpfCnpj}
                                    inputRef={register()}
                                    label="Cpf"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    name="type"
                                    value={getType(user.type)}
                                    inputRef={register()}
                                    aria-readonly
                                    label="Tipo"
                                    variant="outlined"
                                />
                            </GridBox>
                            <Address
                                address={user.address}
                                register={register()}
                            />
                            <CardActions style={{ marginTop: '10px' }}>
                                <LoadButton
                                    label="Salvar"
                                    success={success}
                                    loading={loading}
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
