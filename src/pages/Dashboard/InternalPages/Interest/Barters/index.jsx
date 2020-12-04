import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { Box, Grid } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import Tooltip from '@material-ui/core/Tooltip';
import {
    REMOVE_INTEREST_BARTER,
    CREATE_BARTER_INTEREST,
    SET_BARTER,
    SET_CONTENT_BODY,
} from '../../../../../constants/ActionTypes';
import NewBarter from './newBarter';
import { Title } from '../../../../Register/styles';
import { getBarterType } from '../../../../../utils/barterUtils';
import { SKYBLUE } from '../../../../../constants/Colors';
import { formatToMonetary } from '../../../../../utils/numbersUtils';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Barters() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const interest = useSelector((state) => state.interest.interest);

    const removeBarter = (barterId) => {
        dispatch({
            type: REMOVE_INTEREST_BARTER,
            barterId,
        });
    };

    function openBarter(barter) {
        dispatch({
            type: SET_BARTER,
            barter,
        });
        dispatch({
            type: SET_CONTENT_BODY,
            contentBody: 'barter',
        });
    }

    return (
        <>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        <Title style={{ fontSize: '15px' }}>Permutas</Title>
                    </Box>
                </Grid>
            </Grid>
            <TableContainer>
                <Table className={classes.table}>
                    <caption style={{ textAlign: 'right', color: SKYBLUE }}>
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
                    <TableHead>
                        <TableRow>
                            <TableCell>Tipo do bem</TableCell>
                            <TableCell align="right">Valor</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {interest.barters.map((barter) => (
                            <TableRow key={barter.id}>
                                <TableCell component="th" scope="row">
                                    {getBarterType(barter.type)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatToMonetary(barter.value)}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        width: '5px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {/* <Tooltip title="Visualizar fotos"> */}
                                    {/*    <IconButton */}
                                    {/*        aria-label="Ver fotos" */}
                                    {/*        color="inherit" */}
                                    {/*        data-tip="Ver fotos" */}
                                    {/*    > */}
                                    {/*        <PhotoLibraryIcon /> */}
                                    {/*    </IconButton> */}
                                    {/* </Tooltip> */}
                                    <Tooltip title="Editar permuta">
                                        <IconButton
                                            aria-label="Editar permuta"
                                            color="inherit"
                                            key="edit-barter"
                                            data-tip="Editar permuta"
                                            onClick={() => openBarter(barter)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Remover permuta">
                                        <IconButton
                                            aria-label="Remover permuta"
                                            color="inherit"
                                            key="delete-barter"
                                            data-tip="Remover permuta"
                                            onClick={() =>
                                                removeBarter(barter.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                        <NewBarter />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
