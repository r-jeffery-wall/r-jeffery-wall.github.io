import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [ //Dummy values
    'Python',
    'Postgres',
    'JavaScript',
    'Streamlit',
    'React',
    'Redux',
    'HTML',
    'CSS',
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
