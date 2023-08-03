//import axios from "axios";
/* import {
  setUsernameAction,
  setPasswordAction,
  setEmailAction,
  setMatchPasswordAction,
} from "./authActions"; */
import { useEffect, useRef, useState } from "react";

const registerUrl = `http://localhost:8086/api/auth/register`;

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const SET_USERNAME = "SET_USERNAME";
export const SET_VALID_USERNAME = "SET_VALID_USERNAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_VALID_EMAIL = "SET_VALID_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_VALID_PASSWORD = "SET_VALID_PASSWORD";
export const SET_MATCH_PWD = "SET_MATCH_PWS";
export const SET_VALID_MATCH = "SET_VALID_MATCH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_ERR_MSG = "SET_ERR_MSG";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_PRODUCTS_LOADING_ON = "GET_PRODUCTS_LOADING_ON";
export const GET_PRODUCTS_LOADING_OFF = "GET_PRODUCTS_LOADING_OFF";
export const SET_QUERY = "SET_QUERY";
export const SET_ID = "SET_ID";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const GET_PRODUCT_LOADING_ON = "GET_PRODUCT_LOADING_ON";
export const GET_PRODUCT_LOADING_OFF = "GET_PRODUCT_LOADING_OFF";
export const RESET_FAVOURITES = "RESET_FAVOURITES";

export const GET_NEWS = "GET_NEWS";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const GET_NEWS_ERROR = "GET_NEWS_ERROR";
export const GET_NEWS_LOADING_ON = "GET_NEWS_LOADING_ON";
export const GET_NEWS_LOADING_OFF = "GET_NEWS_LOADING_OFF";

export function scrollToTop() {
  window.scrollTo(0, 0);
}

//COSTANTI
//const urlBase = process.env.baseURL;
const baseline = "http://localhost:8086/api/products";
const baselineNews = "http://localhost:8086/api/news";

export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
export const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* export default axios.create({
  urlBase,
}); */

//AZIONI PER QUERY (collection)
export const setQueryAction = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

//AZIONE PER SALVARE L'ID
export const setIdAction = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};

//AZIONI PER L'AUTENTICAZIONE (REGISTRAZIONE E LOGIN)
/* USERNAME */
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setValidUsername = (isValid) => ({
  type: SET_VALID_USERNAME,
  payload: isValid,
});

/* EMAIL */
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setValidEmail = (isValid) => ({
  type: SET_VALID_EMAIL,
  payload: isValid,
});

/* PASSWORD */

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setValidPassword = (isValid) => ({
  type: SET_VALID_PASSWORD,
  payload: isValid,
});

/* MATCH PASSWORD */
export const setMatchPassword = (password) => ({
  type: SET_MATCH_PWD,
  payload: password,
});

export const logout = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("username", "password");

    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_ERROR", payload: error.message });
  }
};

export const logoutAction = () => ({
  type: LOGOUT,
});

// Azione per impostare il valore di success
export const setSuccessAction = (success) => ({
  type: SET_SUCCESS,
  payload: success,
});

// Azione per impostare il valore di errMsg
export const setErrMsgAction = (errMsg) => ({
  type: SET_ERR_MSG,
  payload: errMsg,
});

//AZIONI PER IL CARRELLO
export const addToCartAction = (productSelected) => ({
  type: ADD_TO_CART,
  payload: productSelected,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});

// AZIONI PER FAVORITI

export const addToFavAction = (productSelected) => ({
  type: ADD_TO_FAV,
  payload: productSelected,
});

export const removeFromFavAction = (index) => ({
  type: REMOVE_FROM_FAV,
  payload: index,
});

export const resetFavouritesAction = () => ({
  type: RESET_FAVOURITES,
});

// FETCH

//GET all products con fetch e url completo
export const getProductsAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PRODUCTS_LOADING_ON,
      });

      let resp = await fetch(baseline);
      if (resp.ok) {
        let fetchedProducts = await resp.json();
        console.log(fetchedProducts);
        dispatch({
          type: GET_PRODUCTS,
          payload: fetchedProducts,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: "Resp not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_PRODUCTS_LOADING_OFF,
      });
    }
  };
};

// GET all products url da file env
/* export const getProductsAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PRODUCTS_LOADING_ON,
      });

      let resp = await fetch(urlBase + "/products");
      if (resp.ok) {
        let fetchedProducts = await resp.json();

        dispatch({
          type: GET_PRODUCTS,
          payload: fetchedProducts,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: "Resp not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_PRODUCTS_LOADING_OFF,
      });
    }
  };
}; */

export const getByCollectionAction = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PRODUCTS_LOADING_ON,
      });

      let resp = await fetch(baseline + "/collection/" + query);
      if (resp.ok) {
        let fetchedProducts = await resp.json();
        console.log(fetchedProducts);
        dispatch({
          type: GET_PRODUCTS,
          payload: fetchedProducts,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: "Resp not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_PRODUCTS_LOADING_OFF,
      });
    }
  };
};

export const getByIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PRODUCT_LOADING_ON,
      });

      let resp = await fetch(baseline + "/id/" + id);
      if (resp.ok) {
        let fetchedProduct = await resp.json();
        console.log(fetchedProduct); // Controlla che il prodotto sia ricevuto correttamente
        dispatch({
          type: GET_PRODUCT,
          payload: fetchedProduct, // Assicurati che il payload sia l'oggetto del prodotto
        });
      } else {
        dispatch({
          type: GET_PRODUCT_ERROR,
          payload: "Resp not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCT_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_PRODUCT_LOADING_OFF,
      });
    }
  };
};

// * Fetch per news/ blog

export const getNewsAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_NEWS_LOADING_ON,
      });

      let resp = await fetch(baselineNews);
      if (resp.ok) {
        let fetchedNews = await resp.json();
        console.log(fetchedNews);
        dispatch({
          type: GET_NEWS,
          payload: fetchedNews,
        });
      } else {
        dispatch({
          type: GET_NEWS_ERROR,
          payload: "Resp not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_NEWS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_NEWS_LOADING_OFF,
      });
    }
  };
};

//fetch per registrazione
/* export const registerUser = () => async (dispatch, getState) => {
  const { auth } = getState();
  const { username, email, password, matchPwd } = auth;
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  if (!username || !email || !password || !matchPwd) {
    dispatch(setErrMsg("Please fill in all the required fields"));
    return;
  }

  try {
    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

   
    const data = await response.json();
    console.log(data);

    dispatch(setSuccess(true));
    dispatch(setUsername(""));
    dispatch(setPassword(""));
    dispatch(setEmail(""));
    dispatch(setMatchPassword(""));
  } catch (error) {
    if (error.response?.status === 409) {
      dispatch(setErrMsg("C'è stato un errore nel contattare il server"));
    } else if (error?.response) {
      dispatch(setErrMsg("Registrazione fallita!"));
    }
    errRef.current?.focus();
  }
}; */
