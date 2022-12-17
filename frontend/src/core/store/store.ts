import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth-slice'
import map from './slices/map-slice'

export const store = configureStore({
  reducer: {
    auth,
    map,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AsyncThunkConfig = {}