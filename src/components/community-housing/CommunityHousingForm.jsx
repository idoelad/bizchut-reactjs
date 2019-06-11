import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

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

class CommunityHousingForm extends Component {
    render() {
        const { classes, handleChange } = this.props;

        return (
            <div className={classes.formArea}>
                <form className={classes.form}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">שם מלא</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('name')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="שם מלא"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend"> טלפון נייד</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('phone')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="טלפון נייד"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend"> אימייל</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('email')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="כתובת אימייל"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">הערות נוספות על דרכי קשר</FormLabel>
                        <TextField
                            id="whatHappened"
                            multiline
                            rows="5"
                            onChange={handleChange('details')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            placeholder="פרטים נוספים"
                        />
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(CommunityHousingForm);
