import { configureStore } from '@reduxjs/toolkit'
import socialsReducer from './features/socials/SocialsSlice';
import skillsReducer from './features/skills/SkillsSlice';
import projectsReducer from './features/projects/projectsSlice';

export const store = configureStore({
  reducer: {
    socials: socialsReducer,
    skills: skillsReducer,
    projects: projectsReducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
