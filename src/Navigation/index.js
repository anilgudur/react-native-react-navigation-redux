import { StackNavigator, SwitchNavigator } from 'react-navigation';

// import LoginScreen from '../containers/LoginScreen';
// import StartSessionScreen from '../containers/StartSessionScreen';
// import AuthWithSAML from '../containers/AuthWithSAML';
// import LobbyScreen from '../containers/LobbyScreen';
// import ForgotPassword from '../containers/ForgotPassword';
// import ChooseLoginScreen from '../containers/ChooseLoginContainer';

// import TaskList from '../Task/TaskList';
// import AddTaskContainer from '../Task/AddTaskContainer';
import TaskListContainer from '../containers/Task/TaskListContainer';
import AddTaskContainer from '../containers/Task/AddTaskContainer';

export const RtcNavigation = {
  // chooseScreen: {
  //   id: 'ChooseLoginScreen',
  //   component: ChooseLoginScreen,
  //   options: {
  //     header: null,
  //     gesturesEnabled: false,
  //   },
  // },
  // login: {
  //   id: 'Login',
  //   component: LoginScreen,
  //   options: {
  //     header: null,
  //     gesturesEnabled: false,
  //   },
  // },
  // startSession: {
  //   id: 'StartSessionScreen',
  //   component: StartSessionScreen,
  //   options: {
  //     header: null,
  //     gesturesEnabled: false,
  //   },
  // },
  // lobbyScreen: {
  //   id: 'LobbyScreen',
  //   component: LobbyScreen,
  //   options: {
  //     header: null,
  //     gesturesEnabled: false,
  //   },
  // },
  // authScreen: {
  //   id: 'AuthScreen',
  //   component: AuthWithSAML,
  //   options: {
  //     headerTitle: 'Authentication with SAML',
  //     gesturesEnabled: false,
  //   },
  // },
  // forgotPassword: {
  //   id: 'ForgotPassword',
  //   component: ForgotPassword,
  //   options: {
  //     headerTitle: 'Forgot Password',
  //   }
  // },

  taskListScreen: {
    id: 'TaskListContainer',
    component: TaskListContainer,
    options: {
      header: null,
      gesturesEnabled: false,
    },
  },
  addTaskScreen: {
    id: 'AddTaskContainer',
    component: AddTaskContainer,
    options: {
      header: null,
      gesturesEnabled: false,
    },
  },
};

export const AuthStack = StackNavigator({
  AddTaskScreenRoute: {
    screen: RtcNavigation.addTaskScreen.component,
    navigationOptions: RtcNavigation.addTaskScreen.options,
  },
  // Login: {
  //   screen: RtcNavigation.login.component,
  //   navigationOptions: RtcNavigation.login.options,
  // },
  // AuthScreen: {
  //   screen: RtcNavigation.authScreen.component,
  //   navigationOptions: RtcNavigation.authScreen.options,
  // },
  // ForgotPassword: {
  //   screen: RtcNavigation.forgotPassword.component,
  //   navigationOptions: RtcNavigation.forgotPassword.options,
  // }
},
{
  initialRouteName: 'AddTaskScreenRoute',
  headerMode: 'screen'
});

export const AppStack = StackNavigator({
  // StartSessionScreen: {
  //   screen: RtcNavigation.startSession.component,
  //   navigationOptions: RtcNavigation.startSession.options,
  // },
  TaskListScreenRoute: {
    screen: RtcNavigation.taskListScreen.component,
    navigationOptions: RtcNavigation.taskListScreen.options,
  },
  AddTaskScreenRoute: {
    screen: RtcNavigation.addTaskScreen.component,
    navigationOptions: RtcNavigation.addTaskScreen.options,
  },
},
{
  initialRouteName: 'TaskListScreenRoute',
  headerMode: 'screen'
});

export const createRootNavigator = (isSignedIn = false) => {
  return SwitchNavigator({
    signed_in: AppStack,
    signed_out: AuthStack,
  },
  {
    initialRouteName: isSignedIn ? 'signed_in' : 'signed_out',
  });
};

// export const RootStack = StackNavigator(
//   {
//     Login: {
//       screen: RtcNavigation.login.component,
//       navigationOptions: RtcNavigation.login.options,
//     },
//     StartSessionScreen: {
//       screen: RtcNavigation.startSession.component,
//       navigationOptions: RtcNavigation.startSession.options,
//     },
//     LobbyScreen: {
//       screen: RtcNavigation.lobbyScreen.component,
//       navigationOptions: RtcNavigation.lobbyScreen.options,
//     },
//     WebScreen: {
//       screen: RtcNavigation.webScreen.component,
//       navigationOptions: RtcNavigation.webScreen.options,
//     },
//   },
//   {
//     initialRouteName: 'Login',
//     headerMode: 'screen'
//   }
// );