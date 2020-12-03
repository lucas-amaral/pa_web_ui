import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ForumIcon from '@material-ui/icons/Forum';
import { Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SET_CONTENT_BODY } from '../../../constants/ActionTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        opacity: 0.8,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
function SideMenu() {
    const classes = useStyles();
    const dispatch = useDispatch();

    function setContentBody(contentBody) {
        dispatch({
            type: SET_CONTENT_BODY,
            contentBody,
        });
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button onClick={() => setContentBody('user')}>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button onClick={() => setContentBody('negotiations')}>
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Negociações" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setContentBody('property')}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Imóvel" />
            </ListItem>
            <ListItem button onClick={() => setContentBody('sale')}>
                <ListItemIcon>
                    <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText primary="Anúncio" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setContentBody('interest')}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Interesse" />
            </ListItem>
        </List>
    );
}

export default SideMenu;
