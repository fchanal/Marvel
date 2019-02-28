import { compose, lifecycle, withState } from 'recompose';
import Detail from './Component';
import { loadCharacters } from '../../utils/fetch'

const enhance = compose(
  withState('character', 'setCharacter', {}),
  lifecycle({
    componentDidMount() {
      loadCharacters(this.props.currentMarvelId)
        .then((character) => this.props.setCharacter(character[0]))
        .catch((error) => console.log(error.message))
    }
  })
)

export default enhance(Detail);
