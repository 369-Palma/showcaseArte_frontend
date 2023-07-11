import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SET_USERNAME = "SET_USERNAME";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_PRODUCTS_LOADING_ON = "GET_PRODUCTS_LOADING_ON";
export const GET_PRODUCTS_LOADING_OFF = "GET_PRODUCTS_LOADING_OFF";

export default axios.create({
  baseURL: `http://localhost:8086/api`,
});
export const addToCartAction = (productSelected) => ({
  type: ADD_TO_CART, // type è obbligatoria in ogni action
  payload: productSelected, // payload non è obbligatorio, ma a volte sicuramente necessario
});

export const addToCartActionWithThunk = (productSelected) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log("DENTRO ADD TO CART THUNK", getState());
    console.log(
      "CHECK",
      currentState.cart.content.findIndex(
        (product) => product.id === productSelected.id
      )
    );
    if (
      currentState.cart.content.findIndex(
        (product) => product.id === productSelected.id
      ) === -1
    ) {
      dispatch({
        type: ADD_TO_CART, // type è obbligatoria in ogni action
        payload: productSelected, // payload non è obbligatorio, ma a volte sicuramente necessario
      });
    }
  };
};

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});

export const addToFavAction = (productSelected) => ({
  type: ADD_TO_FAV, // type è obbligatoria in ogni action
  payload: productSelected, // payload non è obbligatorio, ma a volte sicuramente necessario
});

export const addToFavActionWithThunk = (productSelected) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log("DENTRO ADD TO FAV THUNK", getState());
    console.log(
      "CHECK",
      currentState.fav.content.findIndex(
        (product) => product.id === productSelected.id
      )
    );
    if (
      currentState.cart.content.findIndex(
        (product) => product.id === productSelected.id
      ) === -1
    ) {
      dispatch({
        type: ADD_TO_CART, // type è obbligatoria in ogni action
        payload: productSelected, // payload non è obbligatorio, ma a volte sicuramente necessario
      });
    }
  };
};

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAV,
  payload: i,
});

export const setUserNameAction = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const getProductsAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PRODUCTS_LOADING_ON,
      });

      let resp = await fetch("https://localhost:8086/api/products");
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
};
