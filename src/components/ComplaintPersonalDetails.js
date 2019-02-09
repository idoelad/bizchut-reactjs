import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const styles = {
    pageTitle: {
        backgroundColor: '#0E4787',
        paddingBottom: 20,
        paddingRight: 30,
        color: '#FFFFFF',
        textAlign: 'right',
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
    formRadio: {
        marginRight: -25
    },
    input: {
        width: '95%'
    }

};


class ComplaintPersonalDetails extends Component {

    render() {
        const { classes, values, handleChange } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                        ניתן להגיש תלונה באנונימיות, אך ככל שיהיו לנו יותר פרטים נוכל לטפל ביעילות רבה יותר
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form className={classes.form}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">שם מלא</FormLabel>
                            <Input
                                className={classes.input}
                                placeholder='שם פרטי ומשפחה'
                                inputProps={{
                                    'aria-label': 'שם פרטי ומשפחה',
                                }}
                                onChange={handleChange('name')}
                                defaultValue={values.name}
                            />
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">טלפון נייד</FormLabel>
                            <Input
                                className={classes.input}
                                placeholder='05x-xxxxxxx'
                                inputProps={{
                                    'aria-label': '05x-xxxxxxx',
                                }}
                                onChange={handleChange('phone')}
                                defaultValue={values.phone}
                            />
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">אימייל</FormLabel>
                            <Input
                                className={classes.input}
                                type='email'
                                placeholder='yourname@email.com'
                                inputProps={{
                                    'aria-label': 'yourname@email.com',
                                }}
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <FormLabel className={classes.formLabel} component="legend">הקשר שלי למוסד</FormLabel>
                            <Select
                                className={classes.input}
                                native
                                value={values.relation}
                                onChange={handleChange('relation')}
                                input={
                                    <OutlinedInput
                                        name="age"
                                        //labelWidth={this.state.labelWidth}
                                        id="outlined-age-native-simple"
                                    />
                                }
                            >
                                <option value="" />
                                <option value="עובד במוסד">עובד במוסד</option>
                                <option value="מטופל">מטופל</option>
                                <option value="קרוב משפחה">קרוב משפחה</option>
                                <option value="אחר">אחר</option>
                            </Select>
                        </FormControl>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ComplaintPersonalDetails);
