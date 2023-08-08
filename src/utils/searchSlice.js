import { createSlice } from "@reduxjs/toolkit";

//This Slice of the Store is used to search the content thats searched in the search
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
