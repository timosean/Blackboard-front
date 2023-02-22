import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const sidebar = sidebarSlice.name;
export const sidebarReducer = sidebarSlice.reducer;
export const { open, close } = sidebarSlice.actions;
