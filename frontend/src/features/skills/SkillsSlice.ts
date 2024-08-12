import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface SkillInterface {
  id: number
  name: string
}

interface SkillsInterface {
  skillsLoading: boolean
  skillsLoadFailed: boolean
  skills: SkillInterface[]
}

export const getSkillsList = createAsyncThunk(
  'skills/getSkillsList',
  async () => {
    const response = await fetch('https://api.rowanjefferywall.com/api/skills/')
    const json = await response.json()
    return json
  }
)

const initialState: SkillsInterface = {
  skillsLoading: false,
  skillsLoadFailed: false,
  skills: [],
}

const skillsSlice = createSlice({
  name: 'skills',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSkillsList.pending, (state) => {
      state.skillsLoading = true
      state.skillsLoadFailed = false
    })
    builder.addCase(getSkillsList.fulfilled, (state, action) => {
      state.skillsLoading = false
      state.skillsLoadFailed = false
      state.skills = action.payload
    })
    builder.addCase(getSkillsList.rejected, (state) => {
      state.skillsLoading = false
      state.skillsLoadFailed = true
    })
  },
})

export const selectSkills = (state: RootState) =>
  state.skills.skills.map((skill) => skill.name)
export const selectSkillsLoading = (state: RootState) =>
  state.skills.skillsLoading
export const selectSkillsLoadFailed = (state: RootState) =>
  state.skills.skillsLoadFailed
export default skillsSlice.reducer
