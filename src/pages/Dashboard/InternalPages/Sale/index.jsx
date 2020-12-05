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
} from '../../../../constants/ActionTypes';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/Button/LoadButton';
import { convertMonetaryToNumber } from '../../../../utils/numbersUtils';
import MonetaryInput from '../../../../components/Input/MonetaryInput';
import FormButton from '../../../../components/Button/FormButton';

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
    const { register, handleSubmit } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const property = useSelector((state) => state.property.property);
    const { sale, loading, success } = useSelector((state) => state.sale);

    const propertyId = property.id;

    const [showFinancing, setShowFinancing] = React.useState(sale.financing);
    const [showBarterVehicle, setShowBarterVehicle] = React.useState(
        sale.barterVehicle
    );
    const [showBarterProperty, setShowBarterProperty] = React.useState(
        sale.barterProperty
    );

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_SALE,
        });
        dispatch({
            type: LOAD_SALE,
            data: { propertyId },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        dispatch({
            type: LOADING_SALE,
        });
        dispatch({
            type: sale.id ? EDIT_SALE : ADD_SALE,
            data: {
                ...data,
                value: convertMonetaryToNumber(data.value),
                financingValue: data.financingValue
                    ? convertMonetaryToNumber(data.financingValue)
                    : null,
                barterVehicleValue: data.barterVehicleValue
                    ? convertMonetaryToNumber(data.barterVehicleValue)
                    : null,
                barterPropertyValue: data.barterPropertyValue
                    ? convertMonetaryToNumber(data.barterPropertyValue)
                    : null,
            },
        });
    };

    const removeSale = (saleId) => {
        dispatch({
            type: REMOVE_SALE,
            saleId,
        });
    };

    return (
        <>
            <Grid container>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        <Title>Anúncio</Title>
                    </Box>
                </Grid>
                <TextField
                    inputRef={register()}
                    type="hidden"
                    name="id"
                    defaultValue={sale.id}
                />
                <TextField
                    inputRef={register()}
                    type="hidden"
                    name="propertyId"
                    defaultValue={
                        sale.propertyId ? sale.propertyId : propertyId
                    }
                />
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <GridBox xs={2}>
                        <MonetaryInput
                            label="Valor"
                            id="value"
                            labelWidth={100}
                            inputRef={register()}
                            value={sale.value}
                        />
                    </GridBox>
                    {/* <GridBox xs={9}> */}
                    {/*    <TextField */}
                    {/*        name="agencying" */}
                    {/*        placeholder="dd/MM/yyyy" */}
                    {/*        format="dd/MM/yyyy" */}
                    {/*        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" */}
                    {/*        value={sale.agencying ? sale.agencying : Date.now()} */}
                    {/*        inputRef={register()} */}
                    {/*        type="date" */}
                    {/*        label="Data de cadastro" */}
                    {/*        variant="outlined" */}
                    {/*        InputLabelProps={{ */}
                    {/*            shrink: true, */}
                    {/*        }} */}
                    {/*    /> */}
                    {/* </GridBox> */}
                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title style={{ fontSize: '15px' }}>
                                    Financiamento
                                </Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <GridBox>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="financing"
                                    color="primary"
                                    defaultChecked={sale.financing}
                                    onClick={() =>
                                        setShowFinancing(!showFinancing)
                                    }
                                    inputRef={register()}
                                />
                            }
                            label="Financiável"
                        />
                    </GridBox>
                    <GridBox xs={9}>
                        {showFinancing && (
                            <MonetaryInput
                                id="financingValue"
                                label="Valor financiado"
                                labelWidth={125}
                                value={sale.financingValue}
                                inputRef={register()}
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
                    <GridBox>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="barterVehicle"
                                    color="primary"
                                    defaultChecked={sale.barterVehicle}
                                    onClick={() =>
                                        setShowBarterVehicle(!showBarterVehicle)
                                    }
                                    inputRef={register()}
                                />
                            }
                            label="Veículo como permuta"
                        />
                    </GridBox>
                    <GridBox xs={9}>
                        {showBarterVehicle && (
                            <MonetaryInput
                                id="barterVehicleValue"
                                label="Valor máximo veículo"
                                labelWidth={125}
                                value={sale.barterVehicleValue}
                                inputRef={register()}
                            />
                        )}
                    </GridBox>
                    <GridBox>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="barterProperty"
                                    color="primary"
                                    defaultChecked={sale.barterProperty}
                                    onClick={() =>
                                        setShowBarterProperty(
                                            !showBarterProperty
                                        )
                                    }
                                    inputRef={register()}
                                />
                            }
                            label="Imóvel como permuta"
                        />
                    </GridBox>
                    <GridBox xs={9}>
                        {showBarterProperty && (
                            <MonetaryInput
                                id="barterPropertyValue"
                                label="Valor máximo imóvel"
                                labelWidth={125}
                                value={sale.barterPropertyValue}
                                inputRef={register()}
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
                            />
                            {sale.id && (
                                <FormButton
                                    label="Excluir"
                                    onClick={() => removeSale(sale.id)}
                                    loading={loading}
                                />
                            )}
                        </div>
                    </CardActions>
                </Grid>
            </form>
        </>
    );
}
