import { compose, lifecycle, withState, withHandlers } from 'recompose';
import App from './Component';
import { requestMarvels, requestMarvelId } from '../../utils';

const enhance = compose(
  withState('marvels', 'setMarvels', []),
  withState('currentMarvel', 'setCurrentMarvel'),
  withHandlers({
    loadMarvels: ({ setMarvels }) => () => requestMarvels().then(setMarvels),
    loadMarvel: ({ setCurrentMarvel }) => (id) => requestMarvelId(id).then(setCurrentMarvel),
    resetMarvel: ({ setCurrentMarvel }) => () => setCurrentMarvel(),
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadMarvels()
    }
  })
)

export default enhance(App);
