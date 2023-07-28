import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
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

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  products: productsReducer,
  fav: favouritesReducer,
  query: queryReducer,
  idProd: idReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  applyMiddleware(thunk)
);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
