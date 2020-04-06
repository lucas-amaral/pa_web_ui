import React from 'react';
import { Grid, TextField, Box } from '@material-ui/core';
import ResizeImage from 'react-resize-image';

import Background1 from '../../assets/background_1.png';

import { Container } from './styles';

export default function Register() {
    return (
        <Container>
            <Grid container>
                <Grid item md={6}>
                    <Box p={1}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Outlined"
                            value="value"
                        />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box p={1}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Outlined"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
