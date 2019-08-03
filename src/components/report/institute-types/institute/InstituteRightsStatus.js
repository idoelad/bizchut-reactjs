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
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const thisStyle = {
    subjectItem: {
        //backgroundColor: '#0E4787',
        backgroundColor: '#FFFFFF',
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
    renderInput(QA) {
        const { classes , values, handleSelect, getValue } = this.props;
        switch (QA.type) {
            case 'radio':
                return (
                    <RadioGroup
                        aria-label={QA.label}
                        name={QA.label}
                        className={classes.formRadio}
                        onChange={
                            (e) => {
                                // let QAnDA = {question: QA.label, answer: e.target.value}
                                // {handleClick(values.categoryDetails.CategoryName + '[' +  index + ']' + ':', QAnDA)}
                                let question = QA.label;
                                let answer = e.target.value;
                                {handleSelect('questions.'+values.categoryDetails.CategoryName+'.'+question, answer)}
                            }
                        }
                    >
                        {QA.options.map((options, index) =>
                            <FormControlLabel key={index} className={classes.radioFix} value={options} control={<Radio/>} label={options}/>
                        )}
                    </RadioGroup>
                );
            case 'input':
                return (
                    <Input
                        className={classes.input}
                        onChange={
                            (e) => {
                                let question = QA.label;
                                let answer = e.target.value;
                                {handleSelect('questions.'+values.categoryDetails.CategoryName+'.'+question, answer)}
                            }
                        }
                        defaultValue={values.name}
                    />
                );
            case 'text':
                return (
                    <TextField
                        multiline
                        rows="5"
                        onChange={
                            (e) => {
                                let question = QA.label;
                                let answer = e.target.value;
                                {handleSelect('questions.'+values.categoryDetails.CategoryName+'.'+question, answer)}
                            }
                        }
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                );
            case 'checkbox':
                return (
                    <FormGroup>
                        {QA.options.map((option, index) =>
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        onChange={
                                            (e) => {
                                                console.log(e.target.checked);
                                                let question = QA.label;
                                                let path = 'questions.'+values.categoryDetails.CategoryName+'.'+question;
                                                let currentAnswer = getValue(path);
                                                let answer;
                                                let value = e.target.value;
                                                if (e.target.checked) {
                                                    answer = currentAnswer ? currentAnswer+','+value : value;
                                                } else {
                                                    let currentAnswerParts = currentAnswer ? currentAnswer.split(',') : [];
                                                    currentAnswerParts = currentAnswerParts.filter(item => item !== value);
                                                    answer = currentAnswerParts.join(',');
                                                }
                                                {handleSelect(path, answer)}
                                            }
                                        }
                                        value={option}
                                    />}
                                label={option}
                            />
                        )}

                    </FormGroup>
                );
            default:
                return '';
        }

    }

    render() {
        const { classes , values, handleSelect, handleUserChoise  } = this.props;
        const subject = 'questionsAndAnswers';
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                            {values.categoryDetails.CategoryName}              
                    </Typography>
                </div>

            <List className={classes.root}>
                    {
                        values.categoryDetails.questionsAndAnswers.map((QA, index) =>
                            <React.Fragment key={index}>
                            <div>
                                <ListItem className={classes.subjectItem} name="ChosenCategory">
                                    <ListItemText
                                        primary={
                                            <form className={classes.form}>
                                             <FormControl component="fieldset" className={classes.formControl}>
                                                <FormLabel className={classes.formLabel} component="legend">{QA.label}</FormLabel>
                                                 {this.renderInput(QA)}
                                            </FormControl>
                                            </form>
                                        }>
                                        </ListItemText>
                                </ListItem>
                                </div>
                                {/* <Divider style={{ backgroundColor: 'rgb(255, 255, 255, 0.3)', height: 2, width: '90%', margin: 'auto' }}/> */}
                            </React.Fragment>
                        )
                    }
                </List>
                </div>
        )
    }
}

export default withStyles(styles)(InstituteRightsStatus);

