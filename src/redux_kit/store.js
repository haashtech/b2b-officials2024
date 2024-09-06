import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux_kit/userSide/UserAuthSlice"

export const store = configureStore({
    reducer: {
      user: authReducer,
    },
    devTools: import.meta.env.MODE !== "production",
  });