import { createSlice } from "@reduxjs/toolkit";

export const amiiboSlice = createSlice({
  name: "amiibo",
  initialState: {
    page: 0,
    amiibos: [],
  },
  reducers: {
    startLoadingAmiibos: (state /* action */) => {},
    setAmiibos: (state, action) => {
      state.amiibos = action.payload.amiibos;
    },
  },
});

export const { startLoadingAmiibos, setAmiibos } = amiiboSlice.actions;
