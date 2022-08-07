import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  units: [],
  load: false
}

export const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    newUnits: (state, { payload }) => {
      units.push( payload )
    },
    loadUnits: (state, { payload }) => {
        state.units = payload
        state.load = true    
    },
  },
})

// Action creators are generated for each case reducer function
export const { newUnits, loadUnits } = unitSlice.actions

export default unitSlice.reducer