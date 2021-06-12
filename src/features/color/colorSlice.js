import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchColor } from "./colorAPI";

const initialState = {
  value: "red",
  status: "idle",
};

export const incrementAsync = createAsyncThunk("color/fetchColor", async (amount) => {
  const response = await fetchColor(amount);
  // The value we return becomes the `fulfilled` action payload
  return response;
});
// colorSlice adalah state
export const colorSlice = createSlice({
  name: "color",
  initialState,

  reducers: {
    changeToBlack: (state) => {
      state.value = "black";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const { changeToBlack } = colorSlice.actions;

export const selectColor = (state) => state.color.value;
export const selectStatus = (state) => state.color.status;

export default colorSlice.reducer;
