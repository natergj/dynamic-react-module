import { connect } from 'react-redux';
import { setUserId, getUserId } from '../redux/user';
import MainLayout from './MainLayout';

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
  };
};

const mapDispatchToProps = {
  setUserId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);
