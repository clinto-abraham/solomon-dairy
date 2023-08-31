import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  anchorEl: undefined,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    navGateReducer: (state, action) => {
      state.open = action.payload;
    },
    anchorElReducer: (state, action) => {
      state.anchorEl = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { navGateReducer, anchorElReducer } = navSlice.actions;

export default navSlice.reducer;

// decrement: (state) => {
//   state.value -= 1;
// },
// incrementByAmount: (state, action) => {
//   state.value += action.payload;
// },
