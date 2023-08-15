import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatState: false,
  open: true,
};

export const chatStateSlice = createSlice({
  name: "chatState",
  initialState,
  reducers: {
    setChatState: (state, action) => {
      return {
        ...state,
        chatState: action.payload,
      };
    },
    setOpenState: (state, action) => {
      return {
        ...state,
        open: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChatState, setOpenState } = chatStateSlice.actions;

export default chatStateSlice.reducer;
