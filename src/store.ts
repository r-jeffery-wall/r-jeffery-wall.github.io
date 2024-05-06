import { configureStore } from '@reduxjs/toolkit'
import socialsReducer from './features/socials/SocialsSlice';

export const store = configureStore({
  reducer: {
    socials: socialsReducer 
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
