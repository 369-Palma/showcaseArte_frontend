import {
  SET_ID,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING_ON,
  GET_PRODUCT_LOADING_OFF,
} from "../actions";

const initialState = {
  idProd: "",
  isLoading: false,
  hasError: false,
  errorMessage: "",
  prodObj: null, // Assicurati che il prodotto venga immagazzinato correttamente qui
};

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        idProd: action.payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        prodObj: action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_PRODUCT_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default idReducer;
