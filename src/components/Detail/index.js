import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paragraph from './Paragraph';

const styles = {
  paper: {
    marginTop: '30px',
    marginLeft: '30px',
    marginRight: '30px',
    minHeight: '500px',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  detail: {
    marginTop: '15px',
    marginLeft: '15px',
    marginRight: '15px',
    minHeight: '500px',
    width: '450px',
  },
  description: {
    marginBottom: '20px',
  },
  paragraph: {
    flexGrow: 1,
  },
  button: {
    marginRight: '30px',
    marginBottom: '15px',
    alignSelf: 'flex-end',
  },
};

const Detail = ({ name, description, series, comics, events, resetMarvel, classes }) => (
  <Paper className={classes.paper}>
    <Grid container direction="column" className={classes.detail}>
      <Grid item>
        <Typography className={classes.description} variant="caption">{description || name}</Typography>
      </Grid>
      <Grid item className={classes.paragraph}>
        <div>
          <Paragraph list={series} listName={'Series'} />
          <Paragraph list={comics} listName={'Comics'} />
          <Paragraph list={events} listName={'Events'} />
        </div>
      </Grid>
      <Grid item className={classes.button}>
        <Button variant="contained" size="small" color="primary" onClick={resetMarvel}>Back</Button>
      </Grid>
    </Grid>
  </Paper>
)

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  series: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  resetMarvel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Detail);
