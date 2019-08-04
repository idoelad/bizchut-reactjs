import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import MediaQuery from 'react-responsive'

const styles = {
    home: {

    },
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
        paddingBottom: 30,
        paddingTop: 30,
        paddingLeft: 10
    },
    mainDescriptionText: {
        color: '#FFFFFF',
    },
    buttons: {
        textAlign: 'center',
        paddingBottom: 40,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems:'center'
    },
    buttonComplaint: {
        backgroundColor: '#F1173A',
        color: '#FFFFFF',
        width: '90%',
        height: 50,
        fontSize: 16,
        boxShadow: 'none',
        //width:'400px',
    },
    buttonInstitute: {
        marginTop: 30,
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        border: '4px solid #FFFFFF',
        width: '90%',
        height: 50,
        fontSize: 16,
        boxShadow: 'none',
        //width:'400px',
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
        maxWidth: 275,
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

    isDrawerOpen() {
        return this.state.drawerIsOpen || window.innerWidth > 1400;
    }

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
            <div className={classes.home}>
                <div className={classes.topBar}>
                    {/*<MediaQuery maxWidth={778}>*/}
                        <IconButton className={classes.menuButton} aria-label="Menu" onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    {/*</MediaQuery>*/}
                    <div className={classes.topBarTitle}>
                        <Typography className={classes.topBarTitleText} variant="h2" gutterBottom>
                                מוסדות
                        </Typography>
                    </div>
                    <div className={classes.topBarDescription}>
                        <Typography className={classes.topBarDescriptionText} variant="h6" gutterBottom>
                            חווית או ראית אירוע של הפרת זכויות אדם במוסד, הוסטל או בית חולים פסיכיאטרי?
                            יש מה לעשות!
                        </Typography>
                    </div>
                </div>
                <div className={classes.main}>
                    <div className={classes.mainDescription}>
                        <Typography className={classes.mainDescriptionText} variant="h6" gutterBottom>
                            בחרו באחת מהאפשרויות הבאות ודווחו לארגון בזכות באופן דיסקרטי.
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                        <Fab variant="extended" aria-label="אני רוצה לדווח על אירוע ספציפי" className={classes.buttonComplaint} onClick={(e) => {this.props.goTo('complaint')}}>
                            אני רוצה לדווח על אירוע ספציפי
                        </Fab>
                        <Fab variant="extended" aria-label="אני רוצה למלא שאלון על תנאים במסגרת" className={classes.buttonInstitute} onClick={(e) => {this.props.goTo('report')}}>
                            אני רוצה למלא שאלון על תנאים במסגרת
                        </Fab>
                        <Fab variant="extended" aria-label="אני רוצה עזרה בלצאת לדיור בקהילה" className={classes.buttonInstitute} onClick={(e) => {this.props.goTo('community-house')}}>
                            אני רוצה עזרה בלצאת לדיור בקהילה
                        </Fab>
                    </div>
                </div>
                <div className={classes.footer}/>
                {/*<MediaQuery maxWidth={770}>*/}
                    <Drawer
                        variant="persistent"
                        classes={{paper: classes.drawerPaper}}
                        open={this.isDrawerOpen()}
                    >
                        {window.innerWidth <= 1400 ?
                            <div className={classes.drawerHeader}>
                                <IconButton className={classes.drawerHeaderIcon} onClick={this.handleDrawerClose}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            : ''}
                        <div>
                            <p className={classes.drawerItems} style={{fontWeight: 900, cursor: 'auto'}}>מוסדות</p>
                            <p className={classes.drawerItems} onClick={() => this.props.goTo('power-of-attorney')}>יפויי כח</p>
                            <p className={classes.drawerItems} onClick={() => this.redirectTo('https://www.bizchut.org.il/')}>לאתר עמותת בזכות</p>
                        </div>
                        <div>
                            <Divider className={classes.drawerDivider} variant="middle" light={true}/>
                            <div className={classes.drawerFooterText}>
                                בזכות, המרכז לזכויות אדם של<br/>
                                אנשים עם מוגבלויות<br/>
                                כנפי נשרים 3, ירושלים 9546406<br/>
                                טלפון: 02-6521308, פקס: 02-6221283
                            </div>
                        </div>
                    </Drawer>
                {/*</MediaQuery>*/}
            </div>
        );
    }
}


export default withStyles(styles)(Home);

