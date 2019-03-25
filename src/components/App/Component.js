import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Header, HeaderLeft } from '../Header';
import Typography from '@material-ui/core/Typography';
import List from '../List';
import Detail from '../Detail';
import Loading from '../Loading';

const Focus = ({ marvels, currentMarvel, isFetching, loadMarvel, resetMarvel }) => {
  if (isFetching) return <Loading />;
  if (currentMarvel)
    return (<Detail {...currentMarvel} resetMarvel={resetMarvel} />);
  return (<List marvels={marvels} loadMarvel={loadMarvel} />);
}

Focus.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  loadMarvel: PropTypes.func.isRequired,
  resetMarvel: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
}

const App = ({ marvels, currentMarvel, loadMarvel, resetMarvel, isFetching }) => (
  <Grid container direction="column">
    <Header>
    </Header>
    <Grid container justify="space-around">
      <Focus marvels={marvels} currentMarvel={currentMarvel} loadMarvel={loadMarvel} resetMarvel={resetMarvel} isFetching={isFetching} />
    </Grid>
  </Grid>
)

App.propTypes = {
  marvels: PropTypes.array.isRequired,
  currentMarvel: PropTypes.object,
  loadMarvel: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
}

export default App;
