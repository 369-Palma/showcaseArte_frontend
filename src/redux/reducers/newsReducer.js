import {
  GET_NEWS,
  UPDATE_SINGLE_NEWS,
  GET_NEWS_ERROR,
  GET_NEWS_LOADING_ON,
  GET_NEWS_LOADING_OFF,
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
    case UPDATE_SINGLE_NEWS:
      const updatedNews = action.payload;
      console.log("action UPDATE_SINGLE_NEWS:", action.payload);
      return {
        ...state,
        news: state.news.map((newsItem) =>
          newsItem.id === updatedNews.id ? updatedNews : newsItem
        ),
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_NEWS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };

    case GET_NEWS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
