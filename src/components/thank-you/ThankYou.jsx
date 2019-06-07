import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

import {formStyles} from "../../formStyles";
const thisStyles = {
    complaintToolbar: {
        height: 50,
        color: '#FFFFFF',
        marginRight: 15,
        paddingRight: 0
    },
    lowerToolbar: {
        height: 30
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
    deccriptionFirstChild: {
        marginBottom: 50
    },
    footer: {
        backgroundColor: '#2A3A51',
        height: 150,
        textAlign: 'center',
        color: '#FFF',
    },
    fullHeight: {
        height: '100%'
    },
    alignCenter: {
        margin: 15
    },
    body: {
        height: '58vh',
        margin: 15,
        textAlign: 'center'
    },
    footerText: {
        paddingTop: 35
    }
};

const styles = {...formStyles, ...thisStyles};

class ThankYou extends Component {
    render() {
        const { classes, children, header, description } = this.props;

        return (
            <div className={classes.fullHeight}>
                <Toolbar className={classes.complaintToolbar}>
                    <Typography variant="h6" color="inherit">
                        {header}
                    </Typography>
                </Toolbar>
                <div className={classes.lowerToolbar}>
                    <Divider className={classes.toolbarDivider} variant="middle" light={true}/>
                </div>
                <div className={classes.description}>
                    <Typography className={classes.deccriptionFirstChild} variant="h3" color="inherit">
                        תודה רבה!
                    </Typography>
                    <Typography variant="h5" color="inherit">
                        {description}
                    </Typography>
                </div>
                <div className={classes.body}>
                    {children.map(child => (<div key={Date.now()} className={child.props.classes}>{child}</div>))}
                </div>
                <div className={classes.footer} onClick={() => this.props.goTo('home')}>
                    <Typography className={classes.footerText} variant="h5" color="inherit">
                        חזרה לעמוד הבית
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ThankYou);
