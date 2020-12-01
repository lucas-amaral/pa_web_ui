import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {
    ADD_PROPERTY_GARAGE,
    REMOVE_GARAGE,
} from '../../../../../constants/ActionTypes';

export default function NewGarage() {
    const dispatch = useDispatch();
    const garages = useSelector((state) => state.garage.garages);
    const propertyId = useSelector((state) => state.property.property.id);
    const { register, getValues } = useForm();

    function removeGarage(newId) {
        return dispatch({
            type: REMOVE_GARAGE,
            garageId: newId,
        });
    }

    const addGarage = (newId) => {
        const box = getValues(`${newId}.box`);
        const registration = getValues(`${newId}.registration`);

        dispatch({
            type: ADD_PROPERTY_GARAGE,
            data: {
                newId,
                propertyId,
                box,
                registration,
            },
        });

        removeGarage(newId);
    };

    return garages.map((newGarage) => {
        return (
            <TableRow key={newGarage.newId}>
                <TableCell component="th" scope="row">
                    <TextField
                        fullWidth
                        name={`${newGarage.newId}.box`}
                        inputRef={register()}
                        label="Box"
                        type="number"
                        size="small"
                        variant="outlined"
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        fullWidth
                        name={`${newGarage.newId}.registration`}
                        inputRef={register()}
                        label="Registro"
                        size="small"
                        variant="outlined"
                    />
                </TableCell>
                <TableCell
                    align="center"
                    style={{ width: '5px', whiteSpace: 'nowrap' }}
                >
                    <IconButton
                        aria-label="Adicionar garagem"
                        color="inherit"
                        key="add-garage"
                        data-tip="Adicionar garagem"
                        onClick={() => addGarage(newGarage.newId)}
                    >
                        <CheckIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Remover garagem"
                        color="inherit"
                        key="delete-garage"
                        data-tip="Remover garagem"
                        onClick={() => removeGarage(newGarage.newId)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    });
}
