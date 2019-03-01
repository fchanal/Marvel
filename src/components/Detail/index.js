import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { map } from 'ramda'

const styles = {
  title: {
    marginBottom: '10px',
    marginTop: '10px',
  }
};

const Paragraph = ({ listName, list, classes }) => ((list) ? (
  <div>
    <Typography variant="subtitle1" className={classes.title}>{listName}</Typography>
    {map(({ name, resourceURI }) => (
      <div key={resourceURI}>{name}</div>
    ), list.items)}
  </div>
) : null);

Paragraph.propTypes = {
  listName: PropTypes.string.isRequired,
  list: PropTypes.object,
  classes: PropTypes.object.isRequired,
}

const Detail = ({ setCurrentMarvel, currentMarvel: { description, series, comics, events }, classes }) => (
  <Paper>
    <Typography>{description}</Typography>
    <Paragraph list={series} listName={'Series'} classes={classes} />
    <Paragraph list={comics} listName={'Comics'} classes={classes} />
    <Paragraph list={events} listName={'Events'} classes={classes} />
    <Button variant="contained" size="small" color="primary" onClick={() => setCurrentMarvel(null)}>Back</Button>
  </Paper>
)

Detail.propTypes = {
  currentMarvel: PropTypes.object,
  classes: PropTypes.object.isRequired,
  setCurrentMarvel: PropTypes.func.isRequired,
}

export default withStyles(styles)(Detail);
