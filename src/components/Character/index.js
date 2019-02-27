import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Detail from '../Detail'

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
};

const Character = ({ name, id, description, comics, series, thumbnail: { path, extension }, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <img className={classes.image} src={`${path}.${extension}`} alt={name} />
      <hr />
      <Typography>{name}</Typography>
    </CardContent>
    <Detail name={name} id={id} description={description} comics={comics} series={series} />
  </Card>
)

Character.propTypes = {
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.object.isRequired,
  series: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Character);
