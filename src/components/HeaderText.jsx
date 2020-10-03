import React from 'react'
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    textStyle: {
        textAlign: "center",
    },
    paperStyle: {
        width: 300
    }
})

const HeaderText = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item sm={4}>
                <Paper>
                    <p>Kevin Morales
                        1822 N. Valleyview St. 
                        Wichita, KS 67212
                        kevin.v.morales@gmail.com
                    </p>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default HeaderText;
