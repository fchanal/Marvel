import { compose, lifecycle, withState } from 'recompose';
import App from './Component';
import { loadMarvels } from '../../utils'

const enhance = compose(
  withState('marvels', 'setMarvels', []),
  withState('currentMarvel', 'setCurrentMarvel', null),
  lifecycle({
    componentDidMount() {
      loadMarvels()
        .then(this.props.setMarvels)
        .catch((error) => console.log(error.message))
    }
  })
)

export default enhance(App);
