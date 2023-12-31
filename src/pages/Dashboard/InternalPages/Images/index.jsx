import { DropzoneDialog } from 'material-ui-dropzone';
import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import ImageStepper from '../../../../components/Images/ImageStepper';
import CircularButton from '../../../../components/Button/CircularButton';
import { ADD_IMAGE, RESET_IMAGES } from '../../../../constants/ActionTypes';

export default function Images({
  images,
  parentId,
  parentLabelId,
  type_add,
  type_remove,
  reset_success,
  load,
  containerStyle = {},
  smallTitle = true,
  success,
  loading,
  loadingData,
}) {
  const dispatch = useDispatch();
  const inMemoryImages = useSelector((state) => state.image.images);
  const [openDropZone, setOpenDropZone] = React.useState(false);

  useEffect(() => {
    dispatch({ type: reset_success });
    dispatch({ type: RESET_IMAGES });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    dispatch({ type: load });
    dispatch({ type: type_add, data: inMemoryImages });
    dispatch({ type: RESET_IMAGES });
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
        dispatch({
          type: ADD_IMAGE,
          image: {
            name: file.name,
            [parentLabelId]: parentId,
            contentType: file.type,
            data: imgBase64,
          },
        });
      });
    });
  };

  const removeImage = (filename) => {
    dispatch({ type: RESET_IMAGES, filename });
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
          <CircularButton
            success={success}
            loading={loading}
            loadingData={loadingData}
            onClick={() => setOpenDropZone(true)}
          />
          <DropzoneDialog
            dropzoneText="Arraste e solte uma imagem aqui ou clique"
            showAlerts={false}
            acceptedFiles={['image/*']}
            cancelButtonText="Cancelar"
            submitButtonText="Adicionar"
            clearOnUnmount
            filesLimit={20}
            fullWidth
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
