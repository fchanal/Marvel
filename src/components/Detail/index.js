import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { map } from 'ramda'

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
  item: {
    marginLeft: '10px',
  },
  paragraph: {
    flexGrow: 1,
  },
  button: {
    marginRight: '30px',
    marginBottom: '15px',
    alignSelf: 'flex-end',
  },
  listName: {
    marginTop: '15px',
  }
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

const Detail = ({ currentMarvel: { name, description, series, comics, events }, resetMarvel, classes }) => (
  <Paper className={classes.paper}>
    <Grid container direction="column" className={classes.detail}>
      <Grid item>
        <Typography className={classes.description} variant="caption">{((description) ? description : name)}</Typography>
      </Grid>
      <Grid item className={classes.paragraph}>
        <div>
          <Paragraph list={series} listName={'Series'} classes={classes} />
          <Paragraph list={comics} listName={'Comics'} classes={classes} />
          <Paragraph list={events} listName={'Events'} classes={classes} />
        </div>
      </Grid>
      <Grid item className={classes.button}>
        <Button variant="contained" size="small" color="primary" onClick={resetMarvel}>Back</Button>
      </Grid>
    </Grid>
  </Paper>
)

Detail.propTypes = {
  currentMarvel: PropTypes.object,
  classes: PropTypes.object.isRequired,
  resetMarvel: PropTypes.func.isRequired,
}

export default withStyles(styles)(Detail);
