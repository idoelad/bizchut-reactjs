import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import PowerOfAttorneyFrom from './PowerOfAttorneyForm';

import {formStyles} from "../../formStyles";
const thisStyles = {
    complaintAppBar: {
        backgroundColor: '#0E4787',
        boxShadow: 'none',
    },
    complaintToolbar: {
        height: 50,
        color: '#FFFFFF',
        paddingRight: 0
    },
    lowerToolbar: {
        height: 30
    },
    buttonComplaint: {
        backgroundColor: '#F1173A',
        color: '#FFFFFF',
        width: '80%',
        height: 50,
        fontSize: 18,
        marginTop: 20,
        boxShadow: 'none',
    },
    buttonWrapper: {
        textAlign: 'center',
        marginBottom: 20
    },
    toolbarDivider: {
        backgroundColor: '#819DBD',
        height: 3
    },
    footerBar: {
        height: 100,
        backgroundColor: '#0E4787',
        textAlign: 'center'
    },
    footerButton: {
        backgroundColor: '#F1173A',
        color: '#FFFFFF',
        marginTop: 25,
        width: '80%',
        fontSize: 16,
        boxShadow: 'none'
    },
    description: {
        marginTop: 0,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 15
    }
};

const styles = {...formStyles, ...thisStyles};

class PowerOfAttorney extends Component {
    state = {
        firstName: null,
        lastName: null,
        id: null,
        signature: null
    };

    handleChange = input => e => {
        this.setState({[input]: e.target ? e.target.value : e});
    };

    handleSave = () => {
        console.log(this.state);
        const {classes} = this.props;
        this.props.goTo(
            'thank-you',
            {
                header: 'יפויי כוח וויתור סודיות',
                description: 'ניצור קשר בהקדם !'
            },
            [
                <Fab variant="extended" aria-label="אני רוצה להגיש תלונה פרטנית" style={formStyles.redButton}>
                    דיור נוסף
                </Fab>
            ]
        )
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.complaintAppBar}>
                    <Toolbar className={classes.complaintToolbar}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.props.goTo('home')}>
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            יפויי כוח וויתור סודיות
                        </Typography>
                    </Toolbar>
                    <div className={classes.lowerToolbar}>
                        <Divider className={classes.toolbarDivider} variant="middle" light={true}/>
                    </div>
                    <div className="power-of-attorney-form">
                        <PowerOfAttorneyFrom  handleChange={this.handleChange}/>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <Fab variant="extended" aria-label="אני רוצה להגיש תלונה פרטנית" className={classes.buttonComplaint} onClick={this.handleSave}>
                            שלח ייפוי כוח
                        </Fab>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(PowerOfAttorney);
