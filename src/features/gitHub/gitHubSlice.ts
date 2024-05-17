import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const getProfileInfo = createAsyncThunk(
  'gitHub/getProfileInfo',
  async (username: string) => {
    //Gets information for a GitHub user by username.
    const response = await fetch(`https://api.github.com/users/${username}`)
    const json = await response.json()
    return json
  }
)

export const getReposForUser = createAsyncThunk(
  'gitHub/getReposForUser',
  async (username: string) => {
    // Gets a user's gitHub repos.
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const json = await response.json()
    return json
  }
)

interface GitHubInterface {
  profileLoading: boolean
  profileLoadFailed: boolean
  reposLoading: boolean
  reposLoadFailed: boolean
  profile: ProfileInterface
  repos: RepoInterface[]
}

export interface RepoInterface {
  name: string
  full_name: string
  html_url: string
  description: string
  created_at: string
  updated_at: string
}

interface ProfileInterface {
  login: string
  id: Number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: any
  company: any
  blog: any
  location: any
  email: any
  hireable: any
  bio: any
  twitter_username: any
  public_repos: Number
  public_gists: Number
  followers: Number
  following: Number
  created_at: any
  updated_at: any
}

const initialState: GitHubInterface = {
  profileLoading: false,
  profileLoadFailed: false,
  reposLoading: false,
  reposLoadFailed: false,
  profile: {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: '',
  },
  repos: [],
}

const GitHubSlice = createSlice({
  name: 'gitHub',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileInfo.pending, (state) => {
      state.profileLoading = true
      state.profileLoadFailed = false
    })
    builder.addCase(getProfileInfo.fulfilled, (state, action) => {
      state.profileLoading = false
      state.profileLoadFailed = false
      state.profile = action.payload
    })
    builder.addCase(getProfileInfo.rejected, (state) => {
      state.profileLoading = false
      state.profileLoadFailed = true
    })
    builder.addCase(getReposForUser.pending, (state) => {
      state.reposLoading = true
      state.reposLoadFailed = false
    })
    builder.addCase(getReposForUser.fulfilled, (state, action) => {
      state.reposLoading = false
      state.reposLoadFailed = false
      state.repos = action.payload
    })
    builder.addCase(getReposForUser.rejected, (state) => {
      state.reposLoading = false
      state.reposLoadFailed = true
    })
  },
})

export const isProfileLoading = (state: RootState) =>
  state.gitHub.profileLoading
export const isProfileLoadFailed = (state: RootState) =>
  state.gitHub.profileLoadFailed
export const isReposLoading = (state: RootState) => state.gitHub.reposLoading
export const isReposLoadFailed = (state: RootState) =>
  state.gitHub.reposLoadFailed
export const selectRepos = (state: RootState) => state.gitHub.repos
export const selectProfile = (state: RootState) => state.gitHub.profile
export default GitHubSlice.reducer
