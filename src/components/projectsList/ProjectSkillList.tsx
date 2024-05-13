import { Skill } from "../skillsList/Skill"

export const ProjectSkillList = ({ skills }: { skills: string[] }) => {
    return (
        <ul className=" d-flex justify-content-center w-100 border-top border-black list-unstyled text-center gap-3">
            {skills.map(skill => <Skill skill={skill} />)}
        </ul>
    )
}