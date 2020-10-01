import React from 'react'
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    textStyle: {
        
    },
    paperStyle: {
        width: 300
    }
})

const HeaderText = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paperStyle} variant="outlined">
            <Typography variant="h5" color="initial" className={classes.textStyle}>Kevin V. Morales</Typography>
            <Typography variant="h6">1822 N. Valleyview St.</Typography>
        </Paper>
    )
}

export default HeaderText;
