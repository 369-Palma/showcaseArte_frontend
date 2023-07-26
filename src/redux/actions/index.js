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
export const SET_QUERY = "SET_QUERY";
export const SET_ID = "SET_ID";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const GET_PRODUCT_LOADING_ON = "GET_PRODUCT_LOADING_ON";
export const GET_PRODUCT_LOADING_OFF = "GET_PRODUCT_LOADING_OFF";

export function scrollToTop() {
  window.scrollTo(0, 0);
}

const urlBase = process.env.baseURL;
const baseline = "http://localhost:8086/api/products";
export default axios.create({
  urlBase,
});

export const setQueryAction = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const setIdAction = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};

export const addToCartAction = (productSelected) => ({
  type: ADD_TO_CART,
  payload: productSelected,
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
  type: ADD_TO_FAV,
  payload: productSelected,
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
        type: ADD_TO_CART,
        payload: productSelected,
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
