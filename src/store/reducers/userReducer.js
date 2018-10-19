import { appConsts } from '../../constants';

const {
  authFail,
  authStart,
  authSuccess,
  clearAuthErr,
  clearUser,
  setLoginData,
  clearLoginData,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFail,
  forgotPasswordResetData,
  authWithSAML,
  refreshToken,
} = appConsts;
const model = {
  user: false,
  requesting: false,
  authError: '',
  forgotPasswordError: '',
  forgotPasswordSuccess: false,
  name: '',
  password: '',
  token: '',
  forgotPassMessage: '',
  email: '',
  lastSignIn: '',
  rememberMe: false,
};

export const userReducer = (state = model, action) => {
  switch (action.type) {
    case authStart:
      return { ...state, requesting: true };
    case authSuccess: {
      const { data, token, brandConfig } = action.payload;
      return {
        ...state,
        requesting: false,
        authError: '',
        user: true,
        name: data.firstName,
        //password: '',
        token,
        brandConfig,
        lastSignIn: Date.now(),
      };
    }
    case authFail: {
      const { message } = action.payload;
      return { ...state, requesting: false, authError: message, user: false, token: '' };
    }
    case authWithSAML: {
      const { data, token, brandConfig } = action.payload;
      return {
        ...state,
        requesting: false,
        authError: '',
        user: true,
        name: data.firstName,
        password: '',
        token,
        brandConfig,
      };
    }
    case clearAuthErr:
      return { ...state,  authError: '' };
    case clearUser:
      return {
        ...state,
        user: false,
        requesting: false,
        authError: '',
        name: '',
        email: '',
        token: '',
        forgotPasswordSuccess: false,
        forgotPasswordError: '',
        forgotPassMessage: '',
        lastSignIn: '',
        rememberMe: false,
        password: '',
      };
    case setLoginData: {
      const data = action.payload;
      return { ...state, ...data };
    }
    case clearLoginData:
      return { ...state, email: '', password: '' };
    case forgotPasswordStart:
      return { ...state, requesting: true };
    case forgotPasswordSuccess:
      return { ...state, requesting: false, forgotPasswordSuccess: true, forgotPassMessage: action.payload.text, };
    case forgotPasswordFail: {
      const { message } = action.payload;
      return { ...state, requesting: false, forgotPasswordError: message, forgotPasswordSuccess: false };
    }
    case forgotPasswordResetData:
      return { ...state, requesting: false, forgotPasswordError: '', forgotPasswordSuccess: false, forgotPassMessage: '' };
    case refreshToken:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

