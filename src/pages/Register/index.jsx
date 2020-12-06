import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Grid, Box, TextField, Select, MenuItem } from '@material-ui/core';
import { save } from '../../services/users';

import {
  Title,
  Container,
  BackGround,
  StyledButton,
  StyledLink,
} from './styles';

import Header from '../Home/Header';

export default function Register() {
  const defaultValues = {
    type: 'FISICAL',
  };

  const { register, handleSubmit, control } = useForm({ defaultValues });

  const onSubmit = async (data) => save(data);

  return (
    <BackGround>
      <Header />
      <Grid container justify="center" alignItems="center">
        <Grid item md={12}>
          <Container>
            <Grid container>
              <Grid item md={12}>
                <Box pl={1} pb={2}>
                  <Title>Novo Usuário</Title>
                </Box>
              </Grid>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container>
                <Grid item xs={12}>
                  <Box p={1}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Nome e Sobrenome"
                      name="name"
                      inputRef={register()}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="E-Mail"
                      name="username"
                      inputRef={register()}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="CPF ou CNPJ"
                      name="cpfCnpj"
                      inputRef={register()}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <Controller
                      name="type"
                      control={control}
                      as={
                        <Select
                          fullWidth
                          variant="outlined"
                          placeholder="Selecione o tipo"
                        >
                          <MenuItem value="FISICAL">Físico</MenuItem>
                        </Select>
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box p={1}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Senha"
                      type="password"
                      name="password"
                      inputRef={register()}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box p={1}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Digite novamente a senha"
                      type="password"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <StyledButton
                      size="large"
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Cadastrar
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <StyledLink to="/">Voltar para Home</StyledLink>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Grid>
      </Grid>
    </BackGround>
  );
}
