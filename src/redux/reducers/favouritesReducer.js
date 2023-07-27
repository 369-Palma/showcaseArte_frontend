import { ADD_TO_FAV, REMOVE_FROM_FAV, RESET_FAVOURITES } from "../actions";

const initialState = {
  content: [],
  favouritesIds: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      const productToAdd = action.payload;
      // Controlla se il prodotto con lo stesso ID è già presente nella lista dei preferiti
      const isProductInFavourites = state.content.some(
        (product) => product.id === productToAdd.id
      );

      // Se il prodotto non è presente nella lista, aggiungilo
      if (!isProductInFavourites) {
        return {
          ...state,
          content: [...state.content, productToAdd],
        };
      }

      // Se il prodotto è già presente, non fare nulla e ritorna lo stato corrente
      return state;
    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter(
          (product) => product.id !== action.payload
        ),
      };

    case RESET_FAVOURITES:
      return {
        ...state,
        content: [],
      };

    default:
      return state;
  }
};

export default favouritesReducer;
