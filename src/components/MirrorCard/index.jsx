import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

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

function MirrorCard({ headerTitle }) {
    const classes = useStyles();
    const announcement = useSelector(
        (state) => state.announcement.announcement
    );

    console.log('values sss', announcement);

    return (
        <>
            <div className={classes.paperHeader}>{headerTitle}</div>
            <div className={classes.paperBody}>
                {announcement.propertyType && (
                    <MirrorInfo>
                        <span>{announcement.propertyType}</span>
                    </MirrorInfo>
                )}
                {announcement.roomsNumber && (
                    <MirrorInfo>
                        <span>
                            Número mínimo de quartos ={' '}
                            {announcement.roomsNumber}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.bathroomsNumber && (
                    <MirrorInfo>
                        <span>
                            Número mínimo de banheiros ={' '}
                            {announcement.bathroomsNumber}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.garageNumber && (
                    <MirrorInfo>
                        <span>
                            Número mínimo de garagens ={' '}
                            {announcement.garageNumber}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.convenience && (
                    <MirrorInfo>
                        <span>
                            Conveniencias desejadas ={' '}
                            {Object.values(
                                announcement.convenience
                            ).map((value, index) =>
                                value.value ? <h6>{value.name}</h6> : null
                            )}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.neighborhood && (
                    <MirrorInfo>
                        <span>
                            Bairros de interesse = {announcement.neighborhood}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.cashValue && (
                    <MirrorInfo>
                        <span>Valor à vista = {announcement.cashValue}</span>
                    </MirrorInfo>
                )}
                {announcement.creditCardValue && (
                    <MirrorInfo>
                        <span>
                            Valor financiado = {announcement.creditCardValue}
                        </span>
                    </MirrorInfo>
                )}
                {announcement.exchangeValue && (
                    <MirrorInfo>
                        <span>
                            Valor permuta = {announcement.exchangeValue}
                        </span>
                    </MirrorInfo>
                )}
            </div>
        </>
    );
}

export default MirrorCard;
