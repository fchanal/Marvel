import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import { map } from 'ramda'

const styles = {
  button: {
    marginLeft: '10px',
  },
  title: {
    marginBottom: '10px',
    marginTop: '10px',
  }
};

const Detail = ({ name, id, description, comics, series, open, setOpen, classes }) => (
  <div>
    <Button className={classes.button} variant="outlined" size="small" color="primary" onClick={() => setOpen(true)}>Detail</Button>
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll='body'
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {description}
        </DialogContentText>
        <Typography variant="subtitle1" className={classes.title}>Comics</Typography>
        {map(({ name, resourceURI }) => (
          <div key={resourceURI}>{name}</div>
        ), comics.items)}
        <Typography variant="subtitle1" className={classes.title}>Series</Typography>
        {map(({ name, resourceURI }) => (
          <div key={resourceURI}>{name}</div>
        ), series.items)}
      </DialogContent>
      <DialogActions>
        <Button className={classes.button} variant="contained" size="small" color="primary" onClick={() => setOpen(false)}>Back</Button>
      </DialogActions>
    </Dialog>
  </div>
)

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.object.isRequired,
  series: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default withStyles(styles)(Detail);
