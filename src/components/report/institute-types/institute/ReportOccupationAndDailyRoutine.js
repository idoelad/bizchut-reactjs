import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography, Input} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {formStyles} from "../../../../formStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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

class ReportOccupationAndDailyRoutine extends Component{
        constructor (props) {
            super(props);
            this.state = {OtherClicked: false};
            this.handleOtherClick = this.handleOtherClick.bind(this);
            this.handleDefaultClick = this.handleDefaultClick.bind(this);
        }

        handleDefaultClick() {
            console.log("jjjj");
            this.setState({OtherClicked: false})
        }
        handleOtherClick () {
                 console.log("hello");
                 this.setState({OtherClicked: true})
            }

       
    
    render () {
        const subject = 'OccupationAndDailyRoutine';
        const { classes, getValue, handleChange } = this.props;
        
        
        
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        תעסוקה וסדר יום
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form className={classes.form}>
                        
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם הדיירים יוצאים לתעסוקה מחוץ למוסד?</FormLabel>
                            <RadioGroup
                                aria-label="OutdoorOccupations"
                                name="OutdoorOccupations"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.OutdoorOccupations')}
                                defaultValue={getValue(subject+'.OutdoorOccupations')}
                            >
                                <FormControlLabel className={classes.radioFix} value="Yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="No" control={<Radio />} label="לא" />
                                </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם הדיירים מקבלים תשלום על עבודתם?</FormLabel>
                            <RadioGroup
                                aria-label="PaymentForWork"
                                name="PaymentForWork"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.PaymentForWork')}
                                defaultValue={getValue(subject+'.PaymentForWork')}
                            >
                                <FormControlLabel className={classes.radioFix} value="Yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="No" control={<Radio />} label="לא" />
                                </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">כמה פעמים בשבוע מתקיימת פעילות תרבות ופנאי באגף?</FormLabel>
                            <RadioGroup
                                aria-label="cultureAndLeisure"
                                name="cultureAndLeisure"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.cultureAndLeisure')}
                                defaultValue={getValue(subject+'.cultureAndLeisure')}
                            >
                                <FormControlLabel className={classes.radioFix} value="1" control={<Radio />} label="פעם אחת" />
                                <FormControlLabel className={classes.radioFix} value="2" control={<Radio />} label="פעמיים" />
                                <FormControlLabel className={classes.radioFix} value="3" control={<Radio />} label="שלוש פעמים" />
                                <FormControlLabel className={classes.radioFix} value="more" control={<Radio />} label="יותר" />
                              </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">האם הדיירים יוצאים לבילוי מחוץ למוסד?</FormLabel>
                            <RadioGroup
                                aria-label="OutdoorHangout"
                                name="OutdoorHangout"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.OutdoorHangout')}
                                defaultValue={getValue(subject+'.OutdoorHangout')}
                            >
                                <FormControlLabel className={classes.radioFix} value="Yes" control={<Radio />} label="כן" />
                                <FormControlLabel className={classes.radioFix} value="No" control={<Radio />} label="לא" />
                                </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">אם כן, לאיזה סוג של פעילות?</FormLabel>
                            <RadioGroup
                                aria-label="HangoutActivities"
                                name="HangoutActivities"
                                className={classes.formRadio}
                                onChange={handleChange(subject+'.HangoutActivities')}
                                defaultValue={getValue(subject+'.HangoutActivities')}
                            >
                                <FormControlLabel className={classes.radioFix} value="Courses" control={<Radio />} onClick={this.handleDefaultClick} label="חוגים" />
                                <FormControlLabel className={classes.radioFix} value="Vacation" control={<Radio />} onClick={this.handleDefaultClick} label="נופש" />
                                <FormControlLabel className={classes.radioFix} value="other" control={<Radio />} onClick={this.handleOtherClick} label="אחר" />
                                <Input
                                disabled={(!this.state.OtherClicked)}
                                className={classes.Input}
                                inputProps={{
                                    'aria-label': 'אחר',
                                }}
                                onChange={handleChange(subject+'.HangoutActivities')}
                                defaultValue={getValue(subject+'.HangoutActivities')}
                                />
                                
                                                              
                            </RadioGroup>
                           
                        </FormControl>

                    </form>
                </div>
            </div>
        )
    }
    }

export default withStyles(styles)(ReportOccupationAndDailyRoutine);
