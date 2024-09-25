import { useSelector } from 'react-redux'
import { Skill } from '../skillsList/Skill'
import { selectSkills } from '../../features/skills/SkillsSlice'

export const ProjectSkillList: React.FC<{ skills: string[] }> = ({
  skills,
}) => {
  const skillsList = useSelector(selectSkills).filter((skill) => skills.includes(skill.name))

  return (
    <ul className=" d-flex justify-content-center w-100 border-top border-black list-unstyled text-center gap-3 flex-wrap">
      {skillsList.map((skill) => (
        <Skill skill={skill.name} image={skill.image} />
      ))}
    </ul>
  )
}
