import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    // This reducer used to toggle the menu
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    //This reducer is used to Close the Menu if it is open while moving to watch page
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
