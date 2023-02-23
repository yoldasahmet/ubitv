import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ShowService } from "../services/show/ShowService";

const reducers = {
  [ShowService.reducerPath]: ShowService.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

//const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([ShowService.middleware]),
});

//export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
