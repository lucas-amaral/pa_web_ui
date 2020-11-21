import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useDispatch, useSelector } from 'react-redux';
import { Types as InterestTypes } from '../../../../store/ducks/interest';
import { types } from '../../../../constants/BarterTypes';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Barters() {
    const classes = useStyles();
    const data = { username: localStorage.getItem('username') };
    const dispatch = useDispatch();
    let interest = useSelector((state) => state.interest.interest);

    useEffect(() => {
        dispatch({
            type: InterestTypes.LOAD_INTEREST,
            data,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (interest.payload) {
        interest = interest.payload;
    }

    function getBarterType(apiType) {
        return types
            .filter((type) => apiType === type.id)
            .map((type) => type.value);
    }

    return (
        <TableContainer>
            <Table className={classes.table}>
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
                                <PhotoLibraryIcon />
                                <DeleteIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
