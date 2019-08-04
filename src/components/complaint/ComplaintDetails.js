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
import DeleteIcon from "@material-ui/icons/Delete";
import ReactMicRecord from "react-mic-record/es/components/ReactMicRecord";

import {formStyles} from "../../formStyles";
const thisStyles = {
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
    recordingArea: {
        display: 'flex',
        flexFlow: 'row',
        width: '95%',
        marginBottom: 10
    },
    record: {
        border: '1px solid #1A6DE0',
        borderRadius: 6,
    },
    recordingWave: {
        height: 50,
        width: '80%'
    },
    audio: {
        height: 45,
        marginTop: 2.5,
        width: '85%'
    },
    deleteContainer: {
        textAlign: 'left',
        paddingTop: 11,
        width: 50
    }
};
const styles = {...formStyles, ...thisStyles};


class ComplaintDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            record: false
        };
    }

    handleAddImages(e) {
        e.preventDefault();
        Array.from(e.target.files).forEach(file => {
            let reader = new FileReader();
            reader.onloadend = () => {
                this.props.addImage({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };
            reader.readAsDataURL(file)
        });
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

    handleRemoveRecording(e, audio) {
        e.preventDefault();
        this.props.removeRecording(audio);
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    renderAddImage() {
        const { classes, values} = this.props;
        //Temp: do not allow more than 1 image (payload will be too long)
        return values.images.length < 1 ?  (
            <Button variant="contained" className={classes.button} >
                <label htmlFor='single'>
                    <AddAPhotoIcon/>
                </label>
                <input
                    type="file"
                    //multiple
                    accept="image/x-png,image/gif,image/jpeg"
                    id='single'
                    onChange={(e)=>this.handleAddImages(e)}
                />
            </Button>
        ) :  '';
    }

    renderAddRecording() {
        const { classes, values, addRecording} = this.props;
        //Temp: do not allow more than 1 recordings
        return values.recordings.length < 1 ?  (
            <div className={classes.recordingArea} style={this.state.record ? {border: '1px solid #1A6DE0', borderRadius: 6} : {}}>
                <Button variant="contained" size="small" className={classes.button}>
                    <label htmlFor='single'>
                        {
                            this.state.record ?
                                <PauseCircleFilledIcon onClick={(e) => this.handleStopRecording(e)}/> :
                                <MicIcon onClick={(e) => this.handleStartRecording(e)}/>
                        }

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
        ) :  '';
    }

    render() {
        const { classes, values, handleChange, removeImage, addRecording} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        פרטי הדיווח
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
                                placeholder="תיאור המקרה במילים שלך"
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
                                {this.renderAddImage()}

                            </div>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">הקלטה קולית - ספרו לנו מה קרה</FormLabel>
                            <div className={classes.recordings}>
                                {
                                    values.recordings.map((audio, index) =>
                                        <div key={index} className={classes.recordingArea}
                                             style={{
                                                 border: '1px solid #1A6DE0',
                                                 borderRadius: 6,
                                                 height: 50,
                                                 backgroundColor: '#F1F3F4'
                                             }}>
                                            <audio className={classes.audio} src={audio.blobURL} controls="controls"/>
                                            <div className={classes.deleteContainer}>
                                                <DeleteIcon style={{paddingLeft: 5}} onClick={(e) => {this.handleRemoveRecording(e, audio)}}/>
                                            </div>
                                        </div>
                                    )
                                }
                                {this.renderAddRecording()}
                            </div>
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ComplaintDetails);
