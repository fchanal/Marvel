import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    marginTop: '12px',
    height: '365px',
    transition: '0.4s',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  image: {
    width: '250px',
    height: '250px',
  },
  button: {
    marginLeft: '10px',
  },
};

const Character = ({ name, id, description, comics, series, thumbnail: { path, extension }, setCurrentMarvelId, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <img className={classes.image} src={`${path}.${extension}`} alt={name} />
      <hr />
      <Typography>{name}</Typography>
    </CardContent>
    <Button className={classes.button} variant="outlined" size="small" color="primary" onClick={() => setCurrentMarvelId(id)}>Detail</Button>
  </Card>
)

Character.propTypes = {
  setCurrentMarvelId: PropTypes.func.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.object.isRequired,
  series: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Character);
