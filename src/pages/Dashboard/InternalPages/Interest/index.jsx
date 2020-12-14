import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import { Box, Checkbox, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm } from 'react-hook-form';

import { Container } from './styles';
import { Title } from '../../../Register/styles';
import { types } from '../../../../constants/PropertyTypes';
import MultilineSelect from '../../../../components/Select/MultilineSelect';
import MonetaryInput from '../../../../components/Input/MonetaryInput';
import GridBox from '../../../../components/GridBox';
import Barters from './Barters';
import {
  ADD_INTEREST,
  EDIT_INTEREST,
  LOAD_INTEREST,
  LOADING_INTEREST,
  REMOVE_INTEREST,
  RESET_SUCCESS_INTEREST,
  HANDLE_DIALOG,
} from '../../../../constants/ActionTypes';
import LoadButton from '../../../../components/Button/LoadButton';
import { getSelectNeighborhoods } from '../../../../utils/neighborhoodUtils';
import FormButton from '../../../../components/Button/FormButton';
import {
  minAndMaxSize,
  setValueInt,
  setValueMonetary,
  totalValue,
} from '../../../../utils/registerUtils';

import AlertDialog from '../../../../components/Dialog';

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

function Interest() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    errors,
  } = useForm();
  const theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);
  const { interest, loadingData, loading, success } = useSelector(
    (state) => state.interest
  );
  const neighborhoods = useSelector(
    (state) => state.neighborhood.neighborhoods
  );
  const [showFinancing, setShowFinancing] = React.useState(interest.financing);

  useEffect(() => {
    dispatch({
      type: RESET_SUCCESS_INTEREST,
    });
    dispatch({
      type: LOAD_INTEREST,
      data: { username },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeInterest = (interestId) => {
    dispatch({
      type: REMOVE_INTEREST,
      interestId,
    });
  };

  const onSubmit = (data) => {
    dispatch({
      type: LOADING_INTEREST,
    });

    if (interest.id) {
      dispatch({
        type: HANDLE_DIALOG,
        data: {
          open: true,
          sysarea: 'INTEREST',
          message:
            'Se você editar o interesse os matches relacionados com o mesmo serão perdidos. Deseja continuar?',
          action: () =>
            dispatch({
              type: EDIT_INTEREST,
              data: {
                ...data,
                barters: interest.barters,
                neighborhoodIds: data.neighborhoodIds
                  ? data.neighborhoodIds.map((neighborhood) => neighborhood.id)
                  : [],
                types: data.types ? data.types.map((type) => type.id) : [],
              },
            }),
        },
      });
    } else {
      dispatch({
        type: ADD_INTEREST,
        data: {
          ...data,
          barters: interest.barters,
          neighborhoodIds: data.neighborhoodIds
            ? data.neighborhoodIds.map((neighborhood) => neighborhood.id)
            : [],
          types: data.types ? data.types.map((type) => type.id) : [],
        },
      });
    }
  };

  return (
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
            inputRef={register(setValueInt())}
            type="hidden"
            id="id"
            name="id"
            value={interest.id}
          />
          <TextField
            inputRef={register()}
            type="hidden"
            id="username"
            name="username"
            value={
              interest?.user?.username ? interest.user.username : username
            }
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <GridBox loadingData={loadingData}>
                <MonetaryInput
                  label="Valor máximo"
                  id="value"
                  labelWidth={100}
                  inputRef={register(setValueMonetary())}
                  helperText={errors?.value && 'Campo obrigatório'}
                  error={errors?.value}
                  value={interest.value}
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <TextField
                  id="dorms"
                  name="dorms"
                  defaultValue={interest.dorms}
                  inputRef={register(minAndMaxSize(1, 1))}
                  helperText={errors?.dorms?.message}
                  error={errors?.dorms}
                  type="number"
                  label="Número de dormitórios"
                  variant="outlined"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <TextField
                  id="bathrooms"
                  name="bathrooms"
                  defaultValue={interest.bathrooms}
                  inputRef={register(minAndMaxSize(1, 1))}
                  helperText={errors?.bathrooms?.message}
                  error={errors?.bathrooms}
                  type="number"
                  label="Número de banheiros"
                  variant="outlined"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <TextField
                  id="suites"
                  name="suites"
                  defaultValue={interest.suites}
                  inputRef={register(minAndMaxSize(1, 1))}
                  helperText={errors?.suites?.message}
                  error={errors?.suites}
                  type="number"
                  label="Número de suites"
                  variant="outlined"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <TextField
                  id="garages"
                  name="garages"
                  defaultValue={interest.garages}
                  inputRef={register(minAndMaxSize(1, 1))}
                  helperText={errors?.garages?.message}
                  error={errors?.garages}
                  type="number"
                  label="Número de garagens"
                  variant="outlined"
                />
              </GridBox>
              <GridBox xs={11} loadingData={loadingData}>
                <MultilineSelect
                  initialState={interest.uiTypes}
                  items={types}
                  control={control}
                  setValue={setValue}
                  label="Tipos"
                  id="types"
                />
              </GridBox>
              <GridBox xs={11} loadingData={loadingData}>
                <MultilineSelect
                  initialState={
                    interest.neighborhoods
                      ? getSelectNeighborhoods(interest.neighborhoods)
                      : []
                  }
                  items={getSelectNeighborhoods(neighborhoods)}
                  control={control}
                  setValue={setValue}
                  label="Bairros"
                  id="neighborhoodIds"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="balcony"
                      name="balcony"
                      color="primary"
                      defaultChecked={interest.balcony}
                      inputRef={register()}
                    />
                  }
                  label="Com sacada"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="elevator"
                      name="elevator"
                      color="primary"
                      defaultChecked={interest.elevator}
                      inputRef={register()}
                    />
                  }
                  label="Com elevador"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="barbecueGrill"
                      name="barbecueGrill"
                      color="primary"
                      defaultChecked={interest.barbecueGrill}
                      inputRef={register()}
                    />
                  }
                  label="Com churrasqueira"
                />
              </GridBox>
              <GridBox loadingData={loadingData}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="pool"
                      name="pool"
                      color="primary"
                      defaultChecked={interest.pool}
                      inputRef={register()}
                    />
                  }
                  label="Com piscina"
                />
              </GridBox>
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item md={12}>
                  <Box pl={1} pb={2}>
                    <Title style={{ fontSize: '15px' }}>Financiamento</Title>
                  </Box>
                </Grid>
              </Grid>
              <GridBox loadingData={loadingData}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="financing"
                      name="financing"
                      color="primary"
                      defaultChecked={interest.financing}
                      onClick={() => setShowFinancing(!showFinancing)}
                      inputRef={register()}
                    />
                  }
                  label="Financiável"
                />
              </GridBox>
              <GridBox xs={10} loadingData={loadingData}>
                {showFinancing && (
                  <MonetaryInput
                    id="financingValue"
                    label="Valor financiado"
                    labelWidth={125}
                    value={interest.financingValue}
                    inputRef={register(totalValue(getValues('value')))}
                    error={errors?.financingValue}
                    helperText={
                      errors?.financingValue &&
                      'Valor de financiamento superior ao valor total'
                    }
                  />
                )}
              </GridBox>
              <Barters />
              <CardActions style={{ marginTop: '10px' }}>
                <div className={classes.bottomBoxButtons}>
                  <LoadButton
                    label="Salvar"
                    type="submit"
                    success={success}
                    loading={loading}
                    loadingData={loadingData}
                  />
                  {interest.id && (
                    <FormButton
                      label="Excluir"
                      onClick={() => removeInterest(interest.id)}
                      loading={loading}
                      loadingData={loadingData}
                    />
                  )}
                </div>
              </CardActions>
            </Grid>
          </form>
        </Container>
        <AlertDialog />
      </Grid>
    </Grid>
  );
}

export default Interest;
