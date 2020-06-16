import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    SKYBLUE,
    OCEAN,
    BLACK,
    GRAY,
    PURPLE_0,
    PURPLE_1,
    PURPLE_2,
    PURPLE_3,
} from '../../constants/Colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        background: GRAY,
        height: '30px',
        fontSize: '18px',
        padding: '0 5px',
        opacity: 0.75,
        borderRadius: '5px',
        margin: '2px',
        width: 'inherit',
    },
    editValue: {
        color: PURPLE_0,
        paddingLeft: '20px',
        fontWeight: 700,
    },
}));

export default function MirrorInfos({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {children}
            <span className={classes.editValue}>Editar</span>
        </div>
    );
}
