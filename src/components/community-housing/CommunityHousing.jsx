import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import CommunityHousingForm from './CommunityHousingForm';

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
        textAlign: 'center'
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

class CommunityHousing extends Component {
    state = {
        name: null,
        phone: null,
        email: null,
        details: null
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    handleSave = () => {
      const {classes} = this.props;
      this.props.formSubmissionApi('community-housing', this.state);
      this.props.goTo('thank-you')
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
                            יציאה לדיור בקהילה
                        </Typography>
                    </Toolbar>
                    <div className={classes.lowerToolbar}>
                        <Divider className={classes.toolbarDivider} variant="middle" light={true}/>
                    </div>
                    <div className={classes.description}>
                        <Typography color="inherit">
                            ארגון בזכות מלווה אנשים המעוניינים לצאת למגורים בקהילה.
                            ספר לנו איך נוכל ליצור איתך קשר ונשמח לשוחח איתך על כך:
                        </Typography>
                    </div>
                    <div className="community-housing">
                        <CommunityHousingForm handleChange={this.handleChange}/>
                    </div>
                    <div className={classes.buttonWrapper}>
                        <Fab variant="extended" aria-label="אני רוצה להגיש תלונה פרטנית" className={classes.buttonComplaint} onClick={this.handleSave}>
                           שליחת בקשה
                        </Fab>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(CommunityHousing);
