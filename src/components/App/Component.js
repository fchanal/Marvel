import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header, HeaderLeft } from '../Header';
import Typography from '@material-ui/core/Typography';
import List from '../List';
import Detail from '../Detail';

const Focus = ({ marvels, currentMarvel, setCurrentMarvel }) => (currentMarvel) ?
<Detail currentMarvel={currentMarvel} setCurrentMarvel={setCurrentMarvel} /> :
<List marvels={marvels} setCurrentMarvel={setCurrentMarvel} />;

Focus.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  setCurrentMarvel: PropTypes.func.isRequired,
}

const App = ({ marvels, currentMarvel, setCurrentMarvel }) => (
  <Grid container direction="column">
    <Header>
      <HeaderLeft>
        <Typography variant="h4">MARVEL</Typography>
      </HeaderLeft>
    </Header>
    <Grid container justify="space-around">
      <Focus marvels={marvels} currentMarvel={currentMarvel} setCurrentMarvel={setCurrentMarvel} />
    </Grid>
  </Grid>
)

App.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  setCurrentMarvel : PropTypes.func.isRequired,
}

export default App;
