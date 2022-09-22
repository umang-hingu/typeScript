import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState,Notification, UserData } from "../model/model";

const initialState: InitialState = {
  items: [],
  notification: null,
  registeredUserData: null,
  loginUserData: null,
}

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    showNotification(state, action:PayloadAction<Notification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    addItem(state, action) {
      state.items = action.payload.items;
    },
    addRegisterUserData(state, action:PayloadAction<UserData>) {
      state.registeredUserData = {
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
      };
    },
    addLoginUserData(state, action:PayloadAction<UserData>) {
      state.loginUserData = {
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
      };
    },
  },
});

export const homepageActions = homepageSlice.actions;
export default homepageSlice;
