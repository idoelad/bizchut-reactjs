import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import SignatureCanvas from 'react-signature-canvas'

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
    },
    law: {
        color: '#000',
        fontSize: 16
    },
    formArea: {
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        paddingLeft: 15
    },
};

const styles = {...formStyles, ...thisStyles};

class PowerOfAttorneyForm extends Component {
    sigCanvas = null;

    render() {
        const { classes, handleChange } = this.props;

        return (
            <div className={classes.formArea}>
                <form className={classes.form}>
                    <FormLabel className={classes.formLabel} component="legend">אני, </FormLabel>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">שם פרטי</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('firstName')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="התשובה שלך"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">שם משפחה</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('lastName')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="התשובה שלך"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend"> תעודת זהות</FormLabel>
                        <Input
                            id="whatHappened"
                            multiline
                            onChange={handleChange('id')}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="מספר תעודת זהות כולל ספרת ביקורת"
                        />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">
                            <span className={classes.law}>
                                מייפה את כוחן של נעמה לרנר, יקירה אברך,צביה שפירו- וייסברג ותמי גרוס, עובדות עמותת "בזכות" המרכז לזכויות אדם של אנשים עם מוגבלויות, [1], לסייע לי בנוגע למיצוי הזכוית שלי במסגרת המגורים/אשפוז שלי, להיפגש איתי לצורך הסיוע,לפנות אליכם בכתב או בעל פה בעבורי ובשמי בענייני, וכן לבקש ולקבל בשמי כל מידע הנוגע אלי, בעל פה או בכתב, ככל שיידרש על ידיהם בעניין זה.
                            בחתימתי להלן, יש לראות גם אישור בקשר לפטור שאנוכי נותן/ת לכם מכל חובות סודיות שחלה עליכם ו/או שתחול עליכם לפי כל חוק ו/או דין.
                            </span>
                        </FormLabel>
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.formLabel} component="legend">חתימה</FormLabel>
                        <div style={{border: 'solid 1px #000'}}>
                            <SignatureCanvas
                                penColor='black'
                                onEnd={() => handleChange('signature')(this.sigCanvas.getCanvas().toDataURL())}
                                ref={(ref) => { this.sigCanvas = ref }}
                                canvasProps={{width: 'auto', height: 200, className: 'sigCanvas'}} />
                        </div>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(PowerOfAttorneyForm);
