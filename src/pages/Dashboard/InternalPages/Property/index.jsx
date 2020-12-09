import React, { useEffect } from 'react';
import { Box, Checkbox, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
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
import ControlledSelect from '../../../../components/Select/ControlledSelect';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/Button/LoadButton';
import Garages from './Garages';
import FormButton from '../../../../components/Button/FormButton';
import {
  minAndMaxSize,
  number,
  setValueInt,
} from '../../../../utils/registerUtils';

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
  const { register, handleSubmit, control, errors, watch } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.user.username);
  const { property, loadingData, loading, success } = useSelector(
    (state) => state.property
  );

  useEffect(() => {
    dispatch({
      type: RESET_SUCCESS_PROPERTY,
    });
    dispatch({
      type: LOAD_PROPERTY,
      data: {
        username,
      },
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
    <>
      <Grid container>
        <Grid item md={12}>
          <Box pl={1} pb={2}>
            <Title>Imóvel</Title>
          </Box>
        </Grid>
        <TextField
          inputRef={register(setValueInt())}
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
          <GridBox xs={11} loadingData={loadingData}>
            <TextField
              fullWidth
              name="description"
              defaultValue={property.description}
              inputRef={register({ required: true })}
              helperText={errors?.description?.message}
              error={errors?.description}
              label="Descrição"
              variant="outlined"
            />
          </GridBox>
          <GridBox xs={2} loadingData={loadingData}>
            <ControlledSelect
              id="type"
              label="Tipo do imóvel"
              defaultValue={property.type ? property.type : 'HOUSE'}
              values={types}
              control={control}
            />
          </GridBox>
          <GridBox xs={2} loadingData={loadingData}>
            <TextField
              fullWidth
              name="area"
              defaultValue={property.area}
              inputRef={register(number())}
              helperText={errors?.area && 'Insira apenas números'}
              error={errors?.area}
              label="Area"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">m²</InputAdornment>
                ),
              }}
            />
          </GridBox>
          <GridBox xs={3} loadingData={loadingData}>
            <TextField
              fullWidth
              name="registration"
              defaultValue={property.registration}
              inputRef={register(number())}
              helperText={
                errors?.registration && 'Campo númerico. Insira apenas números'
              }
              error={errors?.registration}
              label="Registro"
              variant="outlined"
            />
          </GridBox>
          <GridBox xs={3} loadingData={loadingData}>
            <TextField
              fullWidth
              name="iptu"
              defaultValue={property.iptu}
              inputRef={register(number())}
              helperText={
                errors?.iptu && 'Campo númerico. Insira apenas números'
              }
              error={errors?.iptu}
              label="Número do IPTU"
              variant="outlined"
            />
          </GridBox>
          <GridBox xs={2} loadingData={loadingData}>
            <TextField
              id="dorms"
              name="dorms"
              defaultValue={property.dorms}
              inputRef={register(minAndMaxSize(1, 1))}
              helperText={errors?.dorms?.message}
              error={errors?.dorms}
              type="number"
              label="Nº de dormitórios"
              variant="outlined"
            />
          </GridBox>
          <GridBox xs={2} loadingData={loadingData}>
            <TextField
              id="bathrooms"
              name="bathrooms"
              defaultValue={property.bathrooms}
              inputRef={register(minAndMaxSize(1, 1))}
              helperText={errors?.bathrooms?.message}
              error={errors?.bathrooms}
              type="number"
              label="Nº de banheiros"
              variant="outlined"
            />
          </GridBox>
          <GridBox xs={7} loadingData={loadingData}>
            <TextField
              id="suites"
              name="suites"
              defaultValue={property.suites}
              inputRef={register(minAndMaxSize(1, 1))}
              helperText={errors?.suites?.message}
              error={errors?.suites}
              type="number"
              label="Nº de suites"
              variant="outlined"
            />
          </GridBox>
          <GridBox loadingData={loadingData}>
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
              label="Possui sacada"
            />
          </GridBox>
          <GridBox loadingData={loadingData}>
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
              label="Possui elevador"
            />
          </GridBox>
          <GridBox loadingData={loadingData}>
            <FormControlLabel
              control={
                <Checkbox
                  id="barbecueGrill"
                  name="barbecueGrill"
                  color="primary"
                  defaultChecked={property.barbecueGrill}
                  inputRef={register()}
                />
              }
              label="Possui churrasqueira"
            />
          </GridBox>
          <GridBox loadingData={loadingData}>
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
              label="Possui piscina"
            />
          </GridBox>
          <Address
            address={property.address}
            register={register}
            errors={errors}
            watch={watch}
            required
            loadingData={loadingData}
          />
          <Garages garages={property.garages} />
          <CardActions style={{ marginTop: '10px' }}>
            <div className={classes.bottomBoxButtons}>
              <LoadButton
                label="Salvar"
                type="submit"
                success={success}
                loading={loading}
                loadingData={loadingData}
              />
              {property.id && (
                <FormButton
                  label="Excluir"
                  onClick={() => removeProperty(property.id)}
                  loading={loading}
                  loadingData={loadingData}
                />
              )}
            </div>
          </CardActions>
        </Grid>
      </form>
    </>
  );
}
