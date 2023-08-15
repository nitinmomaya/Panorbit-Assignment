import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
  //   sidebar: "Profile",
  chatData: [],
  filteredChatData: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
        chatData: action.payload, // Initialize filteredData with all data initially
      };
    },
    filterUserById: (state, action) => {
      const filtered = state.data.filter((item) => item.id === action.payload);
      return {
        ...state,
        filteredData: filtered,
      };
    },
    setChatData: (state, action) => {
      console.log("state", state, "action", action);
      const chat = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        chatData: chat,
      };
    },
    filterChatById: (state, action) => {
      const filteredChat = state.data.filter(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        filteredChatData: filteredChat,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, filterUserById, setChatData, filterChatById } =
  profileSlice.actions;

export default profileSlice.reducer;
