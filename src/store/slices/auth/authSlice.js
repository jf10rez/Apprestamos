import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checking: true,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, { payload }) => {
      state.checking = false,
      state.user = payload
    },
    authLogout: (state) => {
      state.checking = false,
      state.user = null
    },
    authCheckingFinish: ( state ) => {
      state.checking = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { authLogin, authLogout, authCheckingFinish } = authSlice.actions

export default authSlice.reducer