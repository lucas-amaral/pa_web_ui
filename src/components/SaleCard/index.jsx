import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SKYBLUE } from '../../constants/Colors';
import { formatToMonetary } from '../../utils/numbersUtils';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
});

export default function SaleCard({ sale }) {
    const classes = useStyles();

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

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ color: SKYBLUE }}
                    >
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
                <Button size="small" color="primary">
                    Aceitar
                </Button>
                <Button size="small" color="primary">
                    Recusar
                </Button>
            </CardActions>
        </Card>
    );
}
