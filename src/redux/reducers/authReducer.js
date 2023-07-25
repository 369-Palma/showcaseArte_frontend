import { LOGIN_SUCCESS, LOGOUT } from "../actions";

const initialState = {
  isLoggedIn: false,
  // Altre proprietà relative all'autenticazione, come i dati dell'utente, il token JWT, ecc.
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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
