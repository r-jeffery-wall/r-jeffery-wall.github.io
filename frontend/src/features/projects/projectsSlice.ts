import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import config from '../config.json'

interface ProjectsState {
  projectsLoading: boolean
  projectsLoadFailed: boolean
  projectsList: ProjectInterface[]
  filterList: String[]
}

export interface ProjectInterface {
  name: string
  url: string
  description: string
  image: {
    path: string
    alt: string
  }
  skills: string[]
}

export const getProjectList = createAsyncThunk(
  'projects/getProjectsList',
  async () => {
    return config.projects
  }
)

const initialState: ProjectsState = {
  projectsLoading: false,
  projectsLoadFailed: false,
  projectsList: [],
  filterList: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<string>) => {
      if (state.filterList.includes(action.payload)) {
        // If a skill is already filtered, it will be removed from the list.
        state.filterList = state.filterList.filter(
          (skill) => skill !== action.payload
        )
      } else {
        state.filterList.push(action.payload)
      }
    },
    clearFilters: (state) => {
      state.filterList = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectList.pending, (state) => {
      state.projectsLoading = true
      state.projectsLoadFailed = false
    })
    builder.addCase(getProjectList.fulfilled, (state, action) => {
      state.projectsLoading = false
      state.projectsLoadFailed = false
      state.projectsList = action.payload
    })
    builder.addCase(getProjectList.rejected, (state) => {
      state.projectsLoading = false
      state.projectsLoadFailed = true
    })
  },
})

export const selectProjects = (state: RootState) => state.projects.projectsList
export const selectFilters = (state: RootState) => state.projects.filterList
export const selectProjectsLoading = (state: RootState) =>
  state.projects.projectsLoading
export const selectProjectsLoadFailed = (state: RootState) =>
  state.projects.projectsLoadFailed
export const { updateFilters, clearFilters } = projectsSlice.actions
export default projectsSlice.reducer
