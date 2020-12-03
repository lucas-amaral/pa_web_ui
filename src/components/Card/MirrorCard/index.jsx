import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { sumValues } from '../../../utils/numbersUtils';

import { OCEAN, PURPLE_0 } from '../../../constants/Colors';
import MirrorInfo from '../../MirrorInfos';
import { Types as InterestTypes } from '../../../store/ducks/interest';

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
        height: '290px',
        background: '#f5f8fb',
    },
    sendButton: {
        background: PURPLE_0,
        height: '45px',
        borderRadius: '10px',
    },
    textButton: {
        color: 'white',
        fontWeight: 700,
    },
    contentButton: {
        margin: '5px',
    },
    contentBody: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
}));

const getListValuesProperties = (list) => {
    const filteredList = [];
    if (list[0].value) {
        filteredList.push(list[0].postName);
    }
    if (list[1].value) {
        filteredList.push(list[1].postName);
    }

    return filteredList;
};

const getConvenience = (conveniences, convenienceName) => {
    if (conveniences) {
        if (conveniences[0].name === convenienceName && conveniences[0].value) {
            return true;
        }
        if (conveniences[1].name === convenienceName && conveniences[1].value) {
            return true;
        }
        if (conveniences[2].name === convenienceName && conveniences[2].value) {
            return true;
        }
        if (conveniences[3].name === convenienceName && conveniences[3].value) {
            return true;
        }
    }

    return false;
};

function MirrorCard({ headerTitle }) {
    const classes = useStyles();
    let interest = useSelector((state) => state.interest.interest);

    const dispatch = useDispatch();

    const sendInterest = () => {
        const dataInterest = {
            username: localStorage.getItem('username'),
            value: sumValues({
                cashValue: interest.cashValue,
                creditCardValue: interest.creditCardValue,
                exchangeValue: interest.exchangeValue,
            }),
            financing: Boolean(interest.creditCardValue),
            financingValue: parseFloat(interest.creditCardValue),
            types: getListValuesProperties(interest.properties),
            neighborhoodIds: [4, 5],
            dorms: interest.roomsNumber,
            suites: 1,
            bathrooms: interest.bathroomsNumber,
            garages: interest.garageNumber,
            pool: getConvenience(interest.convenience, 'PISCINA'),
            balcony: getConvenience(interest.convenience, 'SACADA'),
            elevator: getConvenience(interest.convenience, 'ELEVADOR'),
            barbecueGrill: getConvenience(
                interest.conveniences,
                'CHURRASQUEIRA'
            ),
            barters: [
                {
                    type: 'VEHICLE',
                    value: 52.25,
                },
            ],
        };

        dispatch({
            type: InterestTypes.SEND_INTEREST,
            dataInterest,
        });
    };

    if (interest.interest) {
        interest = interest.interest;
    }

    console.log('values sss', interest);

    return (
        <>
            <div className={classes.paperHeader}>{headerTitle}</div>
            <div className={classes.contentBody}>
                <div className={classes.paperBody}>
                    {interest.properties && (
                        <MirrorInfo>
                            <span>
                                Tipos de propriedades desejadas ={' '}
                                {Object.values(
                                    interest.properties
                                ).map((value, index) =>
                                    value.value ? <h6>{value.name}</h6> : null
                                )}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.roomsNumber && (
                        <MirrorInfo>
                            <span>
                                Número mínimo de quartos ={' '}
                                {interest.roomsNumber}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.bathroomsNumber && (
                        <MirrorInfo>
                            <span>
                                Número mínimo de banheiros ={' '}
                                {interest.bathroomsNumber}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.garageNumber && (
                        <MirrorInfo>
                            <span>
                                Número mínimo de garagens ={' '}
                                {interest.garageNumber}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.convenience && (
                        <MirrorInfo>
                            <span>
                                Conveniencias desejadas ={' '}
                                {Object.values(
                                    interest.convenience
                                ).map((value, index) =>
                                    value.value ? <h6>{value.name}</h6> : null
                                )}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.neighborhood && (
                        <MirrorInfo>
                            <span>
                                Bairros de interesse = {interest.neighborhood}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.cashValue && (
                        <MirrorInfo>
                            <span>Valor à vista = {interest.cashValue}</span>
                        </MirrorInfo>
                    )}
                    {interest.creditCardValue && (
                        <MirrorInfo>
                            <span>
                                Valor financiado = {interest.creditCardValue}
                            </span>
                        </MirrorInfo>
                    )}
                    {interest.exchangeValue && (
                        <MirrorInfo>
                            <span>
                                Valor permuta = {interest.exchangeValue}
                            </span>
                        </MirrorInfo>
                    )}
                </div>
                <div className={classes.contentButton}>
                    <Button
                        onClick={sendInterest}
                        variant="contained"
                        className={classes.sendButton}
                        fullWidth
                    >
                        <Typography className={classes.textButton}>
                            Cadastrar Interesse
                        </Typography>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default MirrorCard;
