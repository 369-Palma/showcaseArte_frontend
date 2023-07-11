import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

// import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";
import productsReducer from "../reducers/productsReducer";
import favouritesReducer from "../reducers/favouritesReducer";

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
  user: userReducer,
  products: productsReducer,
  fav: favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
