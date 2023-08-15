import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  filteredUserList: [],
  chatList: [],
  filterChatList: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        userList: action.payload,
        filteredUserList: action.payload,
        chatList: action.payload, // Initialize filteredUserList with all data initially
      };
    },
    filterUserById: (state, action) => {
      const filtered = state.userList.filter(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        filteredUserList: filtered,
      };
    },
    setChatData: (state, action) => {
      console.log("state", state, "action", action);
      const chat = state.userList.filter((item) => item.id !== action.payload);
      return {
        ...state,
        chatList: chat,
      };
    },
    filterChatById: (state, action) => {
      const filteredChat = state.userList.filter(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        filterChatList: filteredChat,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, filterUserById, setChatData, filterChatById } =
  profileSlice.actions;

export default profileSlice.reducer;
