import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import favouriteReducer from "../reducers/favouriteReducer";
import fetchReducer from "../reducers/fetchReducer";
import stateReducers from "../reducers/stateReducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["state"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const totalReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: fetchReducer,
  state: stateReducers,
});

const persistedReducer = persistReducer(persistConfig, totalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
