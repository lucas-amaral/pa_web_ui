import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Box, Grid } from '@material-ui/core';

import { Types as UserTypes } from "../../../../store/ducks/users";
import { Container } from "./styles";
import { Title } from "../../../Register/styles";
import GridBox from "../../../../components/GridBox";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    card: {
        width: "100%",
    },
    fields: {
        margin: 10,
    },
    bottomBoxButtons: {
        display: "flex",
        width: 475,
        justifyContent: "space-between",
    },
    bottomButton: {
        margin: 5,
    },
}));

function User() {
    const classes = useStyles();
    const dataUser = { username: localStorage.getItem("username") };
    const dispatch = useDispatch();
    let user = useSelector((state) => state.user.user);

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    useEffect(() => {
        dispatch({
            type: UserTypes.LOAD_USER,
            dataUser,
        });
    }, []);

    if (user.payload) {
        user = user.payload;
    }

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
                    <form>
                        <Grid container>
                            <GridBox xs={11}>
                                <TextField style={{width: '100%'}}
                                    id="name"
                                    defaultValue={user.name}
                                    label="Nome"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={11}>
                                <TextField style={{width: '100%'}}
                                    id="login"
                                    defaultValue={user.username}
                                    label="Login"
                                    variant="outlined"
                                />
                            </GridBox>
                            {/*<GridBox xs={5}>*/}
                            {/*    <TextField*/}
                            {/*        id="password"*/}
                            {/*        defaultValue={user.password}*/}
                            {/*        type="password"*/}
                            {/*        label="Senha"*/}
                            {/*        variant="outlined"*/}
                            {/*        endAdornment={*/}
                            {/*            <InputAdornment position="end">*/}
                            {/*                <IconButton*/}
                            {/*                    aria-label="toggle password visibility"*/}
                            {/*                    onClick={handleClickShowPassword}*/}
                            {/*                    onMouseDown={handleMouseDownPassword}*/}
                            {/*                >*/}
                            {/*                    {values.showPassword ? <Visibility /> : <VisibilityOff />}*/}
                            {/*                </IconButton>*/}
                            {/*            </InputAdornment>*/}
                            {/*        }*/}

                            {/*    />*/}
                            {/*</GridBox>*/}
                            <GridBox xs={3}>
                                <TextField style={{width: '90%'}}
                                    id="dateOfBirth"
                                    defaultValue={user.dateOfBirth}
                                    type="date"
                                    label="Data de nascimento"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField style={{width: '90%'}}
                                    id="type"
                                    value={user.type}
                                    aria-readonly={true}
                                    label="Tipo"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField style={{width: '90%'}}
                                    id="cpf"
                                    value={user.cpfCnpj}
                                    label="Cpf"
                                    variant="outlined"
                                />
                            </GridBox>
                            <CardActions style={{marginTop: "10px"}}>
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
                                </div>
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default User;
