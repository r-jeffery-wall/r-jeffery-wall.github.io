import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface SocialInterface {
  name: string
  url: string
  icon: string
}

const socialsSlice = createSlice({
  name: 'socials',
  // Dummy values
  initialState: [
    {
      name: 'Email',
      url: 'mailto: rowjw97@gmail.com',
      icon: 'fa-solid fa-envelope',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/r-jeffery-wall',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rowphotojw/',
      icon: 'fa-brands fa-instagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rowan-jeffery-wall-822260257/',
      icon: 'fa-brands fa-linkedin',
    },
  ],
  reducers: {},
})

export const selectSocials = (state: RootState) => state.socials
export default socialsSlice.reducer
