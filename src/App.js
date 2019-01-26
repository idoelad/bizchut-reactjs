import React, { Component } from 'react';
import './App.css';
// import 'typeface-roboto';
import Complaint from "./components/Complaint";
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Product Sans", serif',
  },
  palette: {
    primary: { main: '#257BDE' },
    secondary: { main: '#34C3DD' },
  },
});

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#0E4787'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Complaint/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
