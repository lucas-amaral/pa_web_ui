import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import NewGarage from './newGarage';
import {
    CREATE_GARAGE,
    REMOVE_PROPERTY_GARAGE,
} from '../../../../../constants/ActionTypes';
import { Title } from '../../../../Register/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Garages({ garages = [] }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const removeGarage = (garageId, newId) => {
        dispatch({
            type: REMOVE_PROPERTY_GARAGE,
            garageId,
            newId,
        });
    };

    return (
        <>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        <Title style={{ fontSize: '15px' }}>Garagens</Title>
                    </Box>
                </Grid>
            </Grid>
            <TableContainer>
                <Table className={classes.table}>
                    <caption style={{ textAlign: 'right' }}>
                        Adicionar garagem
                        <IconButton
                            aria-label="Adicionar garagem"
                            color="inherit"
                            key="add-garage"
                            data-tip="Adicionar garagem"
                            onClick={() => dispatch({ type: CREATE_GARAGE })}
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </caption>
                    <TableBody>
                        {garages.map((garage) => (
                            <TableRow key={garage.id}>
                                <TableCell component="th" scope="row">
                                    {garage.box}
                                </TableCell>
                                <TableCell align="right">
                                    {garage.registration}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        width: '5px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    <IconButton
                                        aria-label="Remover garagem"
                                        color="inherit"
                                        key="delete-garage"
                                        data-tip="Remover garagem"
                                        onClick={() =>
                                            removeGarage(
                                                garage.id,
                                                garage.newId
                                            )
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <NewGarage />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
