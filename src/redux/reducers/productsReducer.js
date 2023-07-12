import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING_OFF,
  GET_PRODUCTS_LOADING_ON,
} from "../actions";

const initialState = {
  products: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_PRODUCTS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCTS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
