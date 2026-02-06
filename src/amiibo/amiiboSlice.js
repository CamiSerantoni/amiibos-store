import { createSlice } from "@reduxjs/toolkit";

export const amiiboSlice = createSlice({
  name: "amiibo",
  initialState: {
    page: 0,
    amiibos: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoadingAmiibos: (state /* action */) => {
      state.isLoading = true;
      state.error = null;
    },
    setAmiibos: (state, action) => {
      state.amiibos = action.payload.amiibos;
      state.isLoading = false;
      state.error = null;
    },
    setAmiiboError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoadingAmiibos, setAmiibos, setAmiiboError } =
  amiiboSlice.actions;
