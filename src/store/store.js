import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth/authSlice'
import prestamoSlice from './slices/prestamos/prestamoSlice'
import uiSlice from './slices/ui/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    prestamos: prestamoSlice
  },
})