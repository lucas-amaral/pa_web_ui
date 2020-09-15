import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
    Link,
    Container,
    Badge,
    Button,
    IconButton,
    CssBaseline,
    Drawer,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';

import { useHistory } from 'react-router-dom';
import NewInterestBot from './containers/NewInterestBot';
import PewProperty from './containers/NewProperty';
import PropertyList from './containers/PropertyList';
import PerfilSettings from './containers/PerfilSettings';
import NewProposeBot from './containers/NewProposeBot';

import Logo from '../../assets/marca.png';

import ItemMenu from './components/ItemMenu';
import SideMenu from './components/SideMenu';

import {
    SKYBLUE,
    OCEAN,
    BLACK,
    GRAY,
    PURPLE_0,
    PURPLE_1,
    PURPLE_2,
    PURPLE_3,
} from '../../constants/Colors';

import {
    StyledFooterMenuWrapper,
    StyledFooterExit,
    ButtonExit,
} from './styles';

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
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [titleOfAction, setTitleOfAction] = useState('');

    const [contentBody, setContentBody] = useState('announcement');

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const exit = () => {
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
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
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
                    <box>
                        <img
                            src={Logo}
                            alt="Proposta Aceita"
                            height="50"
                            width="180"
                        />
                    </box>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <SideMenu action={setContentBody} />
                <StyledFooterMenuWrapper>
                    <StyledFooterExit>
                        <Box m="auto">
                            <ButtonExit onClick={exit} fullWidth>
                                Sair
                            </ButtonExit>
                        </Box>
                    </StyledFooterExit>
                </StyledFooterMenuWrapper>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {contentBody === 'interest' && <NewInterestBot />}
                    {contentBody === 'newProperty' && <PewProperty />}
                    {contentBody === 'propertyList' && <PropertyList />}
                    {contentBody === 'perfilSettings' && <PerfilSettings />}
                    {contentBody === 'propouse' && <NewProposeBot />}
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
