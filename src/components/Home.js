import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";

const styles = {
    topBar: {
        backgroundColor: '#096EDB',
        borderRadius: '0 0 0 20%'
    },
    topBarTitle: {
        paddingTop: 15,
        paddingRight: 20
    },
    topBarTitleText: {
        color: '#FFFFFF',
        fontWeight: 600
    },
    topBarDescription: {
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 10
    },
    topBarDescriptionText: {
        color: '#FFFFFF',
    },
    main: {
        backgroundColor: '#184488',
    },
    mainTitle: {
        paddingTop: 30,
        paddingRight: 20,
        paddingBottom: 10
    },
    mainTitleText: {
        color: '#FFFFFF',
    },
    mainDescription: {
        paddingRight: 20,
        paddingBottom: 70,
        paddingLeft: 10
    },
    mainDescriptionText: {
        color: '#FFFFFF',
    },
    buttons: {
        textAlign: 'center',
        paddingBottom: 40
    },
    buttonComplaint: {
        backgroundColor: '#F1173A',
        color: '#FFFFFF',
        width: '80%',
        height: 50,
        fontSize: 18,
        boxShadow: 'none',
    },
    buttonInstitute: {
        marginTop: 30,
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        border: '4px solid #FFFFFF',
        width: '80%',
        height: 50,
        fontSize: 18,
        boxShadow: 'none',
    },
    menuButton: {
        position: 'fixed',
        top: 5,
        left: 5,
        color: "#103C6F"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    drawerHeaderIcon: {
        color: '#FFFFFF'
    },
    drawerPaper: {
        width: '80%',
        backgroundColor: '#293A50',
        color: '#FFFFFF',
        paddingRight: 25,
        fontSize: 24,
        fontFamily: 'Assistant'
    },
    drawerItems: {
        paddingBottom: 10,
        cursor: 'pointer'
    },
    drawerDivider: {
        backgroundColor: '#819DBD',
        height: 3,
        marginTop: 50
    },
    drawerFooterText: {
        fontSize: 16,
        marginTop: 20
    },
    footer: {
        height: '100%',
        backgroundColor: '#184488',
        borderRadius: '0 0 0 20%'
    }

};

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = { drawerIsOpen: false };

    handleDrawerOpen = () => {
        this.setState({ drawerIsOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpen: false });
    };

    redirectTo = (url) => {
        window.location.href = url;
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.topBar}>
                    <IconButton className={classes.menuButton} aria-label="Menu" onClick={this.handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.topBarTitle}>
                        <Typography className={classes.topBarTitleText} variant="h2" gutterBottom>
                                מוסדות
                        </Typography>
                    </div>
                    <div className={classes.topBarDescription}>
                        <Typography className={classes.topBarDescriptionText} variant="h6" gutterBottom>
                            חווית בעצמך או ראית אירוע שזכויות האדם נפגעות בו? ארגון בזכות פועל למען זכויות אנשים עם מוגבלות במסגרות אלו.
                        </Typography>
                    </div>
                </div>
                <div className={classes.main}>
                    <div className={classes.mainTitle}>
                        <Typography className={classes.mainTitleText} variant="h5" gutterBottom>
                            אז מה עכשיו?
                        </Typography>
                    </div>
                    <div className={classes.mainDescription}>
                        <Typography className={classes.mainDescriptionText} variant="h6" gutterBottom>
                            בחרו אחת מהאפשרויות ודווחו לנו על הפרות זכויות אדם של אנשים במוסדות בצורה דיסקרטית ובזמן אמת.
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                        <Fab variant="extended" aria-label="אני רוצה להגיש תלונה פרטנית" className={classes.buttonComplaint} onClick={(e) => {this.props.goTo('complaint')}}>
                            אני רוצה להגיש תלונה פרטנית
                        </Fab>
                        <Fab variant="extended" aria-label="אני רוצה לדווח על מוסד בעייתי" className={classes.buttonInstitute} onClick={console.log('')}>
                            אני רוצה לדווח על מוסד בעייתי
                        </Fab>
                    </div>
                </div>
                <div className={classes.footer}/>
                <Drawer
                    variant="persistent"
                    classes={{paper: classes.drawerPaper}}
                    open={this.state.drawerIsOpen}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton className={classes.drawerHeaderIcon} onClick={this.handleDrawerClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div>
                        <p className={classes.drawerItems} style={{fontWeight: 900, cursor: 'auto'}}>מוסדות</p>
                        <p className={classes.drawerItems} onClick={() => this.redirectTo('https://www.bizchut.org.il/')}>יציאה לדיור בקהילה</p>
                        <p className={classes.drawerItems} onClick={() => this.redirectTo('https://www.bizchut.org.il/')}>לאתר עמותת בזכות</p>
                        <p className={classes.drawerItems} onClick={() => this.redirectTo('https://www.bizchut.org.il/')}>יפויי כח</p>
                    </div>
                    <div>
                        <Divider className={classes.drawerDivider} variant="middle" light="true"/>
                        <div className={classes.drawerFooterText}>
                            בזכות, המרכז לזכויות אדם של<br/>
                            אנשים עם מוגבלויות<br/>
                            כנפי נשרים 3, ירושלים 9546406<br/>
                            טלפון: 02-6521308, פקס: 02-6221283
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}


export default withStyles(styles)(Home);

