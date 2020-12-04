import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '../User/styles';
import { Title } from '../../../Register/styles';
import {
    ADD_BARTER_IMAGE,
    EDIT_BARTER,
    LOAD_BARTER_IMAGES,
    LOADING_BARTER,
    REMOVE_BARTER,
    REMOVE_BARTER_IMAGE,
    RESET_SUCCESS_BARTER,
    SET_CONTENT_BODY,
} from '../../../../constants/ActionTypes';
import GridBox from '../../../../components/GridBox';
import LoadButton from '../../../../components/Button/LoadButton';
import { convertMonetaryToNumber } from '../../../../utils/numbersUtils';
import MonetaryInput from '../../../../components/Input/MonetaryInput';
import ControlledSelect from '../../../../components/Select/ControlledSelect';
import { types } from '../../../../constants/BarterTypes';
import FormButton from '../../../../components/Button/FormButton';
import Images from '../Images';

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
    bottomButton: {
        margin: 5,
    },
}));

export default function Barter() {
    const { register, handleSubmit, control } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const interestId = useSelector((state) => state.interest.interest.id);
    const { barter, images, loading, success } = useSelector(
        (state) => state.barter
    );

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_BARTER,
        });
        dispatch({
            type: LOAD_BARTER_IMAGES,
            barterId: barter.id,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        dispatch({
            type: LOADING_BARTER,
        });
        dispatch({
            type: EDIT_BARTER,
            data: {
                ...data,
                interestId,
                value: convertMonetaryToNumber(data.value),
            },
        });
    };

    function goBackInterest() {
        dispatch({
            type: SET_CONTENT_BODY,
            contentBody: 'interest',
        });
    }

    const removeBarter = async (barterId) => {
        await dispatch({
            type: REMOVE_BARTER,
            barterId,
        });
        goBackInterest();
    };

    return (
        <Grid container>
            <Grid item md={12}>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title>Permuta</Title>
                            </Box>
                        </Grid>
                        <TextField
                            inputRef={register()}
                            type="hidden"
                            name="id"
                            defaultValue={barter.id}
                        />
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container>
                            <GridBox xs={3}>
                                <ControlledSelect
                                    id="type"
                                    label="Tipo"
                                    defaultValue={
                                        barter.type ? barter.type : 'VEHICLE'
                                    }
                                    values={types}
                                    control={control}
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <MonetaryInput
                                    id="value"
                                    label="Valor"
                                    inputRef={register()}
                                    value={barter.value}
                                />
                            </GridBox>
                            <Images
                                parentId={barter.id}
                                parentLabelId="barterId"
                                images={images}
                                type_add={ADD_BARTER_IMAGE}
                                type_remove={REMOVE_BARTER_IMAGE}
                            />
                            <CardActions style={{ marginTop: '10px' }}>
                                <div className={classes.bottomBoxButtons}>
                                    <LoadButton
                                        label="Salvar"
                                        type="submit"
                                        success={success}
                                        loading={loading}
                                    />
                                    <FormButton
                                        label="Excluir"
                                        onClick={() => removeBarter(barter.id)}
                                    />
                                    <FormButton
                                        label="Voltar"
                                        onClick={() => goBackInterest()}
                                    />
                                </div>
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}
