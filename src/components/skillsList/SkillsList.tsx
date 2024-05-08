import { useSelector } from "react-redux"
import { selectSkills } from "../../features/skills/SkillsSlice"
import { Skill } from "./Skill";

export const SkillsList = () => {
    const skills = useSelector(selectSkills);

    return (
      <ul className="d-flex justify-content-between align-items-center list-unstyled flex-wrap">
        {skills.map(skill => <Skill skill={skill} />)}
      </ul>          
    )
}