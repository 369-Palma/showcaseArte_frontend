import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING_OFF,
  GET_PRODUCTS_LOADING_ON,
  UPDATE_SINGLE_PRODUCT,
  ADD_SINGLE_PRODUCT,
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

    case UPDATE_SINGLE_PRODUCT:
      const updatedProd = action.payload;
      console.log("action UPDATE_SINGLE_PRODUCT:", action.payload);
      return {
        ...state,
        products: state.products.map((prodItem) =>
          prodItem.id === updatedProd.id ? updatedProd : prodItem
        ),
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

    case ADD_SINGLE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

export default productsReducer;
