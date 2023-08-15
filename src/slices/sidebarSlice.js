import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: "Profile",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSideBar: (state, action) => {
      return {
        ...state,
        sidebar: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
