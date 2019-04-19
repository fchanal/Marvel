import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';
import Content from '../Content';

const styles = {
  title: {
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    letterSpacing: '-3px',
    transform: 'scaleY(1.3)',
    width: '100%',
  },
};

const App = ({ classes }) => (
  <React.Fragment>
    <Header>
      <Typography variant="h4" className={classes.title}>MARVEL</Typography>
    </Header>
    <Content />
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
