import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, Select } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ADD_INTEREST_BARTER,
    REMOVE_BARTER_INTEREST,
} from '../../../../../constants/ActionTypes';
import MonetaryInput from '../../../../../components/MonetaryInput';
import { convertMonetaryToNumber } from '../../../../../utils/numbersUtils';

export default function NewBarter() {
    const dispatch = useDispatch();
    const barters = useSelector((state) => state.barter.barters);
    const interestId = useSelector((state) => state.interest.interest.id);
    const { register, getValues, control } = useForm();

    const addBarter = (newId) => {
        const newValue = getValues(`${newId}.value`);
        const newType = getValues(`${newId}.type`);

        dispatch({
            type: ADD_INTEREST_BARTER,
            data: {
                interestId,
                value: convertMonetaryToNumber(newValue),
                type: newType,
            },
        });

        dispatch({
            type: REMOVE_BARTER_INTEREST,
            barterId: newId,
        });
    };

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
