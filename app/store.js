import { configureStore } from '@reduxjs/toolkit'
import thunkSlice from '../features/thunk/thunkSlice'

export default configureStore({
  reducer: {
    thunk: thunkSlice.reducer,
  }
})

