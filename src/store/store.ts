import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiService } from "../services/apiService";

const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
  });
};