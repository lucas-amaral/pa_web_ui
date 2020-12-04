import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Box, Grid } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    ADD_BARTER_IMAGE,
    REMOVE_BARTER_IMAGE,
} from '../../../../../constants/ActionTypes';
import { Title } from '../../../../Register/styles';
import GridBox from '../../../../../components/GridBox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '100%',
        height: 300,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function BarterImages({ barterId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const images = useSelector((state) => state.barter.images);

    const [openDropZone, setOpenDropZone] = React.useState(false);
    const [newImages, setNewImages] = React.useState([]);

    function getBase64(file, cb) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const saveImages = () => {
        dispatch({
            type: ADD_BARTER_IMAGE,
            data: newImages,
        });
    };

    function deleteImage(id) {
        dispatch({
            type: REMOVE_BARTER_IMAGE,
            imageId: id,
        });
    }

    const addImages = (files, barterId) => {
        files.map((file) => {
            return getBase64(file, (imgBase64) => {
                const newImg = {
                    name: file.name,
                    barterId,
                    contentType: file.type,
                    data: imgBase64,
                };
                setNewImages([...newImages, newImg]);
            });
        });
    };

    const removeImage = (filename) => {
        setNewImages(
            newImages.filter((currentImg) => currentImg.name !== filename)
        );
    };

    return (
        <>
            <GridBox xs={5}>
                <div>
                    <Fab
                        aria-label="Adicionar Foto"
                        color="primary"
                        onClick={() => setOpenDropZone(true)}
                    >
                        <AddPhotoAlternateIcon />
                    </Fab>
                    <DropzoneDialog
                        dropzoneText="Arraste e solte uma imagem aqui ou clique"
                        showAlerts={false}
                        acceptedFiles={['image/*']}
                        cancelButtonText="Cancelar"
                        submitButtonText="Adicionar"
                        maxFileSize={5000000}
                        open={openDropZone}
                        onClose={() => setOpenDropZone(false)}
                        onDrop={(files) => {
                            addImages(files, barterId);
                        }}
                        onDelete={(file) => removeImage(file.name)}
                        onSave={(files) => {
                            saveImages();
                            setOpenDropZone(false);
                        }}
                        showPreviews
                        showFileNamesInPreview
                    />
                </div>
            </GridBox>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        {images && (
                            <Title style={{ fontSize: '15px' }}>Fotos</Title>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <GridBox xs={12}>
                <div className={classes.root}>
                    <GridList
                        className={classes.gridList}
                        cols={2.5}
                        cellHeight={300}
                    >
                        {images.map((img) => (
                            <GridListTile key={img.id}>
                                <img src={img.data} alt={img.id} />
                                <GridListTileBar
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton>
                                            <DeleteIcon
                                                className={classes.title}
                                                onClick={() =>
                                                    deleteImage(img.id)
                                                }
                                            />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </GridBox>
        </>
    );
}
