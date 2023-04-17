import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import postReducer from "./user/postSlice";
import darkModeReducer from "./DarkMode";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  darkMode: darkModeReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
