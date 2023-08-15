import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../slices/profileSlice";
import sidebarReducer from "../slices/sidebarSlice";
import chatReducer from "../slices/chatStateSlice";
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    sidebar: sidebarReducer,
    chatState: chatReducer,
  },
});
