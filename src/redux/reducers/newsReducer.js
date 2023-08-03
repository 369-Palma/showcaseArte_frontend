import {
  GET_NEWS,
  UPDATE_NEWS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING_ON,
  GET_PRODUCTS_LOADING_OFF,
} from "../actions/index";

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case UPDATE_NEWS:
      return {
        ...state,
        news: action.payload,
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

export default newsReducer;
