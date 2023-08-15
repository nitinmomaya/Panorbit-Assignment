import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatState: false,
  openState: false,
};

export const chatStateSlice = createSlice({
  name: "chatState",
  initialState,
  reducers: {
    setChatState: (state, action) => {
      console.log("action is", action);
      return {
        ...state,
        chatState: action.payload,
      };
    },
    setOpenState: (state, action) => {
      console.log("action is", action);
      return {
        ...state,
        openState: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChatState, setOpenState } = chatStateSlice.actions;

export default chatStateSlice.reducer;
