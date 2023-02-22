import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state, action) => {
      state = action.payload;
    },
    close: (state, action) => {
      state = action.payload;
    },
  },
});

export const sidebar = sidebarSlice.name;
export const sidebarReducer = sidebarSlice.reducer;
export const sidebarAction = sidebarSlice.actions;
