import { compose, lifecycle, withState } from 'recompose';
import App from './Component';
import { characters } from '../../utils/fetch'

const enhance = compose(
  withState('characters', 'setCharacters', []),
  lifecycle({
    componentDidMount() {
      characters()
        .then(this.props.setCharacters)
        .catch((error) => console.log(error.message))
    }
  })
)

export default enhance(App);
