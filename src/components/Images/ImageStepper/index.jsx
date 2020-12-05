import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

export default function ImageStepper({ images, deleteImage, loadingData }) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    let maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return loadingData ? (
        <Skeleton variant="rect" animation="wave" height={340} width={400} />
    ) : (
        <div className={classes.root}>
            <img
                className={classes.img}
                src={images[activeStep].data}
                alt={images[activeStep].id}
            />
            <Paper square elevation={0} className={classes.header}>
                <Tooltip title="Remover imagem">
                    <IconButton
                        aria-label="Remove imagem"
                        color="inherit"
                        key="delete-image"
                        onClick={() => {
                            maxSteps -= 1;
                            setActiveStep(0);
                            deleteImage(images[activeStep].id);
                        }}
                        data-tip="Remover imagem"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Paper>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Próxima
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Voltar
                    </Button>
                }
            />
        </div>
    );
}
