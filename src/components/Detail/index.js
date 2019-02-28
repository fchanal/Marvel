import { compose, lifecycle } from 'recompose';
import Detail from './Component';
import { find, propEq } from 'ramda'

const enhance = compose(
  lifecycle({
    componentDidMount() {
      const { currentMarvelId, characters } = this.props;
      const { name, description, series, comics } = find(propEq('id', currentMarvelId))(characters);
      this.setState({
        name: name,
        description: description,
        series: series,
        comics: comics,
      })
    }
  })
)

export default enhance(Detail);
