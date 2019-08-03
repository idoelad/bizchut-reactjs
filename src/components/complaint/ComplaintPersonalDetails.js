import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import {formStyles} from "../../formStyles";
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
                            <FormLabel className={classes.formLabel} component="legend">הקשר שלי למסגרת</FormLabel>
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
                                <option value="דייר">דייר</option>
                                <option value="בן משפחה">בן משפחה</option>
                                <option value="איש צוות">איש צוות</option>
                                <option value="בקר מוסדות">בקר מוסדות</option>
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
