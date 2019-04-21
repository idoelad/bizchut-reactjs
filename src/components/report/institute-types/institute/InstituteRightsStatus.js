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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const thisStyle = {
    subjectItem: {
        backgroundColor: '#0E4787',
        textAlign: 'right',
        color: '#FFFFFF'

    },
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
const styles = {...formStyles, ...thisStyle};

class InstituteRightsStatus extends Component {
    
    render() {
        const { classes, getValue, handleChange } = this.props;
        const subject = 'instituteRightsStatus';
        console.log(this.props.values.CategoryDetails.CategoryName);
           
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                            {this.props.values.CategoryDetails.CategoryName}               
                    </Typography>
                </div>
            <List className={classes.root}>
                    {
                        this.props.values.CategoryDetails.questionsAndAnswers.map((el, index) =>
                            <React.Fragment key={index}>
                                <ListItem className={classes.subjectItem} name="ChosenCategory">
                                    <ListItemText
                                        primary={
                                            <form className={classes.form}>
                                            <FormControl component="fieldset" className={classes.formControl}>
                                                <FormLabel className={classes.formLabel} component="legend">{el.label}</FormLabel>
                                                <RadioGroup
                                                    aria-label={el.label}
                                                    name={el.label}
                                                    className={classes.formRadio}
                                                    onChange={handleChange(subject+'.categoryDetails')}

                                                >
                                                        {el.options.map((options, index) => 
                                                        
                                                             <FormControlLabel key={index} className={classes.radioFix} value={options} control={<Radio/>} label={options}/>
                                                            
                                                        )}
                                                        
                                                </RadioGroup>
                                            </FormControl>
                                            </form>
                                        }>
                                        </ListItemText>
                                </ListItem>
                                <Divider style={{ backgroundColor: 'rgb(255, 255, 255, 0.3)', height: 2, width: '90%', margin: 'auto' }}/>
                            </React.Fragment>
                        )
                    }
                </List>
                </div>
        )
    }
}

export default withStyles(styles)(InstituteRightsStatus);
