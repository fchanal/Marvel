import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header, HeaderLeft } from '../Header';
import Typography from '@material-ui/core/Typography';
import List from '../List';
import Detail from '../Detail';

const Focus = ({ marvels, currentMarvel, loadMarvel, resetMarvel }) => (currentMarvel) ?
<Detail currentMarvel={currentMarvel} resetMarvel={resetMarvel} /> :
<List marvels={marvels} loadMarvel={loadMarvel} />;

Focus.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  loadMarvel: PropTypes.func.isRequired,
  resetMarvel: PropTypes.func.isRequired,
}

const App = ({ marvels, currentMarvel, loadMarvel, resetMarvel }) => (
  <Grid container direction="column">
    <Header>
      <HeaderLeft>
        <Typography variant="h4">MARVEL</Typography>
      </HeaderLeft>
    </Header>
    <Grid container justify="space-around">
      <Focus marvels={marvels} currentMarvel={currentMarvel} loadMarvel={loadMarvel} resetMarvel={resetMarvel} />
    </Grid>
  </Grid>
)

App.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  loadMarvel : PropTypes.func.isRequired,
}

export default App;
