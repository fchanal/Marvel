import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header, HeaderLeft } from '../Header';
import Typography from '@material-ui/core/Typography';
import List from '../List';
import Detail from '../Detail';

const Focus = ({ characters, currentMarvelId, setCurrentMarvelId }) => (currentMarvelId === null) ?
<List characters={characters} setCurrentMarvelId={setCurrentMarvelId} /> :
<Detail characters={characters} currentMarvelId={currentMarvelId} setCurrentMarvelId={setCurrentMarvelId} />;

Focus.propTypes = {
  characters: PropTypes.array.isRequired,
  currentMarvelId: PropTypes.number,
  setCurrentMarvelId: PropTypes.func.isRequired,
}

const App = ({ characters, currentMarvelId, setCurrentMarvelId }) => (
  <Grid container direction="column">
    <Header>
      <HeaderLeft>
        <Typography variant="h4">MARVEL</Typography>
      </HeaderLeft>
    </Header>
    <Grid container justify="space-around">
      <Focus characters={characters} currentMarvelId={currentMarvelId} setCurrentMarvelId={setCurrentMarvelId} />
    </Grid>
  </Grid>
)

App.propTypes = {
  characters: PropTypes.array.isRequired,
  currentMarvelId: PropTypes.number,
  setCurrentMarvelId : PropTypes.func.isRequired,
}

export default App;
