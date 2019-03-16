import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Institute from "../shared/Institute";
import ReportSubjects from "./ReportSubjects";
import ReportInstitutePhysicalConditions from "./institute-types/institute/ReportInstitutePhysicalConditions";

const styles = {
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
        height: 10
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
    }
};

class Report extends Component {
    state = {
        step: 'institute',
        values: {
            instituteType: null,
            instituteName: '',
            instituteAddress: '',
            physicalConditions: {}
        }
    };

    goToStep = (step) => {
        this.setState({
            step: step
        });
        window.scrollTo(0, 0)
    };

    prevStep = () => {
        const { step } = this.state;
        const newStep = step - 1;
        if (newStep >= 1) {
            this.setState({
                step: newStep
            });
        } else {
            this.props.goTo('home');
        }
    };

    updateValues = (path, newValue) => {
        let { values } = this.state;
        Report.updateObject(values, path, newValue);
        this.setState({
            values: values
        });
    };

    static updateObject(object, path, newValue){
        let stack = path.split('.');
        let cur;
        while(stack.length > 1) {
            cur = stack.shift();
            if (!object[cur]) {
                object[cur] = {}
            }
            object = object[cur];
        }
        object[stack.shift()] = newValue;
    }

    getValue = (path) => {
        let { values } = this.state;
        return Report.getObjectValue(values, path);
    };

    static getObjectValue(object, path){
        let stack = path.split('.');
        let cur;
        while(stack.length > 0) {
            cur = stack.shift();
            if (typeof object[cur] === 'undefined') {
                return null;
            }
            object = object[cur];
        }
        return object;
    }

    handleChange = (path) => e => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.updateValues(path, value);
    };

    renderStep() {
        const { step } = this.state;
        let values = this.state.values;

        switch(step) {
            case 'institute':
                this.nextText = 'המשך לשאלון';
                this.nextStep = 'reportSubjects';
                this.formPart = (
                    <Institute
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
                break;
            case 'reportSubjects':
                this.nextText = 'שמור ושלח דיווח';
                this.nextStep = ''; //TODO
                this.formPart = (
                    <ReportSubjects
                        handleChange={this.handleChange}
                        values={values}
                        goToStep={this.goToStep}
                    />
                );
                break;
            case 'reportInstitutePhysicalConditions':
                this.nextText = 'שמור והמשך';
                this.nextStep = 'reportInstituteEmployment'; //TODO
                this.formPart = (
                    <ReportInstitutePhysicalConditions
                        handleChange={this.handleChange}
                        getValue={this.getValue}
                    />
                );
                break;
            default:
                break;
        }
    }

    render() {
        const { classes } = this.props;
        this.renderStep();
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.complaintAppBar}>
                    <Toolbar className={classes.complaintToolbar}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.prevStep}>
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            דיווח על מוסד
                        </Typography>
                    </Toolbar>
                    <div className={classes.lowerToolbar}>
                        <Divider className={classes.toolbarDivider} variant="middle" light="true"/>
                    </div>
                </AppBar>
                {this.formPart}
                <div className={classes.footerBar}>
                    <Fab variant="extended" className={classes.footerButton} onClick={(e) => {this.goToStep(this.nextStep)}}>
                        {this.nextText}
                    </Fab>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Report);
