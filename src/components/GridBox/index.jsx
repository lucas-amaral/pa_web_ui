import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export default function GridBox(props) {
    return (
        <Grid
            item
            xs={props.xs}
            key={props.key ? props.key : 0}
            style={{ margin: 10 }}
        >
            <Box p={props.p}>
                {props.loadingData ? (
                    <Skeleton
                        variant="rect"
                        animation="wave"
                        style={{ minWidth: '180px', minHeight: '45px' }}
                    />
                ) : (
                    props.children
                )}
            </Box>
        </Grid>
    );
}
