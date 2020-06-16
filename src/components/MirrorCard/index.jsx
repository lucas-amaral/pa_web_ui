import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { OCEAN } from '../../constants/Colors';
import MirrorInfo from '../MirrorInfos';

const useStyles = makeStyles((theme) => ({
    paperHeader: {
        background: OCEAN,
        height: '55px',
        borderRadius: '15px 15px 0 0',
        padding: '15px 5px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 700,
    },
    paperBody: {
        boxSizing: 'border-box',
        height: '345px',
        background: '#f5f8fb',
    },
}));

function MirrorCard({ valueTotal, initialInputValue, headerTitle }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.paperHeader}>{headerTitle}</div>
            <div className={classes.paperBody}>
                {valueTotal && (
                    <MirrorInfo>
                        <span>
                            Valor Máximo a pagar: R$
                            {valueTotal}
                        </span>
                    </MirrorInfo>
                )}
                {initialInputValue && (
                    <MirrorInfo>
                        <span>
                            Valor de entrada: R$
                            {initialInputValue}
                        </span>
                    </MirrorInfo>
                )}
            </div>
        </>
    );
}

export default MirrorCard;
