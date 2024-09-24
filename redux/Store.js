import { configureStore } from '@reduxjs/toolkit'
import User from './Slice/User'

export const store = configureStore({
  reducer: {
    User
  },
})
