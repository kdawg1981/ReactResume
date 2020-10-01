import React from 'react'
import { AppBar, Toolbar, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    headerStyle: {
        background: "darkred",
    },
    avatarStyle: {
        backgroundColor: "yellow",
        color: "darkred",
        fontWeight: "bold",
        
    },
    textStyle: {
        color: "yellow",
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                
                <Toolbar className={classes.headerStyle}>
                <Avatar variant="circle" className={classes.avatarStyle}>K</Avatar>
                </Toolbar>
                
            </AppBar>
        </div>
    )
}

export default Header;
