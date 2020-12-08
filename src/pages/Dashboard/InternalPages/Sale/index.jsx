import React, { useEffect } from 'react';
import { Box, Checkbox, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Title } from '../../../Register/styles';
import {
    ADD_SALE,
    EDIT_SALE,
    LOAD_SALE,
    LOADING_SALE,
    REMOVE_SALE,
    RESET_SUCCESS_SALE,
    UPDATE_BARTER_PROPERTY_SALE,
    UPDATE_BARTER_VEHICLE_SALE,
    UPDATE_FINANCING_SALE,
} from '../../../../constants/ActionTypes';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/Button/LoadButton';
import MonetaryInput from '../../../../components/Input/MonetaryInput';
import FormButton from '../../../../components/Button/FormButton';
import {
    number,
    setValueMonetary,
    totalValue,
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

export default function Sale() {
    const { register, handleSubmit, errors, getValues } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const value = getValues('value');
    const financingValue = getValues('financingValue');
    const vehicleValue = getValues('barterVehicleValue');
    const propertyValue = getValues('barterPropertyValue');
    const totalValueMessage =
        'Valor de financiamento e permutas superior ao valor total';

    const property = useSelector((state) => state.property.property);
    const {
        sale,
        loading,
        loadingData,
        success,
        showFinancing,
        showBarterProperty,
        showBarterVehicle,
    } = useSelector((state) => state.sale);

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_SALE,
        });
        dispatch({
            type: LOAD_SALE,
            data: { propertyId: property.id },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        dispatch({
            type: LOADING_SALE,
        });
        dispatch({
            type: sale.id ? EDIT_SALE : ADD_SALE,
            data,
        });
    };

    const removeSale = (saleId) => {
        dispatch({
            type: REMOVE_SALE,
            saleId,
        });
    };

    function setShowFinancing() {
        dispatch({
            type: UPDATE_FINANCING_SALE,
        });
    }

    function setShowBarterProperty() {
        dispatch({
            type: UPDATE_BARTER_PROPERTY_SALE,
        });
    }

    function setShowBarterVehicle() {
        dispatch({
            type: UPDATE_BARTER_VEHICLE_SALE,
        });
    }

    return (
        <>
            <Grid container>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        <Title>Anúncio</Title>
                    </Box>
                </Grid>
                <TextField
                    inputRef={register(number())}
                    type="hidden"
                    name="id"
                    defaultValue={sale.id}
                />
                <TextField
                    inputRef={register(number())}
                    type="hidden"
                    name="propertyId"
                    defaultValue={
                        sale.propertyId ? sale.propertyId : property.id
                    }
                />
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <GridBox xs={2} loadingData={loadingData}>
                        <MonetaryInput
                            label="Valor"
                            id="value"
                            labelWidth={100}
                            inputRef={register(setValueMonetary())}
                            helperText={errors?.value && 'Campo obrigatório'}
                            error={errors?.value}
                            value={sale.value}
                        />
                    </GridBox>
                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title style={{ fontSize: '15px' }}>
                                    Financiamento
                                </Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <GridBox loadingData={loadingData}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="financing"
                                    color="primary"
                                    defaultChecked={sale.financing}
                                    onClick={() => setShowFinancing()}
                                    inputRef={register()}
                                />
                            }
                            label="Financiável"
                        />
                    </GridBox>
                    <GridBox xs={9} loadingData={loadingData}>
                        {showFinancing && (
                            <MonetaryInput
                                id="financingValue"
                                label="Valor financiado"
                                labelWidth={125}
                                value={sale.financingValue}
                                inputRef={register(
                                    totalValue(
                                        value,
                                        propertyValue,
                                        vehicleValue
                                    )
                                )}
                                error={errors?.financingValue}
                                helperText={
                                    errors?.financingValue && totalValueMessage
                                }
                            />
                        )}
                    </GridBox>
                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title style={{ fontSize: '15px' }}>
                                    Permutas
                                </Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <GridBox loadingData={loadingData}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="barterVehicle"
                                    color="primary"
                                    defaultChecked={sale.barterVehicle}
                                    onClick={() => setShowBarterVehicle()}
                                    inputRef={register()}
                                />
                            }
                            label="Veículo como permuta"
                        />
                    </GridBox>
                    <GridBox xs={9} loadingData={loadingData}>
                        {showBarterVehicle && (
                            <MonetaryInput
                                id="barterVehicleValue"
                                label="Valor máximo veículo"
                                labelWidth={125}
                                value={sale.barterVehicleValue}
                                inputRef={register(
                                    totalValue(
                                        value,
                                        financingValue,
                                        propertyValue
                                    )
                                )}
                                error={errors?.barterVehicleValue}
                                helperText={
                                    errors?.barterVehicleValue &&
                                    totalValueMessage
                                }
                            />
                        )}
                    </GridBox>
                    <GridBox loadingData={loadingData}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="barterProperty"
                                    color="primary"
                                    defaultChecked={sale.barterProperty}
                                    onClick={() => setShowBarterProperty()}
                                    inputRef={register()}
                                />
                            }
                            label="Imóvel como permuta"
                        />
                    </GridBox>
                    <GridBox xs={9} loadingData={loadingData}>
                        {showBarterProperty && (
                            <MonetaryInput
                                id="barterPropertyValue"
                                label="Valor máximo imóvel"
                                labelWidth={125}
                                value={sale.barterPropertyValue}
                                inputRef={register(
                                    totalValue(
                                        value,
                                        financingValue,
                                        vehicleValue
                                    )
                                )}
                                error={errors?.barterPropertyValue}
                                helperText={
                                    errors?.barterPropertyValue &&
                                    totalValueMessage
                                }
                            />
                        )}
                    </GridBox>
                    <CardActions style={{ marginTop: '10px' }}>
                        <div className={classes.bottomBoxButtons}>
                            <LoadButton
                                label="Salvar"
                                type="submit"
                                success={success}
                                loading={loading}
                                loadingData={loadingData}
                            />
                            {sale.id && (
                                <FormButton
                                    label="Excluir"
                                    onClick={() => removeSale(sale.id)}
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
