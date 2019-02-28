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

//<Typography variant="subtitle1" className={classes.title}>Comics</Typography>
//{map(({ name, resourceURI }) => (
//<div key={resourceURI}>{name}</div>
//), comics.items)}
//<Typography variant="subtitle1" className={classes.title}>Series</Typography>
//{map(({ name, resourceURI }) => (
//<div key={resourceURI}>{name}</div>
//), series.items)}

const Detail = ({ setCurrentMarvelId, name, description, series, comics, classes }) => (
  <Paper>
    <Typography>{name}</Typography>
    <Typography>{description}</Typography>
    <Typography variant="subtitle1" className={classes.title}>Comics</Typography>
    <Button variant="contained" size="small" color="primary" onClick={() => setCurrentMarvelId(null)}>Back</Button>
  </Paper>
)

Detail.propTypes = {
  //name: PropTypes.string.isRequired,
  //description: PropTypes.string.isRequired,
  //comics: PropTypes.object.isRequired,
  //series: PropTypes.object.isRequired,
  //classes: PropTypes.object.isRequired,
  //setCurrentMarvelId: PropTypes.func.isRequired,
}

export default withStyles(styles)(Detail);
