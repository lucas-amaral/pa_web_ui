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
import TableHead from '@material-ui/core/TableHead';
import Tooltip from '@material-ui/core/Tooltip';
import NewGarage from './newGarage';
import {
  CREATE_GARAGE,
  REMOVE_PROPERTY_GARAGE,
} from '../../../../../constants/ActionTypes';
import { Title } from '../../../../Register/styles';
import { SKYBLUE } from '../../../../../constants/Colors';

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
        <Table className={classes.table} aria-label="caption table">
          <caption style={{ textAlign: 'right', color: SKYBLUE }}>
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
          <TableHead>
            <TableRow>
              <TableCell>Box</TableCell>
              <TableCell>Registro</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {garages.map((garage) => (
              <TableRow key={garage.id}>
                <TableCell component="th" scope="row">
                  {garage.box}
                </TableCell>
                <TableCell>{garage.registration}</TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: '5px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Tooltip title="Remover garagem">
                    <IconButton
                      aria-label="Remover garagem"
                      color="inherit"
                      key="delete-garage"
                      data-tip="Remover garagem"
                      onClick={() => removeGarage(garage.id, garage.newId)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
