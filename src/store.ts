import { configureStore } from '@reduxjs/toolkit'
import socialsReducer from './features/socials/SocialsSlice';
import skillsReducer from './features/skills/SkillsSlice';
import projectsReducer from './features/projects/projectsSlice';
import gitHubReducer from './features/gitHub/gitHubSlice';

export const store = configureStore({
  reducer: {
    socials: socialsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    gitHub: gitHubReducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
