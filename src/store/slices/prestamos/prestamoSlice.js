import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prestamos: [],
  prestamoSelected: null,
  dataLoaded: false,
};

export const prestamoSlice = createSlice({
  name: "prestamo",
  initialState,
  reducers: {
    addPrestamo: (state, { payload }) => {
      state.prestamos.push(payload);
    },
    loadPrestamos: (state, { payload }) => {
      state.prestamos = payload;
      state.dataLoaded = true;
    },
    setActivePrestamo: (state, { payload }) => {
      state.prestamoSelected = payload;
    },
    clearActivePrestamo: (state) => {
      state.prestamoSelected = null;
    },
    modifyPrestamo: (state, { payload }) => {
      state.prestamos = state.prestamos.filter((prest) => prest.id !== payload.id)
      state.prestamos.push(payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addPrestamo,
  loadPrestamos,
  setActivePrestamo,
  clearActivePrestamo,
  modifyPrestamo
} = prestamoSlice.actions;

export default prestamoSlice.reducer;
