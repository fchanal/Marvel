import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Content from './Component';
import { requestMarvels, requestMarvelId } from '../../request';
import { loadedMarvels, loadedMarvel, reset, fetchMarvel } from '../../ducks';

const mapStateToProps = (state) => ({
  marvels: state.marvels,
  currentMarvel: state.currentMarvel,
  isFetching: state.isFetching,
  loadingDetail: state.loadingDetail,
});

const mapDispatchToProps = (dispatch) => ({
  loadMarvels: () => {
    requestMarvels().then((marvels) => dispatch(loadedMarvels(marvels)));
    dispatch(fetchMarvel()); // set isFetching at true 
  },
  loadMarvel: (id) => {
    requestMarvelId(id).then((marvel) => dispatch(loadedMarvel(marvel)));
    dispatch(fetchMarvel());
  },
  resetMarvel: () => dispatch(reset()),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadMarvels();
    }
  })
);

export default enhance(Content);
