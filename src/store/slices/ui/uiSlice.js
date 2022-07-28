import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: null,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAmount: (state, { payload }) => {
      state.amount = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAmount } = uiSlice.actions

export default uiSlice.reducer