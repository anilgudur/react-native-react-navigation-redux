import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { taskListReducer } from './taskListReducer';
// import { userReducer } from './userReducer';
// import { roomReducer }  from './roomReducer';
// import { timerReducer }  from './timerReducer';
// import { navigationReducer } from './navigationReducer';

export default combineReducers({
  i18n: i18nReducer,
  task: taskListReducer,
  // user: userReducer,
  // room: roomReducer,
  // navigation: navigationReducer,
  // timer: timerReducer,
});
