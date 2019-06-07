import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

import {formStyles} from "../../formStyles";
const thisStyles = {
    complaintAppBar: {
        backgroundColor: '#0E4787',
        boxShadow: 'none',
    },
    complaintToolbar: {
        height: 50,
        color: '#FFFFFF',
        marginRight: 15,
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
        color: '#FFF',
        marginTop: 0,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 15
    },
};

const styles = {...formStyles, ...thisStyles};

class ThankYou extends Component {
    render() {
        const { classes, children, header } = this.props;

        return (
            <div className={classes.root}>
                <Toolbar className={classes.complaintToolbar}>
                    <Typography variant="h6" color="inherit">
                        {header}
                    </Typography>
                </Toolbar>
                <div className={classes.lowerToolbar}>
                    <Divider className={classes.toolbarDivider} variant="middle" light={true}/>
                </div>
                <div className={classes.description}>
                    <Typography color="inherit">
                        ארגון בזכות מלווה אנשים המעוניינים לצאת למגורים בקהילה.
                        תרשום לנו דרכי יצירת קשר איתך המועדפים מבחינתך ונשוחח איתך על כך:
                    </Typography>
                </div>
                <div>
                    {children.map(child => (<div key={Date.now()}>{child}</div>))}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ThankYou);
