import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { map } from 'ramda';

const styles = {
  listName: {
    marginTop: '15px',
  },
  item: {
    marginLeft: '10px',
  },
};

const Paragraph = ({ listName, list, classes }) => ((list) ? (
  <div>
    <Typography className={classes.listName} variant="subtitle1">{((list.items.length) ? listName : '')}</Typography>
    {map(({ name, resourceURI }) => (
      <div className={classes.item} key={resourceURI}>{name}</div>
    ), list.items)}
  </div>
) : null);

Paragraph.propTypes = {
  listName: PropTypes.string.isRequired,
  list: PropTypes.object,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Paragraph);
