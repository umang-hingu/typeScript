import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepage-slice";

const store = configureStore({
  reducer: homepageSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
