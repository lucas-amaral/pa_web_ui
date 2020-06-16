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
} from '../../../../constants/Colors';

const useStyles = makeStyles((theme) => ({
    sideMenuItem: {
        display: 'flex',
        color: 'white',
        alignContent: 'center',
        margin: '1px',
        boxSizing: 'border-box',
        padding: '7px',
        cursor: 'pointer',
        // background: '#B0E0E6',
        borderBottom: '1px solid ',

        '&:hover': {
            // backgroundColor: PURPLE_2,
            cursor: 'pointer',
            boxShadow: `0 0 10px white`,
            transition: 'box-shadow 0.4s',
        },
    },
}));

function ItemMenu({ textValue, icon, to }) {
    const classes = useStyles();

    return (
        <div className={classes.sideMenuItem}>
            <div style={{ display: 'flex', paddingLeft: '10px' }}>
                {icon}
                <h3 style={{ paddingLeft: '10px', paddingTop: '5px' }}>
                    {textValue}
                </h3>
            </div>
        </div>
    );
}

export default ItemMenu;
