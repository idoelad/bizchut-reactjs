import React, {Component} from 'react';
import ComplaintInstitute from "./ComplaintInstitute";
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import ComplaintDetails from "./ComplaintDetails";

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
    }
};

class Complaint extends Component {
    state = {
        step: 2,
        instituteType: null,
        instituteName: '',
        instituteAddress: '',
        whatHappened: '',
        images: [],
        recordings: []
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: Math.min(3, step + 1)
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: Math.max(1, step - 1)
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    addImage = (image) => {
        let { images } = this.state;
        images.push(image);
        this.setState( {images: images} );
    };

    removeImage = (imageToRemove) => {
        let { images } = this.state;
        let newImages = images.filter(image => image !== imageToRemove);
        this.setState( {images: newImages} );
    };

    addRecording = (recording) => {
        console.log('addRecording', recording);
        let { recordings } = this.state;
        recordings.push(recording);
        this.setState( {recordings: recordings} );
    };

    removeRecording = (recordingToRemove) => {
        let { recordings } = this.state;
        let newRecordings = recordings.filter(image => image !== recordingToRemove);
        this.setState( {recordings: newRecordings} );
    };

    renderStep() {
        const { step } = this.state;
        const { instituteType, instituteName, instituteAddress, whatHappened, images, recordings } = this.state;
        const values = { instituteType, instituteName, instituteAddress, whatHappened, images, recordings};

        switch(step) {
            case 1:
                this.nextText = 'שמור והמשך לפרטי התלונה';
                this.formPart = (
                    <ComplaintInstitute
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
                break;
            case 2:
                this.nextText = 'שמור והמשך לפרטים אישיים';
                this.formPart = (
                    <ComplaintDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        addImage={this.addImage}
                        removeImage={this.removeImage}
                        addRecording={this.addRecording}
                        removeRecording={this.removeRecording}
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
                            הגשת תלונה
                        </Typography>
                    </Toolbar>
                    <div className={classes.lowerToolbar}>
                        <Divider className={classes.toolbarDivider} variant="middle" light="true"/>
                    </div>
                </AppBar>
                {this.formPart}
                <div className={classes.footerBar}>
                    <Fab variant="extended" aria-label="שמור והמשך לפרטי התלונה" className={classes.footerButton} onClick={this.nextStep}>
                        {this.nextText}
                    </Fab>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Complaint);
