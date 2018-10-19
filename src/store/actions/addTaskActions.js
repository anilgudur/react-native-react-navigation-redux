import { get, has } from 'lodash';

//import { authUser, forgotPassword } from '../../api';
import { appConsts } from '../../constants';

//import OhLogoWhite from '../../../assets/images/OhLogoWhite/OhLogoWhite.png';

const {
  authFail,
  authStart,
  authSuccess,
  clearAuthErr,
  clearUser,
  setLoginData,
  clearLoginData,
  forgotPasswordStart,
  forgotPasswordFail,
  forgotPasswordSuccess,
  forgotPasswordResetData,
  authWithSAML,
  refreshToken,
} = appConsts;

export const taskListActions = {

  onAddPress(navigation, task) {
    // let todos = this.state.todos;
    // todos.push({task: task});
    // this.setState({
    //   todos: todos
    // });
    return (dispatch) => {
      store.dispatch({
        type: 'ADD_TODO',
        task: task
      });
      console.log('A task was added: ', task);
      navigation.goBack();
    };
  },

  onDone(todo) {
    return (dispatch) => {
      console.log("onDone pressed: ", todo);
      // let filteredTodos = this.state.todos.filter((fTodo) => {
      //   return fTodo !== todo; 
      // });
      // this.setState({ todos: filteredTodos });
      dispatch({
        type: 'DONE_TODO',
        todo: todo,
      });
    };
  },

  onToggle() {
    return (dispatch) => {
      store.dispatch({
        type: 'TOGGLE_STATE',
      });
    };
  },


};
