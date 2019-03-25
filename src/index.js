import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './ducks';
import reduxLogger from 'redux-logger';
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

const store = createStore(rootReducer, applyMiddleware(reduxLogger));

const ROOT = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(ROOT, document.getElementById('root'));
