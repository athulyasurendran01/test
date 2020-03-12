import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#ffc92f'
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <StarIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <Link to='/cart' className="cartIcon">
                        <CartIcon />
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;