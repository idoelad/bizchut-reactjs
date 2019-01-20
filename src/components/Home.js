import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";

const styles = {
    root: {
        width: '100%',
        backgroundColor: '#0E4787'
    },
    topBar: {
        backgroundColor: '##819DBD',
        height: '20px'
    },
    appBar: {
        backgroundColor: '#096EDB',
    },
    appBarText: {
      textAlign: 'right',
      color: '#FFFFFF',
      marginTop: -50
    },
    appBarTextHeadline: {
        paddingRight: 20,
    },
    appBarTextHeadlineT: {
        color: '#FFFFFF',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    drawerHeaderIcon: {
        color: '#FFFFFF'
    },
    drawerPaper: {
        width: '80%',
        backgroundColor: '#293A50',
        color: '#FFFFFF'
    }

};

class Home extends Component {

    state = { drawerIsOpen: false }

    handleDrawerOpen = () => {
        this.setState({ drawerIsOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpen: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.topBar}/>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="#103C6F" aria-label="Menu" onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <div className={classes.appBarText}>
                        <div className={classes.appBarTextHeadline}>
                            <Typography className={classes.appBarTextHeadlineT} variant="h1" gutterBottom>
                                    מוסדות
                            </Typography>
                        </div>
                    </div>
                </AppBar>
                <Drawer
                    variant="persistent"
                    classes={{paper: classes.drawerPaper}}
                    open={this.state.drawerIsOpen}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton className={classes.drawerHeaderIcon} onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <div className={classes.drawerInner}>
                        <p>drawer content</p>
                    </div>
                </Drawer>
            </div>
        );
    }
}


export default withStyles(styles)(Home);

