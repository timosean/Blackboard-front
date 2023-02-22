import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userSlice";
import { sidebarReducer } from "./reducer/sidebarSlice";

const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer,
});

export const store = configureStore({
  reducer: { user: userReducer, sidebar: sidebarReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
