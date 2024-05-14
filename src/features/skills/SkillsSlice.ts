import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [
    //Dummy values
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'HTML',
    'CSS',
    'Python',
    'Postgres',
    'Streamlit',
    'Bootstrap',
    'Bash',
    'Git',
    'Docker',
    'Kubernetes',
    'Terraform',
  ],
  reducers: {},
})

export const selectSkills = (state: RootState) => state.skills
export default skillsSlice.reducer
