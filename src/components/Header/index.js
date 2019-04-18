import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ children }) => (
    <AppBar position="static">
      <Toolbar>
        { children }
      </Toolbar>
    </AppBar>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
