import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

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
function SideMenu({ action }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button onClick={() => action('perfilSettings')}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Meu Perfil" />
            </ListItem>
            <ListItem button onClick={() => action('interest')}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Novo Interesse" />
            </ListItem>
            <ListItem button onClick={() => action('myInterest')}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Meu Interesse" />
            </ListItem>
            <ListItem button onClick={() => action('propouse')}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Nova Proposta" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastro Imóveis" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem
                        button
                        className={classes.nested}
                        onClick={() => action('newProperty')}
                    >
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Cadastrar Novo" />
                    </ListItem>
                    <ListItem
                        button
                        className={classes.nested}
                        onClick={() => action('propertyList')}
                    >
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Lista de Bens" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}

export default SideMenu;
