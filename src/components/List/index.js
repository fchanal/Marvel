import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { map } from 'ramda';
import Character from '../Character';

const List = ({ marvels, setCurrentMarvel }) => (
    map(marvel => (
      <Grid item key={marvel.id}>
        <Character {...marvel} setCurrentMarvel={setCurrentMarvel} />
      </Grid>
    ), marvels)
)

List.propTypes = {
  marvels: PropTypes.array.isRequired,
  setCurrentMarvel: PropTypes.func.isRequired,
}

export default List;
