import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import './Filter.css';

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
const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus,&:hover,&$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}

const Filter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h4>Filters</h4>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[20, 40]}
            />
            <div className="filter-footer">
                <button to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => { this.handleClick() }}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;