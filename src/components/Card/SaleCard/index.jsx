import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { formatToMonetary } from '../../../utils/numbersUtils';
import Carousel from '../../Images/Carousel';
import NoDataImg from '../../../assets/no_data.svg';
import {
    APPROVE_BY_BUYER,
    REPROVE_BY_BUYER,
} from '../../../constants/ActionTypes';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
});

export default function SaleCard({ sale }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    if (!sale.images) {
        sale.images = [
            {
                id: 0,
                data: NoDataImg,
                contentType: 'image/svg',
            },
        ];
    }

    function extraItems() {
        let extraItems = '';
        let separator = '';

        if (sale.property.elevator) {
            extraItems = 'Elevador';
            separator = ', ';
        }
        if (sale.property.balcony) {
            extraItems = `${extraItems + separator}Sacada`;
            separator = ', ';
        }
        if (sale.property.barbecueGrill) {
            extraItems = `${extraItems + separator}Churrasqueira`;
            separator = ', ';
        }
        if (sale.property.pool) {
            extraItems = `${extraItems + separator}Piscina`;
        }

        const pos = extraItems.lastIndexOf(',');
        return `${extraItems.substring(0, pos)} e${extraItems.substring(
            pos + 1
        )}`;
    }

    function garages() {
        if (sale.property.garages.size > 0) {
            return `Garagens:${sale.property.garages.size}<br/>`;
        }
    }

    function accept() {
        return dispatch({ type: APPROVE_BY_BUYER });
    }

    function reprove() {
        return dispatch({ type: REPROVE_BY_BUYER });
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia height="240">
                    <Carousel images={sale.images} />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {sale.property.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Valor solicitado: {formatToMonetary(sale.value)} <br />
                        Area: {sale.property.area}m² <br />
                        Quartos: {sale.property.dorms}, Suítes:{' '}
                        {sale.property.suites}, Banheiros:{' '}
                        {sale.property.bathrooms} <br />
                        {garages()}
                        Possuí {extraItems()} <br />
                        Localizado no bairro {sale.property.address.street.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={accept()}>
                    Aceitar
                </Button>
                <Button size="small" color="primary" onClick={reprove()}>
                    Recusar
                </Button>
            </CardActions>
        </Card>
    );
}
