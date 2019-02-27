import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import App from './components/App/';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

const ROOT = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(ROOT, document.getElementById('root'));
