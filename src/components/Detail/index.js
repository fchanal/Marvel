import { compose, withState } from 'recompose';
import Detail from './Component';

const enhance = compose(
  withState('open', 'setOpen', false),
)

export default enhance(Detail);
