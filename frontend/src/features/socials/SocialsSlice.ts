import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface SocialsState {
  socialsLoading: boolean
  socialsLoadFailed: boolean
  socialsList: SocialInterface[]
}

export interface SocialInterface {
  name: string
  url: string
  icon: string
}

export const getSocialsList = createAsyncThunk(
  'socials/getSocialsList',
  async () => {
    const response = await fetch('http://localhost:8000/api/socials/')
    const json = await response.json()
    return json
  }
)

const initialState: SocialsState = {
  socialsLoading: false,
  socialsLoadFailed: false,
  socialsList: [],
}

const socialsSlice = createSlice({
  name: 'socials',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSocialsList.pending, (state) => {
      state.socialsLoading = true
      state.socialsLoadFailed = false
    })
    builder.addCase(getSocialsList.fulfilled, (state, action) => {
      state.socialsLoading = false
      state.socialsLoadFailed = false
      state.socialsList = action.payload
    })
    builder.addCase(getSocialsList.rejected, (state) => {
      state.socialsLoading = false
      state.socialsLoadFailed = true
    })
  },
})

export const selectSocials = (state: RootState) => state.socials.socialsList
export const selectSocialsLoading = (state: RootState) =>
  state.socials.socialsLoading
export const selectSocialsLoadFailed = (state: RootState) =>
  state.socials.socialsLoadFailed
export default socialsSlice.reducer
