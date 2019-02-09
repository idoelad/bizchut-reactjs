import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Input from "@material-ui/core/Input";

import {formStyles} from "../formStyles";
const thisStyles = {};
const styles = {...formStyles, ...thisStyles};


class ComplaintInstitute extends Component {

    render() {
        const { classes, values, handleChange } = this.props;
        return (
            <div>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        פרטי המוסד בו התרחש האירוע
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form className={classes.form}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">סוג המוסד</FormLabel>
                            <RadioGroup
                                aria-label="סוג המוסד"
                                name="סוג המוסד"
                                className={classes.formRadio}
                                onChange={handleChange('instituteType')}
                                defaultValue={values.instituteType}
                            >
                                <FormControlLabel className={classes.radioFix} value="מוסד" control={<Radio />} label="מוסד" />
                                <FormControlLabel className={classes.radioFix} value="בית חולים פסיכיאטרי" control={<Radio />} label="בית חולים פסיכיאטרי" />
                                <FormControlLabel className={classes.radioFix} value="הוסטל" control={<Radio />} label="הוסטל" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">שם המוסד</FormLabel>
                            <Input
                                className={classes.input}
                                placeholder='התשובה שלך'
                                inputProps={{
                                    'aria-label': 'שם המוסד',
                                }}
                                onChange={handleChange('instituteName')}
                                defaultValue={values.instituteName}
                            />
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">כתובת המוסד (רחוב ועיר)</FormLabel>
                            <Input
                                className={classes.input}
                                placeholder='אפשר לציין רק עיר או אזור בארץ'
                                inputProps={{
                                    'aria-label': 'כתובת המוסד (רחוב ועיר)',
                                }}
                                onChange={handleChange('instituteAddress')}
                                defaultValue={values.instituteAddress}
                            />
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ComplaintInstitute);
