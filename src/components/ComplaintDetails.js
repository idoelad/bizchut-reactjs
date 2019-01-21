import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import MicIcon from "@material-ui/icons/Mic";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import ReactMicRecord from "react-mic-record/es/components/ReactMicRecord";

const styles = {
    pageTitle: {
        backgroundColor: '#0E4787',
        height: 40,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 10,
    },
    formArea: {
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 20,
        marginRight: 10,
    },
    formLabel: {
        paddingBottom: 10
    },
    formControl: {
        paddingBottom: 30
    },
    textField: {
        width: '95%',
    },
    fileInput: {
        width: 0,
        height: 0
    },
    images: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    button: {
        height: 50,
        width: 50,
        marginLeft: 15,
        minWidth: '0 !important',
        lineHeight: 1,
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
        border: '1px solid black'

    },
    imgUploads: {
        height: 50,
        width: 50,
        marginLeft: 15,
        marginBottom: 15
    },
    imageWrapper: {
        position: 'relative',
        display: 'inline-block'
    },
    removeImage: {
        position: 'absolute',
        top: 0,
        right: 3,
        cursor: 'pointer',
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 20
    },
    recordings: {
        display: 'flex',
        flexFlow: 'column wrap',
    },
    recordButton: {
        height: 50,
        width: 50,
        marginLeft: 15,
    },
    record: {
        display: 'flex',
        flexFlow: 'row',
        border: '1px solid #1A6DE0',
        borderRadius: 6,
        width: '95%'

    },
    recordingWave: {
        height: 50,
        width: '80%'
    }

};


class ComplaintDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            record: false
        }
    }

    handleAddImage(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.props.addImage({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
    }

    handleStartRecording(e) {
        e.preventDefault();
        this.setState({
            record: true
        });
    }

    handleStopRecording(e) {
        e.preventDefault();
        this.setState({
            record: false
        });
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    };


    render() {
        const { classes, values, handleChange, removeImage, addRecording, removeRecording} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        פרטי התלונה
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form className={classes.form}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">מה קרה?</FormLabel>
                            <TextField
                                id="whatHappened"
                                multiline
                                rows="5"
                                defaultValue={values.whatHappened}
                                onChange={handleChange('whatHappened')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                placeholder="כתבו כאן את פרטי התלונה באופן המפורט ביותר"
                            />
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">העלאת קובץ וידאו או תמונה</FormLabel>
                            <div className={classes.images}>
                                {
                                    values.images.map(img => {
                                        return (
                                        <div key={img.file.lastModified}>
                                            <div className={classes.imageWrapper}>
                                                <img src={img.imagePreviewUrl} className={classes.imgUploads}/>
                                                <span className={classes.removeImage} onClick={(e) => removeImage(img)}>X</span>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                <Button variant="contained" className={classes.button} >
                                    <label htmlFor='single'>
                                        <AddAPhotoIcon/>
                                    </label>
                                    <input type="file" id='single' onChange={(e)=>this.handleAddImage(e)}/>
                                </Button>
                            </div>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">הקלטה קולית - ספרו לנו מה קרה</FormLabel>
                            <div className={classes.recordings}>
                                {
                                    values.recordings.map(recording => {
                                        console.log(recording);
                                        // return (
                                        //     <div key={recording}>
                                        //         <div className={classes.imageWrapper}>
                                        //             <img src={img.imagePreviewUrl} className={classes.imgUploads}/>
                                        //             <span className={classes.removeImage} onClick={(e) => removeImage(img)}>X</span>
                                        //         </div>
                                        //     </div>
                                        // )
                                    })
                                }
                                <div style={{ display: !this.state.record ? 'flex' : 'none' }}>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        <label htmlFor='single'>
                                            <MicIcon onClick={(e) => this.handleStartRecording(e)}/>
                                        </label>
                                    </Button>
                                </div>
                                <div className={classes.record} style={{ display: this.state.record ? 'flex' : 'none' }}>
                                    <Button variant="contained" size="small" className={classes.button}>
                                        <label htmlFor='single'>
                                            <PauseCircleFilledIcon onClick={(e) => this.handleStopRecording(e)}/>
                                        </label>
                                    </Button>
                                    <ReactMicRecord
                                        record={this.state.record}
                                        className={classes.recordingWave}
                                        onData={this.onData}
                                        onStop={addRecording}
                                        strokeColor="#1A6DE0"
                                        backgroundColor="#FFFFFF"
                                    />
                                </div>
                            </div>
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ComplaintDetails);
