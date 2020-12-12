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
import {
  APPROVE_BY_BUYER,
  REPROVE_BY_BUYER,
} from '../../../constants/ActionTypes';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function SaleCard({ id, sale }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function extraItems() {
    let extraItems = '';
    let separator = '';

    if (sale.elevator) {
      extraItems = 'Elevador';
      separator = ', ';
    }
    if (sale.balcony) {
      extraItems = `${extraItems + separator}Sacada`;
      separator = ', ';
    }
    if (sale.barbecueGrill) {
      extraItems = `${extraItems + separator}Churrasqueira`;
      separator = ', ';
    }
    if (sale.pool) {
      extraItems = `${extraItems + separator}Piscina`;
    }

    const pos = extraItems.lastIndexOf(',');
    return `${extraItems.substring(0, pos)} e${extraItems.substring(pos + 1)}`;
  }

  function garages() {
    if (sale.garages.size > 0) {
      return `Garagens:${sale.garages.size}<br/>`;
    }
  }

  function accept() {
    return dispatch({ type: APPROVE_BY_BUYER, id });
  }

  function reprove() {
    return dispatch({ type: REPROVE_BY_BUYER, id });
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="240">
          <Carousel images={sale.images} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sale.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Valor solicitado: {formatToMonetary(sale.value)} <br />
            Area: {sale.area}m² <br />
            Quartos: {sale.dorms}, Suítes: {sale.suites},
            Banheiros: {sale.bathrooms} <br />
            {garages()}
            Possuí {extraItems()} <br />
            Localização: {sale.streetName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => accept()}>
          Aceitar
        </Button>
        <Button size="small" color="primary" onClick={() => reprove()}>
          Recusar
        </Button>
      </CardActions>
    </Card>
  );
}
