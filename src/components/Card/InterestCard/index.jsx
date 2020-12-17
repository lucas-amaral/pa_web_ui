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
import { getBarterType } from '../../../utils/barterUtils';
import Carousel from '../../Images/Carousel';
import {
  APPROVE_BY_SELLER,
  REPROVE_BY_SELLER,
} from '../../../constants/ActionTypes';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function InterestCard({ id = 0, interest = { barters: [] } }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function financingInfo() {
    if (interest.financing) {
      return `Valor financiado: ${formatToMonetary(interest.financingValue)}`;
    }
    return null;
  }

  function images() {
    return interest?.barters?.flatMap((barter) => barter.images);
  }

  function accept() {
    return dispatch({ type: APPROVE_BY_SELLER, id });
  }

  function reprove() {
    return dispatch({ type: REPROVE_BY_SELLER, id });
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="240">
          <Carousel images={images()} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Valor: {formatToMonetary(interest.value)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {financingInfo()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {interest.barters.map((barter) => {
              return (
                <>
                  {getBarterType(barter.type)} no valor de:{' '}
                  {formatToMonetary(barter.value)}
                  <br />
                </>
              );
            })}
            {/* {barterInfo()} */}
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
