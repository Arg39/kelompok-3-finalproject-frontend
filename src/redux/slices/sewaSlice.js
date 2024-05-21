import { createSlice } from "@reduxjs/toolkit";

export const sewaSlice = createSlice({
  name: "sewa",
  initialState: {
    nav: "all",
  },
  reducers: {
    all: (state) => {
      state.nav = "all";
    },
    villa: (state) => {
      state.nav = "villa";
    },
    hotel: (state) => {
      state.nav = "hotel";
    },
    apartemen: (state) => {
      state.nav = "apartemen";
    },
  },
});

export const { all, villa, hotel, apartemen } = sewaSlice.actions;

export default sewaSlice.reducer;
