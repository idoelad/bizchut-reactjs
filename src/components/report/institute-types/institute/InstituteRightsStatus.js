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
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';

const thisStyle = {
    subjectItem: {
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
   
    questionRendering (QA, index) {
        const { classes , values, handleClick, handleChange, getValue  } = this.props
        const subject = QA.label;
        switch(QA.type) {
            case "radio":
            return <RadioGroup
            aria-label={QA.label}
            name={QA.label}
            className={classes.formRadio}
            onChange={ (e) => {
            let QAnDA = {question: QA.label, answer: e.target.value}
            {handleClick(values.categoryDetails.CategoryName + '[' +  index + ']' + ':', QAnDA)}
            }}>
            {QA.options.map((options, index) => 
            <FormControlLabel key={index} className={classes.radioFix} value={options.toString()} control={<Radio/>} label={options}/>   
            )}
             </RadioGroup>;

            case "checkbox":        
            const qa = QA;
            let optionsList = qa.options;
            console.log(qa, optionsList);
            return  <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={getValue({subject}+'.equipment.books')} onChange={handleChange(subject+'.equipment.books')}/>}
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
        
             case 'input':
             return <TextField
             className={classes.TextField}
             multiline = {true}
             onChange={(e) => {
                let QAnDA = {question: QA.label, answer: e.target.value}
                {handleChange(values.categoryDetails.CategoryName + '[' +  index + ']' + ':', QAnDA)}
                }}/>
            }}
    
    render() {
        const { classes , values  } = this.props
          
        return (
            <div className={classes.root}>
                <div className={classes.pageTitle}>
                    <Typography variant="h5" color="inherit">
                            {values.categoryDetails.CategoryName}              
                    </Typography>
                </div>

            <List className={classes.root}>
                    {values.categoryDetails.questionsAndAnswers.map((QA, index) =>
                            <React.Fragment key={index}>
                                <ListItem className={classes.subjectItem} name="ChosenCategory">
                                    <ListItemText
                                        primary={
                                            <form className={classes.form}>
                                             <FormControl component="fieldset" className={classes.formControl}>
                                                <FormLabel className={classes.formLabel} component="legend">{QA.label}</FormLabel>  
                                                {this.questionRendering(QA, index)}
                                            </FormControl>
                                            </form>
                                        }>
                                        </ListItemText>
                                </ListItem>
                                <Divider style={{ backgroundColor: 'rgb(119, 136, 153, 0.3)', height: 2, width: '100%', margin: 'auto' }}/>
                            </React.Fragment>
                        )
                    }
                </List>
                </div>
        )
    }
}

export default withStyles(styles)(InstituteRightsStatus);

