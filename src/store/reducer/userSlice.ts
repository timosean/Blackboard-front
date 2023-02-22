import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/interfaces/user";

const initialState: User = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    logout: (state, action) => {
      state = {};
    },
  },
});

export const user = userSlice.name;
export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
