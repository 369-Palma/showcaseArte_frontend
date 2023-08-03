import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { encryptTransform } from "redux-persist-transform-encrypt";

// import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducers";
import productsReducer from "../reducers/productsReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import queryReducer from "../reducers/queryReducer";
import idReducer from "../reducers/idReducer";
import authReducer from "../reducers/authReducer";
import newsReducer from "../reducers/newsReducer";

/* const favTransform = createTransform(
  (inboundState, key) => {
    if (key === "fav" && inboundState.length > 0) {
      // Trasforma lo stato per salvare solo gli id dei prodotti preferiti
      return inboundState.map((product) => product.id);
    }
    return inboundState;
  },
  (outboundState, key) => {
    if (key === "fav" && outboundState.length > 0) {
      // Recupera l'intero oggetto del prodotto in base all'id
      const allProducts = []; // Assicurati di avere la lista completa di tutti i prodotti
      return outboundState.map((productId) =>
        allProducts.find((product) => product.id === productId)
      );
    }
    return outboundState;
  },
  // Opzioni facoltative
  {
    whitelist: ["fav"], // Specifica quale reducer è interessato dalla trasformazione
  }
); */

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  products: productsReducer,
  fav: favouritesReducer,
  query: queryReducer,
  idProd: idReducer,
  news: newsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
    //favTransform,
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  applyMiddleware(thunk)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk,
    }),
});

export const persistor = persistStore(store);
