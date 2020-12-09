import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import ChatBotPA from './ChatBotPA';
import MirrorCard from '../../../../components/Card/MirrorCard';

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    height: 400,
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  },
}));

function NewInterestBot() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <ChatBotPA
          userName={localStorage.getItem('username')}
          headerTitle="Cadastrar novo interesse"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.fixedHeight}>
          <MirrorCard headerTitle="Interesse" />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default NewInterestBot;
