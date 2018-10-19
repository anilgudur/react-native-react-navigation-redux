import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTaskActions } from '../../store/actions/addTaskActions';
import TaskListScreen from '../../components/Task/TaskListScreen';

export default connect(
  store => ({ ...store.task }),
  dispatch => (bindActionCreators({ ...addTaskActions }, dispatch))
)(TaskListScreen);