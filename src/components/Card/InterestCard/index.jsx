import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { formatToMonetary } from '../../../utils/numbersUtils';
import { getBarterType } from '../../../utils/barterUtils';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function InterestCard({ interest }) {
    const classes = useStyles();

    function financingInfo() {
        if (interest.financing) {
            return `Valor financiado: ${formatToMonetary(
                interest.financingValue
            )}`;
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
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Valor: {formatToMonetary(interest.value)}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {financingInfo()}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
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
