import { Skill } from "../skillsList/Skill"

export const ProjectSkillList = ({ skills }: { skills: string[] }) => {
    return (
        <ul className="list-unstyled border-start border-black text-center project-skill-list">
            {skills.map(skill => <Skill skill={skill} />)}
        </ul>
    )
}