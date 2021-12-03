import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import env from "utils/env";
import authReducer from "./auth";

const reduxLogger = createLogger();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const middlewares = [];

if (!env.isProduction) {
  middlewares.push(reduxLogger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: !env.isProduction,
  middleware: middlewares,
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export { store, persistor };
