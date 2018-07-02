import { connect } from 'react-redux';
import Main from './Main';
import { getModuleState, setModuleState } from '../../redux/module2';

// tslint:disable-next-line:no-implicit-dependencies
import { getUserId } from 'loader';

const mapStateToProps = (state) => ({
  userId: getUserId(state),
  moduleState: getModuleState(state),
});

const mapDispatchToProps = {
  setModuleState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
