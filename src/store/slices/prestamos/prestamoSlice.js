import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  prestamos: [],
  prestamoSelected: null,
  dataLoaded: false
}

export const prestamoSlice = createSlice({
  name: 'prestamo',
  initialState,
  reducers: {
    addPrestamo: (state, {payload}) => {
      state.prestamos.push(payload)
    },
    loadPrestamos: ( state, {payload} ) => {
        state.prestamos = payload
        state.dataLoaded = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPrestamo, loadPrestamos } = prestamoSlice.actions

export default prestamoSlice.reducer