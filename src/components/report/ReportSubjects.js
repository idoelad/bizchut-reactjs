import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {formStyles} from "../../formStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";


const thisStyles = {
    subjectItem: {
        backgroundColor: '#0E4787',
        textAlign: 'right',
    },
    formItem: {
        backgroundColor: '#FFFFFF',
    },
};

const styles = {...formStyles, ...thisStyles};

class ReportSubjects extends Component {
    
   
    render() {
        const subject = 'categoryDetails';
        const { classes, handleClick } = this.props;
        
        return (
            <div>
                <List className={classes.root}>
                    {
                        this.props.CategoriesDetails.map((el) =>
                            <React.Fragment key={el.key} >
                            <div className={classes.formItem}>
                                <ListItem className={classes.subjectItem} name="categoryDetails" 
                                    onClick= {() => {handleClick(subject, el); this.props.goToStep() }}

                                    >
                                    <ListItemText
                                        primary={<Typography style={{ fontSize: 20, color: 'rgb(255, 255, 255, 0.8)'}}>{el.CategoryName}</Typography>}
                                        secondary={
                                            <Typography style={{ fontSize: 14, color: '#FFFFFF' }}>
                                                מלא פרטים
                                                <ChevronLeftIcon style={{ fontSize: 17, marginBottom: -4, color: '#FFFFFF' }}/>
                                            </Typography>
                                        }
                                
                                    />
                                </ListItem>
                                </div>
                                <Divider style={{ backgroundColor: 'rgb(255, 255, 255, 0.3)', height: 2, width: '90%', margin: 'auto' }}/>
                            </React.Fragment>
                        )
                    }
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ReportSubjects);
