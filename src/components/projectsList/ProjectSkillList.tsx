import { Skill } from '../skillsList/Skill'

export const ProjectSkillList: React.FC<{ skills: string[] }> = ({
  skills,
}) => {
  return (
    <ul className=" d-flex justify-content-center w-100 border-top border-black list-unstyled text-center gap-3 flex-wrap">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </ul>
  )
}
