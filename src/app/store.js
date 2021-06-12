import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import colorReducer from "../features/color/colorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
});
