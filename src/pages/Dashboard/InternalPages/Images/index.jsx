import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import { Skeleton } from '@material-ui/lab';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import ImageStepper from '../../../../components/Images/ImageStepper';

export default function Images({
    images,
    parentId,
    parentLabelId,
    type_add,
    type_remove,
    containerStyle = {},
    smallTitle = true,
    loadingData,
}) {
    const dispatch = useDispatch();

    const [openDropZone, setOpenDropZone] = React.useState(false);
    const [newImages, setNewImages] = React.useState([]);

    function getBase64(file, cb) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            cb(reader.result);
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    const saveImages = () => {
        dispatch({
            type: type_add,
            data: newImages,
        });
    };

    function deleteImage(id) {
        dispatch({
            type: type_remove,
            imageId: id,
        });
    }

    const addImages = (files) => {
        files.map((file) => {
            return getBase64(file, (imgBase64) => {
                const newImg = {
                    name: file.name,
                    [parentLabelId]: parentId,
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
            <Grid container style={containerStyle}>
                <Grid item md={12}>
                    <Box pl={1} pb={2}>
                        {smallTitle ? (
                            <Title style={{ fontSize: '15px' }}>Fotos</Title>
                        ) : (
                            <Title>Fotos</Title>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <GridBox>
                <ImageStepper
                    images={images}
                    deleteImage={deleteImage}
                    loadingData={loadingData}
                />
            </GridBox>
            <GridBox xs={7}>
                <div>
                    {loadingData ? (
                        <Skeleton variant="circle" animation="wave">
                            <Fab />
                        </Skeleton>
                    ) : (
                        <Tooltip title="Adicionar imagem">
                            <Fab
                                aria-label="Adicionar Foto"
                                color="primary"
                                onClick={() => setOpenDropZone(true)}
                            >
                                <AddPhotoAlternateIcon />
                            </Fab>
                        </Tooltip>
                    )}
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
                            addImages(files, parentId);
                        }}
                        onDelete={(file) => removeImage(file.name)}
                        onSave={() => {
                            saveImages();
                            setOpenDropZone(false);
                        }}
                        showPreviews
                        showFileNamesInPreview
                    />
                </div>
            </GridBox>
        </>
    );
}
