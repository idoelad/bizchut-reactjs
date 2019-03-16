import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {formStyles} from "../../../../formStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
const thisStyles = {
    pageTitle: {
        backgroundColor: '#0E4787',
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 10,
        color: '#FFFFFF',
        textAlign: 'right',
        paddingTop: 10,
    }
};
const styles = {...formStyles, ...thisStyles};

class ReportInstitutePhysicalConditions extends Component {

    render() {
        const subject = 'physicalConditions';
        const { classes, getValue, handleChange } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        תנאים פיזיים בכל ביתן/אגף
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form className={classes.form}>
                        {/*<ReportFormComponent*/}
                            {/*type='radio'*/}
                            {/*label='כמה דיירים גרים בחדר?'*/}
                            {/*options={['1','2','3','יותר']}*/}
                            {/*path={subject+'.numberOfTenants'}*/}
                            {/*// handleChange={handleChange}*/}
                            {/*// getValue={getValue}*/}
                        {/*/>*/}

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">כמה דיירים גרים בחדר?</FormLabel>
                            <RadioGroup
                                aria-label="numberOfTenants"
                                name="numberOfTenants"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.numberOfTenants')}
                                defaultValue={getValue(subject+'.numberOfTenants')}
                            >
                                <FormControlLabel className={classes.radioFix} value="1" control={<Radio />} label="1" />
                                <FormControlLabel className={classes.radioFix} value="2" control={<Radio />} label="2" />
                                <FormControlLabel className={classes.radioFix} value="3" control={<Radio />} label="3" />
                                <FormControlLabel className={classes.radioFix} value="יותר" control={<Radio />} label="יותר" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">אילו פריטים קיימים באגף?</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.books')} onChange={handleChange(subject+'.equipment.books')}/>}
                                    label="ספרים"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.computer')} onChange={handleChange(subject+'.equipment.computer')}/>}
                                    label="מחשב"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.tv')} onChange={handleChange(subject+'.equipment.tv')}/>}
                                    label="טלוויזיה"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.games')} onChange={handleChange(subject+'.equipment.games')}/>}
                                    label="משחקים"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.arts')} onChange={handleChange(subject+'.equipment.arts')}/>}
                                    label="חומרי יצירה"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.couches')} onChange={handleChange(subject+'.equipment.couches')}/>}
                                    label="ספות ישיבה"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={getValue(subject+'.equipment.musicPlayer')} onChange={handleChange(subject+'.equipment.musicPlayer')}/>}
                                    label="נגן מוזיקה"
                                />
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם יש באגף מטבח שמאפשר הכנת אוכל במקום?</FormLabel>
                            <RadioGroup
                                row
                                aria-label="kitchen"
                                name="kitchen"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.kitchen')}
                                defaultValue={getValue(subject+'.kitchen')}
                            >
                                <FormControlLabel className={classes.radioFix} value="yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="no" control={<Radio />} label="לא" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם הדיירים יכולים להיכנס לחדר שלהם בכל שעות היום?</FormLabel>
                            <RadioGroup
                                row
                                aria-label="room"
                                name="room"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.EnterRoomAllDay')}
                                defaultValue={getValue(subject+'.EnterRoomAllDay')}
                            >
                                <FormControlLabel className={classes.radioFix} value="yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="no" control={<Radio />} label="לא" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם הריהוט שלם ותקין?</FormLabel>
                            <RadioGroup
                                row
                                aria-label="furniture"
                                name="furniture"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.furniture')}
                                defaultValue={getValue(subject+'.furniture')}
                            >
                                <FormControlLabel className={classes.radioFix} value="yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="no" control={<Radio />} label="לא" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">כמה דיירים חולקים מקלחת ושירותים?</FormLabel>
                            <RadioGroup
                                aria-label="bathroom"
                                name="bathroom"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.bathroom')}
                                defaultValue={getValue(subject+'.bathroom')}
                            >
                                <FormControlLabel className={classes.radioFix} value="1-2" control={<Radio />} label="1-2" />
                                <FormControlLabel className={classes.radioFix} value="3-5" control={<Radio />} label="3-5" />
                                <FormControlLabel className={classes.radioFix} value="6+" control={<Radio />} label="6 ומעלה" />
                            </RadioGroup>
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ReportInstitutePhysicalConditions);
