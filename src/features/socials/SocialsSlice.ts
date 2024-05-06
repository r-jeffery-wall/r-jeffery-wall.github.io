import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const socialsSlice = createSlice({
    name: "socials",
    initialState: // Dummy values
        [
            {
                "name": "Email",
                "url": "mailto: rowjw97@gmail.com" 
            },
            {
                "name": "GitHub",
                "url": "https://github.com/r-jeffery-wall" 
            },
            {
                "name": "Instagram",
                "url": "https://www.instagram.com/rowphotojw/" 
            },
            {
                "name": "LinkedIn",
                "url": "https://www.linkedin.com/in/rowan-jeffery-wall-822260257/" 
            }
        ], 
    reducers: {}
})

export const selectSocials = (state: RootState) => state.socials;
export default socialsSlice.reducer;