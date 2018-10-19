import { saveState } from '../utils/asyncStorageUtils';
import { appConsts } from '../constants';

export const asyncStorageMiddleware = store => next => action => {
  const returnValue = next(action);

  const {
    authWithSAML,
    authSuccess,
    clearUser,
    refreshToken
   } = appConsts;
  const actions = [  authWithSAML, authSuccess, clearUser, refreshToken ];

  if (actions.includes(action.type)) {
    saveState({ user: store.getState().user });
  }

  return returnValue;
};