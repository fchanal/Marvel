import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { map } from 'ramda';
import Marvel from '../Marvel';

const List = ({ marvels, loadMarvel }) => (
    map(marvel => (
      <Grid item key={marvel.id}>
        <Marvel {...marvel} loadMarvel={loadMarvel} />
      </Grid>
    ), marvels)
)

List.propTypes = {
  marvels: PropTypes.array.isRequired,
  loadMarvel: PropTypes.func.isRequired,
}

export default List;
