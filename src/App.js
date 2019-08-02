import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Home from "./components/Home";
import Complaint from "./components/complaint/Complaint";
import CommunityHousing from "./components/community-housing/CommunityHousing";
import PowerOfAttorney from "./components/power-of-attorney/PowerOfAttorney";
import Report from "./components/report/Report";
import ThankYou from './components/thank-you/ThankYou';
import AppBar from '@material-ui/core/AppBar';
import MediaQuery from 'react-responsive'

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
  componentDidMount() {
    window.onpopstate = (event) => {
      this.goTo(event.state);
    };
  }

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

  formSubmissionApi = (type, data) => {
    let url;
    // if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    //     url = 'http://localhost:5001/bizchut/us-central1/formSubmittion'
    // } else {
        url = 'https://us-central1-bizchut.cloudfunctions.net/formSubmittion';
    // }
    return fetch(
        url,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({type: type, data: data})
        })
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  };

  renderPath() {
    const { path, props, children } = this.state;
    window.history.pushState(`${path}`, `${path.toUpperCase()}`, `/${path}`);

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
      case 'power-of-attorney':
        return (
            <PowerOfAttorney
                goTo={this.goTo}
                formSubmissionApi={this.formSubmissionApi}
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
          <MediaQuery minWidth={779}>
            <AppBar color={'primary'}>
              Boom
            </AppBar>
          </MediaQuery>
          <div className={classes.root}>
            {this.renderPath()}
          </div>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
