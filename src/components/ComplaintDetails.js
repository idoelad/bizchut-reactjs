import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
        // flexDirection: 'horizontal',
        flexFlow: 'row wrap'
    },
    button: {
        height: 50,
        width: 50,
        marginLeft: 15,
        marginBottom: 15,
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
    }
};


class ComplaintDetails extends Component {

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

    render() {
        const { classes, values, handleChange } = this.props;
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
                                <Button variant="contained" className={classes.button} >
                                    <label htmlFor='single'>
                                        <AddAPhotoIcon/>
                                    </label>
                                    <input type="file" id='single' onChange={(e)=>this.handleAddImage(e)}/>
                                </Button>
                                {
                                    values.images.map(img => {
                                        console.log(img);
                                        return (
                                        <div key={img.file.lastModified}>
                                            <img src={img.imagePreviewUrl} className={classes.imgUploads}/>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">הקלטה קולית - ספרו לנו מה קרה</FormLabel>
                            <Button variant="contained" size="small" className={classes.button} >
                                <label htmlFor='single'>
                                    <AddAPhotoIcon/>
                                </label>
                                <input type="file" accept="audio/*;capture=microphone" capture/>
                            </Button>
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ComplaintDetails);
