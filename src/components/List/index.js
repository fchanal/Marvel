import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { map } from 'ramda';
import Character from '../Character';

const List = ({ characters, setCurrentMarvelId }) => (
    map(character => (
      <Grid item key={character.id}>
        <Character {...character} setCurrentMarvelId={setCurrentMarvelId} />
      </Grid>
    ), characters)
)

List.propTypes = {
  characters: PropTypes.array.isRequired,
  setCurrentMarvelId: PropTypes.func.isRequired,
}

export default List;
