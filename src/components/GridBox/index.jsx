import React from 'react';
import { Box, Grid } from '@material-ui/core';

export default function GridBox(props) {
    return (
        <Grid
            item
            xs={props.xs}
            key={props.key ? props.key : 0}
            style={{ margin: 10 }}
        >
            <Box p={props.p}>{props.children}</Box>
        </Grid>
    );
}
