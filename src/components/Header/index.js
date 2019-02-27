import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(child => child.type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(child => child.type === HeaderRight);
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <div className="header-left">{headerLeft()}</div>
          </Grid>
          <Grid item>
            <div className="header-right">{headerRight()}</div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export const HeaderLeft = ({ children }) => <div>{children}</div>;

HeaderLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export const HeaderRight = ({ children }) => <div>{children}</div>;

HeaderRight.propTypes = {
  children: PropTypes.node.isRequired,
};
