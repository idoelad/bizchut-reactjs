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
        color: '#FFFFFF'
    },
};

const styles = {...formStyles, ...thisStyles};

class ReportSubjects extends Component {
    
   
    render() {
        console.log(this.props);
        const subject = 'categoryDetails';
        const { classes, handleClick, values, CategoriesDetailsByInstituteType } = this.props;
        let CategoriesDetails;
        switch (values.instituteType) {
            case "institute":
            CategoriesDetails = CategoriesDetailsByInstituteType.instituteCategoriesDetails;
            break;
            case "psychical_hospital":
            CategoriesDetails = CategoriesDetailsByInstituteType.psychiatricHospitalCategoriesDetails;
            break;
            case "hostel":
            CategoriesDetails = CategoriesDetailsByInstituteType.hostelCategoriesDetails;
            break;
        }
        
        return (
            <div>
                <List className={classes.root}>
                    {
                        CategoriesDetails.map((el) =>
                            <React.Fragment key={el.key} >
                                <ListItem className={classes.subjectItem} name="categoryDetails" 
                                    onClick= {() => {handleClick(subject, el); this.props.goToStep('InstituteRightsStatus') }}

                                    >
                                    <ListItemText
                                        primary={<Typography style={{ fontSize: 20, color: '#FFFFFF'}}>{el.CategoryName}</Typography>}
                                        secondary={
                                            <Typography style={{ fontSize: 14, color: '#FFFFFF' }}>
                                                מלא פרטים
                                                <ChevronLeftIcon style={{ fontSize: 17, marginBottom: -4, color: '#808080' }}/>
                                            </Typography>
                                        }
                                
                                    />
                                </ListItem>
                                <Divider style={{ backgroundColor: 'rgb(119, 136, 153, 0.3)', height: 2, width: '100%', margin: 'auto' }}/>
                            </React.Fragment>
                        )
                    }
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ReportSubjects);
