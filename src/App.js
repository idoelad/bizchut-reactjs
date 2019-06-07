import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Home from "./components/Home";
import Complaint from "./components/complaint/Complaint";
import CommunityHousing from "./components/community-housing/CommunityHousing";
import Report from "./components/report/Report";
import ThankYou from './components/thank-you/ThankYou';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Product Sans", serif',
  },
  palette: {
    primary: { main: '#257BDE' },
    secondary: { main: '#34C3DD' },
  }
});

const styles = {
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#0E4787',
  }
};

class App extends Component {

  state = {
    path: 'home',
    chidlren: null,
    props: null
  };

  goTo = (pathName, props, children = null) => {
    console.log('goto', pathName);
    this.setState({
      path: pathName,
      children,
      props
    })
  };

  renderPath() {
    const { path, props, children } = this.state;
    switch(path) {
      case 'home':
        return (
            <Home
                goTo={this.goTo}
            />
        );
      case 'complaint':
        return (
            <Complaint
                goTo={this.goTo}
            />
        );
      case 'report':
        return (
            <Report
                goTo={this.goTo}
            />
        );
      case 'community-house':
        return (
            <CommunityHousing
                goTo={this.goTo}
            />
        );
        case 'thank-you':
        return (
            <ThankYou children={children} {...props} goTo={this.goTo} />
        );
      default:
        return (
            <Home
                goTo={this.goTo}
            />
        );
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            {this.renderPath()}
          </div>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
