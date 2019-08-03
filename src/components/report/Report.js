import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Institute from "../shared/Institute";
import ReportSubjects from "./ReportSubjects";
import InstituteRightsStatus from "./institute-types/institute/InstituteRightsStatus";

const styles = {
  complaintAppBar: {
    backgroundColor: "#0E4787",
    boxShadow: "none"
  },
  complaintToolbar: {
    height: 50,
    color: "#FFFFFF",
    paddingRight: 0
  },
  lowerToolbar: {
    height: 10
  },
  toolbarDivider: {
    backgroundColor: "#819DBD",
    height: 3
  },
  footerBar: {
    height: 100,
    backgroundColor: "#0E4787",
    textAlign: "center"
  },
  footerButton: {
    backgroundColor: "#F1173A",
    color: "#FFFFFF",
    marginTop: 25,
    width: "80%",
    fontSize: 16,
    boxShadow: "none"
  }
};

class Report extends Component {
  step1 = {
    key: "institute",
    nextText: "המשך לשאלון"
  };
  step2 = {
    key: "reportSubjects",
    nextText: "שמור ושלח דיווח"
  };

  step3 = {
    key: "InstituteRightsStatus",
    nextText: "שמור"
  };
  step4 = {
    key: "Finish",
    nextText: "סגור"
  };

  state = {
    step: this.step1,
    values: {
      instituteType: null,
      instituteName: "",
      instituteAddress: "",

      categoryDetails: {
        key: "",
        CategoryName: "",
        questionsAndAnswers: [
          {
            label: "",
            options: [""],
            type: ""
          }
        ]
      }
    }
  };

  CategoriesDetails = [
    {
      key: "physicalConditions",
      CategoryName: "תנאים פיזיים בכל ביתן/אגף",
      questionsAndAnswers: [
        {
          label: "כמה דיירים חיים בחדר?",
          options: [1, 2, 3, "יותר"],
          answer: "",
          type: "radio"
        },
        {
          label: "אילו פריטים קיימים באגף?",
          options: [
            "ספרים",
            "מחשב",
            "טלוויזיה",
            "משחקים",
            "חומרי יצירה",
            "ספות ישיבה",
            "נגן מוזיקה"
          ],
          answer: "",
          type: "Checkbox"
        },
        {
          label: "האם יש באגף מטבח שמאפשר הכנת אוכל במקום?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים יכולים להיכנס לחדר שלהם בכל שעות היום?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הריהוט שלם ותקין?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה דיירים חולקים מקלחת ושירותים?",
          options: ["1-2", "3-5", "6 ומעלה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "OccupationAndDailyRoutine",
      CategoryName: "תעסוקה וסדר יום",
      questionsAndAnswers: [
        {
          label: "האם הדיירים יוצאים לתעסוקה מחוץ למוסד?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים מקבלים תשלום על עבודתם?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה פעמים בשבוע מתקיימת פעילות תרבות ופנאי באגף",
          options: ["פעם אחת", "פעמיים", "שלוש פעמים", "יותר"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים יוצאים לבילוי מחוץ למוסד?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "אם כן, לאיזה סוג של פעילות?",
          options: ["חוגים", "נופש", "אחר"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "CommunicationWithFamily",
      CategoryName: "קשר עם המשפחה",
      questionsAndAnswers: [
        {
          label: "האם אפשר לבקר את הדיירים בכל זמן?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם בני משפחה יכולים להיכנס לחדר?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "באיזו תדירות הדיירים יוצאים הביתה?",
          options: ["כל שבוע", "פעם בשבועיים", "פעם בחודש", "אחר"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "CommunityRelations",
      CategoryName: "קשר עם הקהילה",
      questionsAndAnswers: [
        {
          label: "האם הדיירים משתמשים בשירותים הקהילתיים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "אם כן, באילו שירותים?",
          options: ['מתנ"ס', "קופת חולים", "מכולת", "אחר"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם לדיירים יש קשר עם התושבים בקהילה?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "SleepingHoures",
      CategoryName: "שעות שינה",
      questionsAndAnswers: [
        {
          label: "מתי הולכים לישון במוסד?",
          options: ["8", "9", "10", "אין שעה קבועה"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש כיבוי אורות במוסד?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם מחייבים את הדיירים לנוח אחר הצהריים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "Independence",
      CategoryName: "עצמאות",
      questionsAndAnswers: [
        {
          label: "האם הדיירים רשאים לקבל אוכל גם בין ארוחות?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label:
            "האם הדיירים יכולים להיכנס למטבח ולקחת אוכל בכוחות עצמם כשהם רעבים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label:
            "האם קונים בגדים חדשים לכל דייר על פי טעמו או שקונים במרוכז לכל הדיירים?",
          options: ["במרוכז", "לכל אחד בנפרד"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "Crew",
      CategoryName: "התנהלות הצוות",
      questionsAndAnswers: [
        {
          label: "מה היחס של הצוות לדיירים?",
          options: ["מצוין", "טוב", "סביר", "לא טוב", "רע"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם אנשי הצוות משתמשים באלימות מילולית?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם קיימת אלימות פיזית במוסד?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם אנשי הצוות מענישים דיירים?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        },
        {
          label: "אם כן, מהי צורת הענישה המקובלת במוסד??",
          type: "input"
        },
        {
          label: "האם הדיירים זוכים ליחס נעים ולהקשבה?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "PersonalBelongings",
      CategoryName: "חפצים אישיים",
      questionsAndAnswers: [
        {
          label: "האם לדיירים יש בגדים אישיים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם לדיירים יש ארון אישי לשים בו חפצים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label:
            "האם לדיירים יש מוצרי הגיינה אישיים (כמו שמפו או מברשת שיניים)?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם לדיירים יש מגבת אישית?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "MovementRestrictions",
      CategoryName: "הגבלת תנועה",
      questionsAndAnswers: [
        {
          label: "האם יש במוסד דלתות ללא ידיות?",
          options: ["כלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הביתן או האגף נעולים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם חדרי השינה נעולים במשך היום?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label:
            "האם משתמשים באמצעי הגבלה וכבילה (כסאות הגבלה, קשירה למיטה, נעילה בחדר)?",
          options: ["כלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "Inspection",
      CategoryName: "פיקוח",
      questionsAndAnswers: [
        {
          label: "האם כבר הגשת בעבר תלונות על המוסד?",
          options: ["לא", "כן"],
          answer: "",
          type: "radio"
        },
        {
          label: "אם כן,תוך כמה זמן התלונות או הבקשות מטופלות?",
          options: ["יום", "כמה ימים", "שבוע", "מספר שבועות", "לא מטופלות"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש לך קשר ישיר עם הגורם המפקח על המוסד?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הוא זמין בעת הצורך?",
          options: ["כלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "GeneralNotes",
      CategoryName: "התרשמות כללית והערות",
      questionsAndAnswers: [
        {
          answer: "",
          type: "input"
        }
      ]
    }
  ];

  goToStep = step => {
    this.setState({
      step: step
    });
    window.scrollTo(0, 0);
  };

  goNextStep = () => {
    const { step } = this.state;

    switch (step.key) {
      case "institute":
        this.setState({
          step: this.step2
        });
        break;
      case "reportSubjects":
        this.setState({
          step: this.step3
        });
        break;
      case "InstituteRightsStatus":
        this.setState({
          step: this.step2
        });
        break;

      default:
        break;
    }
  };

  prevStep = () => {
    const { step } = this.state;

    switch (step.key) {
      case "reportSubjects":
        this.setState({
          step: this.step1
        });
        break;
      case "InstituteRightsStatus":
        this.setState({
          step: this.step2
        });
        break;
      case "institute":
        this.props.goTo("home");
        break;

      default:
        break;
    }
  };

  updateValues = (path, newValue) => {
    let { values } = this.state;
    Report.updateObject(values, path, newValue);
    this.setState({
      values: values
    });
  };

  static updateObject(object, path, newValue) {
    let stack = path.split(".");
    let cur;
    while (stack.length > 1) {
      cur = stack.shift();
      if (!object[cur]) {
        object[cur] = {};
      }
      object = object[cur];
    }
    object[stack.shift()] = newValue;
  }

  getValue = path => {
    let { values } = this.state;
    return Report.getObjectValue(values, path);
  };

  static getObjectValue(object, path) {
    let stack = path.split(".");
    let cur;
    while (stack.length > 0) {
      cur = stack.shift();
      if (typeof object[cur] === "undefined") {
        return null;
      }
      object = object[cur];
    }
    return object;
  }

  handleChange = path => e => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(path, value);
    this.updateValues(path, value);
  };
  handleClick = (path, value) => {
    console.log(value);
    this.updateValues(path, value);
  };

  renderStep() {
    const { step } = this.state;
    let values = this.state.values;
    this.nextText = step.nextText;
    switch (step.key) {
      case "institute":
        this.nextStep = this.step2;
        this.formPart = (
          <Institute handleChange={this.handleChange} values={values} />
        );
        break;
      case "reportSubjects":
        this.nextStep = this.step4;
        this.formPart = (
          <ReportSubjects
            CategoriesDetails={this.CategoriesDetails}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            values={values}
            goToStep={this.goNextStep}
          />
        );
        break;
      case "InstituteRightsStatus":
        this.nextStep = this.step2; //TODO
        this.formPart = (
          <InstituteRightsStatus
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            values={values}
            goToStep={this.prevStep}
          />
        );
        break;
      case "Finish":
        //todo: validation?!
        this.props.goTo("thank-you");
        break;
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;
    this.renderStep();
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.complaintAppBar}>
          <Toolbar className={classes.complaintToolbar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.prevStep}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              תנאים במסגרת
            </Typography>
          </Toolbar>
          <div className={classes.lowerToolbar}>
            <Divider
              className={classes.toolbarDivider}
              variant="middle"
              light="true"
            />
          </div>
        </AppBar>
        {this.formPart}
        <div className={classes.footerBar}>
          <Fab
            variant="extended"
            className={classes.footerButton}
            onClick={e => {
              this.goToStep(this.nextStep);
            }}
          >
            {this.nextText}
          </Fab>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Report);
