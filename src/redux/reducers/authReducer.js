import {
  SET_USERNAME,
  SET_VALID_USERNAME,
  SET_EMAIL,
  SET_VALID_EMAIL,
  SET_PASSWORD,
  SET_VALID_PASSWORD,
  SET_VALID_MATCH,
  SET_ERROR_MESSAGE,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_MATCH_PWD,
} from "../actions";

const initialState = {
  username: "",
  validUsername: false,
  email: "",
  validEmail: false,
  password: "",
  validPassword: false,
  matchPwd: "",
  validMatch: false,
  errMsg: "",
  success: false,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case SET_VALID_USERNAME:
      return {
        ...state,
        validUsername: action.payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_VALID_EMAIL:
      return {
        ...state,
        validEmail: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_VALID_PASSWORD:
      return {
        ...state,
        validPassword: action.payload,
      };

    case SET_MATCH_PWD:
      return {
        ...state,
        matchPwd: action.payload,
        validMatch: state.password === action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        // Altri dati dell'utente e proprietà di autenticazione da aggiornare
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        // Altri dati dell'utente e proprietà di autenticazione da aggiornare
      };

    default:
      return state;
  }
};

export default authReducer;