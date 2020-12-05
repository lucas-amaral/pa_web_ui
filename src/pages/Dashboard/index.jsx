import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
    Link,
    Container,
    IconButton,
    CssBaseline,
    Drawer,
    Box,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Interest from './InternalPages/Interest';
import Property from './InternalPages/Property/propertyTabs';
import User from './InternalPages/User';

import Logo from '../../assets/marca.png';

import SideMenu from './SideMenu';

import {
    LOAD_INTEREST,
    LOAD_NEGOTIATION_BY_INTEREST,
    LOAD_NEGOTIATION_BY_SALE,
    LOAD_NEIGHBORHOODS,
    LOAD_PROPERTY,
    LOAD_USER,
} from '../../constants/ActionTypes';

import { OCEAN, GRAY, PURPLE_0 } from '../../constants/Colors';

import { StyledFooterMenuWrapper, StyledFooterExit } from './styles';
import Negotiation from './InternalPages/Negotiation';
import Barter from './InternalPages/Barter';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Proposta Aceita
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        background: `linear-gradient(90deg, ${OCEAN}, ${PURPLE_0})`,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        border: 'none',
        ...theme.mixins.toolbar,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        background: `linear-gradient(180deg, ${GRAY}, #fff)`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    logo: {},
}));

export default function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(true);
    const [titleOfAction] = useState('');
    const { contentBody, notification } = useSelector((state) => state.main);

    const data = { username: localStorage.getItem('username') };

    useEffect(() => {
        dispatch({
            type: LOAD_USER,
            data,
        });
        dispatch({
            type: LOAD_INTEREST,
            data,
        });
        dispatch({
            type: LOAD_PROPERTY,
            data,
        });
        dispatch({
            type: LOAD_NEGOTIATION_BY_INTEREST,
            data,
        });
        dispatch({
            type: LOAD_NEGOTIATION_BY_SALE,
            data,
        });
        dispatch({ type: LOAD_NEIGHBORHOODS });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        enqueueSnackbar(notification.message, {
            variant: notification.variant,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notification]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const exit = () => {
        dispatch({
            type: 'LOGOFF',
        });
        dispatch({
            type: 'INTEREST_SET_INITIAL_STATE',
        });
        localStorage.setItem('token', undefined);
        history.push('/');
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        {titleOfAction}
                    </Typography>
                    {/* <IconButton color="inherit"> */}
                    {/*    <Badge badgeContent={4} color="secondary"> */}
                    {/*        <NotificationsIcon /> */}
                    {/*    </Badge> */}
                    {/* </IconButton> */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Box>
                        <img
                            src={Logo}
                            alt="Proposta Aceita"
                            height="50"
                            width="180"
                        />
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <SideMenu />
                <StyledFooterMenuWrapper>
                    <StyledFooterExit>
                        <Box m="auto">
                            <ListItem button onClick={exit}>
                                <ListItemIcon>
                                    <ExitToAppIcon style={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Sair"
                                    style={{ color: 'white' }}
                                />
                            </ListItem>
                        </Box>
                    </StyledFooterExit>
                </StyledFooterMenuWrapper>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {contentBody === 'interest' && <Interest />}
                    {contentBody === 'property' && <Property />}
                    {contentBody === 'user' && <User />}
                    {contentBody === 'negotiations' && <Negotiation />}
                    {contentBody === 'barter' && <Barter />}
                </Container>
                <footer>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </footer>
            </main>
        </div>
    );
}
