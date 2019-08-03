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
import ComplaintPersonalDetails from "../complaint/ComplaintPersonalDetails"

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
    nextText: "שמור והמשך"
  };

  step3 = {
    key: "InstituteRightsStatus",
    nextText: "שמור והמשך"
  };
  step4 = {
    key: "Details",
    nextText: "שמור ושלח דיווח"
  };
  step5 = {
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
      },
      questions: {}
    }
  };

  MosadCategoriesDetails = [
    {
      key: "physicalConditions",
      CategoryName: "תנאי מחייה",
      questionsAndAnswers: [
        {
          label: "כמה דיירים גרים בחדר?",
          options: ["1", "2", "3", "יותר"],
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
          type: "checkbox"
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
          type: "checkbox"
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
          label: "אם כן, מהי צורת הענישה המקובלת במוסד?",
          type: "input",
          answer: ""
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
          type: "text"
        }
      ]
    }
  ];
  HostelCategoriesDetails = [
    {
      key: "physicalConditions",
      CategoryName: "תנאי מחייה",
      questionsAndAnswers: [
        {
          label: "כמה דיירים גרים בחדר?",
          options: ["1", "2", "3", "יותר"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם האוכל שמוגש בהוסטל מבושל במקום?",
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
        },
        {
          label: "כמה דיירים חולקים טלויזיה?",
          options: ["1-2", "3-5", "6 ומעלה"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה דיירים חולקים מחשב?",
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
          label: "האם הדיירים חייבים לצאת לעבוד כתנאי למגורים בהוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם דיירים רשאים להישאר בהוסטל בשעות הבוקר (אם אין להם עבודה)?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם המעסיק של הדיירים שייך לאותו גוף שמפעיל את ההוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "עד כמה לדיירים יש השפעה על סדר היום והפעילות?",
          options: ["השפעה רבה", "השפעה בינונית", "השפעה נמוכה", "אין השפעה בכלל"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים יכולים להירשם לחוגים מחוץ להוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה פעמים בשבוע מתקיימת פעילות תרבות ופנאי בהוסטל",
          options: ["פעם אחת", "פעמיים", "שלוש פעמים", "יותר"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים יוצאים לבילוי מחוץ להוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "אם כן, לאיזה סוג של פעילות?",
          answer: "",
          type: "input"
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
          type: "checkbox"
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
          label: "מתי הולכים לישון בהוסטל?",
          options: ["8", "9", "10", "אין שעה קבועה"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש כיבוי אורות?",
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
          label: "האם המטבח בהוסטל פתוח עבור הדיירים כל הזמן?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם דיירים חשופים לדיווחים שנכתבים עליהם?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם הדיירים משתתפים בקביעת הפעילות וסדר היום?",
          options: ["כן", "לא"],
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
          label: "אם כן, מהי צורת הענישה המקובלת במוסד?",
          type: "input",
          answer: ""
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
      key: "Movement",
      CategoryName: "הגבלת תנועה",
      questionsAndAnswers: [
        {
          label: "האם ההוסטל נעול במהלך היום?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם דייר צריך לקבל אישור כדי לצאת מההוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם דיירים מקבלים אישור לצאת לחופשות בבית בקלות?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם משתמשים באמצעי הגבלה וכבילה (כסאות הגבלה, קשירה למיטה, נעילה בחדר)?",
          options: ["בכלל לא", "מעט", "הרבה"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "Misc",
      CategoryName: "שונות",
      questionsAndAnswers: [
        {
          label: "האם הדיירים או בני משפחתם נדרשים לתוספת תשלום להוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם לקיחת תרופות היא תנאי למגורים בהוסטל?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם לדעתך נותנים לדיירים תרופות שלא לצורך?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
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
          options: ["לא", "כן"],
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
          type: "text"
        }
      ]
    }
  ];
  PsycCategoriesDetails = [
    {
      key: "physicalConditions",
      CategoryName: "תנאי מחייה",
      questionsAndAnswers: [
        {
          label: "כמה דיירים גרים בחדר?",
          options: ["1", "2", "3", "יותר"],
          answer: "",
          type: "radio"
        },
        {
          label: "אילו פריטים קיימים במחלקה?",
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
          type: "checkbox"
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
      key: "PersonalBelongings",
      CategoryName: "חפצים אישיים",
      questionsAndAnswers: [
        {
          label: "האם לאנשים באשפוז יש בגדים אישיים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם מכריחים את האנשים באשפוז ללבוש לבוש של בית החולים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש ארון אישי לכל אחד?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש לאנשים באשפוז מוצרי היגיינה אישיים (כמו שמפו או מברשת שיניים)?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם יש לאנשים באשפוז מגבת אישית?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },

      ]
    },
    {
      key: "OccupationAndDailyRoutine",
      CategoryName: "טיפול וסדר יום",
      questionsAndAnswers: [
        {
          label: "כמה זמן אדם ממתין מרגע תחילת האשפוז ועד למפגש הראשון שלו עם פסיכיאטר מטפל?",
          options: ["עד יום", "בין יום 3 ימים", "בין 3 ימים ל-5 ימים", "יותר מ-5 ימים"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה פעמים בשבוע אדם נפגש עם פסיכולוג או פסיכיאטר?",
          options: ["1", "2", "3", "מעל 3"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם גורמי הטיפול משתפים את האדם המאושפז בתהליך קבלת ההחלטות על הטיפול התרופתי?",
          options: ["כן", "לא", "לא יודע"],
          answer: "",
          type: "radio"
        },
        {
          label: "מרגע הדיווח על מצוקה נפשית במהלך האשפוז, כמה זמן עובר עד שגורם טיפולי (פסיכולוג, עו\"ס או פסיכיאטר)נותן מענה למצוקה?",
          options: ["באופן מיידי", "במהלך היום", "בין יום ל-3 ימים", "מעל 3 ימים"],
          answer: "",
          type: "radio"
        },
        {
          label: "במהלך היום, האם יש תעסוקה ופנאי עבור האנשים המאושפזים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
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
      CategoryName: "קשר עם אנשים מהחוץ",
      questionsAndAnswers: [
        {
          label: "האם האנשים רשאים להשתמש בטלפון הנייד שבבעלותם?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם אפשר לקבל מבקרים בכל יום?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם בני משפחה יכולים להיכנס למחלקה או לחדר?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם בית החולים שיתף קרוב משפחה של האדם במצבו?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        }
      ]
    },
    {
      key: "Kfiya",
      CategoryName: "כפייה באשפוז",
      questionsAndAnswers: [
        {
          label: "האם אנשי הצוות מאיימים באישפוז כפוי על אנשים שנמצאים באשפוז בהסכמה?",
          options: ["כן", "לא", "לא יודע"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם אנשי הצוות משתפים אנשים שנמצאים באשפוז כפוי בזכות שלהם לערער?",
          options: ["כן", "לא", "לא יודע"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם אנשים שנמצאים באשפוז בכפייה, רשאים לקבל סיוע משפטי ולדבר עם עורך דין לפני יום הדיון?",
          options: ["כן", "לא", "לא יודע"],
          answer: "",
          type: "radio"
        },
      ]
    },
    {
      key: "Violence",
      CategoryName: "אירועי אלימות",
      questionsAndAnswers: [
        {
          label: "איך הייתם מגדירים את היחס של הצוות לאנשים המאושפזים?",
          options: ["מצוין", "טוב", "סביר", "לא טוב", "רע"],
          answer: "",
          type: "radio"
        },
        {
          label: "כמה אתם מרגישים בטוחים במחלקה?",
          options: ["מאוד בטוחים", "קצת בטוחים", "בכלל לא בטוחים"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם חוויתם אלימות מצד מטופל אחר?",
          options: ["אלימות מילולית", "השפלה", "אלימות פיזית"],
          answer: "",
          type: "checkbox"
        },
        {
          label: "האם חוויתם אלימות מצד איש צוות?",
          options: ["אלימות מילולית", "השפלה", "אלימות פיזית"],
          answer: "",
          type: "checkbox"
        },
        {
          label: "האם ראיתם אלימות של איש צוות כלפי מטופלים אחרים?",
          options: ["אלימות מילולית", "השפלה", "אלימות פיזית"],
          answer: "",
          type: "checkbox"
        },
        {
          label: "האם חוויתם או ראיתם קשירה של מטופלים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם חוויתם או ראיתם בידוד של מטופלים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם חוויתם או ראיתם קשירה כימית או זריקות שנועדו לניטרול מטופלים?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם התלוננת במחלקה?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "האם ציינו בפניכם שזכותכם להגיש תלונה למנהל בית החולים או למשרד הבריאות?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },
        {
          label: "במקרה והגשתם תלונה, האם הטיפול בה היה יעיל לדעתכם?",
          options: ["כן", "לא"],
          answer: "",
          type: "radio"
        },

      ]
    },
    {
      key: "GeneralNotes",
      CategoryName: "התרשמות כללית והערות",
      questionsAndAnswers: [
        {
          answer: "",
          type: "text"
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

  //from component "next step call"
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
    this.updateValues(path, value);
  };

  handleClick = (path, value) => {
    this.updateValues(path, value);
  };

  handleSelect = (path, value) => {
    console.log(path, value);
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
        let categoryDetails;
        switch (this.state.values.instituteType) {
          case 'מוסד':
            categoryDetails = this.MosadCategoriesDetails;
            break;
          case 'בית חולים פסיכיאטרי':
            categoryDetails = this.PsycCategoriesDetails;
            break;
          case 'הוסטל':
            categoryDetails = this.HostelCategoriesDetails;
            break;
          default:
            categoryDetails = this.MosadCategoriesDetails;
        }
        this.formPart = (
          <ReportSubjects
            CategoriesDetails={categoryDetails}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleSelect={this.handleSelect}
            values={values}
            goToStep={this.goNextStep}
          />
        );
        break;
      case "InstituteRightsStatus":
        this.nextStep = this.step2;
        this.formPart = (
          <InstituteRightsStatus
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleSelect={this.handleSelect}
            getValue={this.getValue}
            values={values}
            goToStep={this.prevStep}
          />
        );
        break;
    case "Details":
        this.nextStep = this.step5;
        this.formPart = (
            <ComplaintPersonalDetails
            nextStep={this.goNextStep}
            handleChange={this.handleChange}
            values={values}
        />
        );
        break;
      case "Finish":
        this.props.formSubmissionApi('report', this.state.values);
        this.props.goTo('thank-you');
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
