import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/auth/authSlice";
import wishlistReducer from "./user/wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
