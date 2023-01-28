import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import recordsReducer from "./features/records/recordSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    records: recordsReducer,
  },
})