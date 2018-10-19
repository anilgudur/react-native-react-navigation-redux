//import { createStore } from 'redux';

const defaultTodos = [
  {
    task: 'Initial todo in store',
    state: 'PENDING',
  }
];

const defaultStateModel = {
  checkedRoot: true,
  isTnCAccepted: true,
  todos: defaultTodos,
  allTodos: defaultTodos,
  filter: 'PENDING',
  extraData_todos: false,

  // user: false,
  // requesting: false,
  // authError: '',
  // forgotPasswordError: '',
  // forgotPasswordSuccess: false,
  // name: '',
  // password: '',
  // token: '',
  // forgotPassMessage: '',
  // email: '',
  // lastSignIn: '',
  // rememberMe: false,
};

export const taskListReducer = (state = defaultStateModel, action) => {
  switch(action.type) {

    case 'ADD_TODO':
      const allTodos = state.allTodos.concat([{
        task: action.task,
        state: 'PENDING',
      }]);
      return Object.assign({}, state, {
        allTodos: allTodos,
        todos: allTodos.filter((fTodo) => fTodo.state === state.filter),
      });

    case 'DONE_TODO':
      const doneTodo = Object.assign({}, action.todo, {
        state: 'DONE',
      });

      const updatedAllTodos = state.allTodos.map((todo) => {
        return todo === action.todo ? doneTodo : todo;
      });

      return Object.assign({}, state, {
        allTodos: updatedAllTodos,
        // todos: state.todos.filter((fTodo) => {
        //   return fTodo !== action.todo;
        // }),
        todos: updatedAllTodos.filter((fTodo) => fTodo.state === state.filter),
      });

    case 'TOGGLE_STATE':
      const filter = state.filter === 'PENDING' ? 'DONE' : 'PENDING';
      return Object.assign({}, state, {
        filter,
        todos: state.allTodos.filter((fTodo) => fTodo.state === filter),
      });

    default:
      return state;
  }
};