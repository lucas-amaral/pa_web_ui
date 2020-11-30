import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { types } from '../../../../../constants/BarterTypes';
import {
    REMOVE_INTEREST_BARTER,
    CREATE_BARTER_INTEREST,
} from '../../../../../constants/ActionTypes';
import NewBarter from './newBarter';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Barters() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const interest = useSelector((state) => state.interest.interest);

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
                    <NewBarter />
                </TableBody>
            </Table>
        </TableContainer>
    );
}
