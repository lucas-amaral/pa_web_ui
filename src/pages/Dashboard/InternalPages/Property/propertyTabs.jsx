import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import Index from './index';
import Images from '../Images';
import {
  ADD_PROPERTY_IMAGE,
  LOADING_PROPERTY,
  REMOVE_PROPERTY_IMAGE,
  RESET_SUCCESS_PROPERTY,
} from '../../../../constants/ActionTypes';
import Sale from '../Sale';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PropertyTabs() {
  const { property, images, loadingData, loading, success } = useSelector(
    (state) => state.property
  );
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Imóvel" {...a11yProps(0)} />
          <Tab
            label="Fotos"
            {...a11yProps(1)}
            disabled={property.id === undefined}
          />
          <Tab
            label="Anúncio"
            {...a11yProps(2)}
            disabled={property.id === undefined}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Index />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Images
            parentId={property.id}
            parentLabelId="propertyId"
            images={images}
            type_add={ADD_PROPERTY_IMAGE}
            type_remove={REMOVE_PROPERTY_IMAGE}
            reset_success={RESET_SUCCESS_PROPERTY}
            load={LOADING_PROPERTY}
            smallTitle={false}
            success={success}
            loading={loading}
            loadingData={loadingData}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Sale propertyId={property.id} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
