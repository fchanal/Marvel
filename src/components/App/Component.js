import React from 'react';
import Proptypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { map } from 'ramda';
import { Header, HeaderLeft } from '../Header';
import Character from '../Character'
import Typography from '@material-ui/core/Typography';

const App = ({ characters }) => (
  <Grid container direction="column">
    <Header>
      <HeaderLeft>
          <Typography variant="h4">MARVEL</Typography>
      </HeaderLeft>
    </Header>
    <Grid container justify="space-around">
      {map(character => (
        <Grid item key={character.id}>
          <Character {...character} />
        </Grid>
      ), characters)}
    </Grid>
  </Grid>
)

App.propTypes = {
  characters: Proptypes.array.isRequired,
}

export default App;
