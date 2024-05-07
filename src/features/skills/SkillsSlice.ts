import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SkillInterface {

}

const skillsSlice = createSlice({
    name: "skills",
    initialState: [ //Dummy values
        {
            name: "Python",
            icon: ""
        },
        {
            name: "Postgres",
            icon: ""
        },
        {
            name: "JavaScript",
            icon: ""
        },
        {
            name: "Typescript",
            icon: ""
        },
        {
            name: "Streamlit",
            icon: ""
        },
        {
            name: "React",
            icon: ""
        },
        {
            name: "Redux",
            icon: ""
        },
        {
            name: "HTML",
            icon: ""
        },
        {
            name: "CSS",
            icon: ""
        },
        {
            name: "Bootstrap",
            icon: ""
        },
        {
            name: "Bash",
            icon: ""
        },
        {
            name: "Git",
            icon: ""
        },
        {
            name: "Docker",
            icon: ""
        },
        {
            name: "Kubernetes",
            icon: ""
        },
        {
            name: "Terraform",
            icon: ""
        },
    ],
    reducers: {}
})

export const selectSkills = (state: RootState) => state.skills;
export default skillsSlice.reducer;