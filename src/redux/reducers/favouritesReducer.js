import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
