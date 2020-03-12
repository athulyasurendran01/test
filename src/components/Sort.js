import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
const Filter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <span>Sort By</span>
                
            </div>
        </div>
    )
}

export default Filter;