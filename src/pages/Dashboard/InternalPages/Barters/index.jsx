import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CheckIcon from '@material-ui/icons/Check';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem, Select } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { types } from '../../../../constants/BarterTypes';
import {
    ADD_INTEREST_BARTER,
    REMOVE_INTEREST_BARTER,
    CREATE_BARTER_INTEREST,
    REMOVE_BARTER_INTEREST,
} from '../../../../constants/ActionTypes';
import MonetaryInput from '../../../../components/MonetaryInput';
import { convertMonetaryToNumber } from '../../../../utils/numbersUtils';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Barters() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const interest = useSelector((state) => state.interest.interest);
    const barters = useSelector((state) => state.barter.barters);
    const { register, getValues, control } = useForm();

    function getBarterType(apiType) {
        return types
            .filter((type) => apiType === type.id)
            .map((type) => type.value);
    }

    const removeBarter = (barterId) => {
        dispatch({
            type: REMOVE_INTEREST_BARTER,
            barterId,
        });
    };

    const addBarter = (newId) => {
        const newValue = getValues(`${newId}.value`);
        const newType = getValues(`${newId}.type`);

        dispatch({
            type: ADD_INTEREST_BARTER,
            data: {
                interestId: interest.id,
                value: convertMonetaryToNumber(newValue),
                type: newType,
            },
        });

        dispatch({
            type: REMOVE_BARTER_INTEREST,
            barterId: newId,
        });
    };

    function generateRows() {
        return barters.map((newBarter) => {
            return (
                <TableRow key={newBarter.newId}>
                    <TableCell component="th" scope="row">
                        <Controller
                            name={`${newBarter.newId}.type`}
                            control={control}
                            defaultValue={newBarter.type}
                            as={
                                <Select
                                    variant="outlined"
                                    style={{ height: '40px' }}
                                >
                                    <MenuItem value="VEHICLE">Veículo</MenuItem>
                                    <MenuItem value="PROPERTY">Imóvel</MenuItem>
                                </Select>
                            }
                        />
                    </TableCell>
                    <TableCell align="right">
                        <MonetaryInput
                            id={`${newBarter.newId}.value`}
                            label="Valor"
                            inputRef={register()}
                            value={newBarter.value}
                            size="small"
                        />
                    </TableCell>
                    <TableCell
                        align="center"
                        style={{ width: '5px', whiteSpace: 'nowrap' }}
                    >
                        <IconButton
                            aria-label="Adicionar permuta"
                            color="inherit"
                            key="add-barter"
                            data-tip="Adicionar permuta"
                            onClick={() => addBarter(newBarter.newId)}
                        >
                            <CheckIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Remover permuta"
                            color="inherit"
                            key="delete-barter"
                            data-tip="Remover permuta"
                            onClick={() =>
                                dispatch({
                                    type: REMOVE_BARTER_INTEREST,
                                    barterId: newBarter.newId,
                                })
                            }
                        >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        });
    }

    return (
        <TableContainer>
            <Table className={classes.table}>
                <caption style={{ textAlign: 'right' }}>
                    Adicionar permuta
                    <IconButton
                        aria-label="Adicionar permuta"
                        color="inherit"
                        key="add-barter"
                        data-tip="Adicionar permuta"
                        onClick={() =>
                            dispatch({ type: CREATE_BARTER_INTEREST })
                        }
                    >
                        <AddCircleIcon />
                    </IconButton>
                </caption>
                <TableBody>
                    {interest.barters.map((barter) => (
                        <TableRow key={barter.id}>
                            <TableCell component="th" scope="row">
                                {getBarterType(barter.type)}
                            </TableCell>
                            <TableCell align="right">
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(barter.value)}
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{ width: '5px', whiteSpace: 'nowrap' }}
                            >
                                <IconButton
                                    aria-label="Ver fotos"
                                    color="inherit"
                                    data-tip="Ver fotos"
                                >
                                    <PhotoLibraryIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="Remover permuta"
                                    color="inherit"
                                    key="delete-barter"
                                    data-tip="Remover permuta"
                                    onClick={() => removeBarter(barter.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    {generateRows()}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
