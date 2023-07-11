import { SET_USERNAME } from "../actions";

const initialState = {
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
