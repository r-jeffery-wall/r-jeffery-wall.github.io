import { useSelector } from 'react-redux'
import { selectSkills } from '../../features/skills/SkillsSlice'
import { Skill } from './Skill'
import { FilterableSkill } from './FilterableSkill'
import { selectFilters } from '../../features/projects/projectsSlice'

export const SkillsList: React.FC<{ filter: boolean }> = ({ filter }) => {
  const skills = useSelector(selectSkills)
  const filters = useSelector(selectFilters)

  if (filter) {
    return (
      <ul
        className="d-flex justify-content-between align-items-center list-unstyled flex-wrap"
        id="skills-list"
      >
        {skills.map((skill) => (
          <FilterableSkill
            skill={skill}
            filtered={
              filters.includes(skill) || filters.length == 0 ? true : false
            }
          />
        ))}
      </ul>
    )
  } else {
    return (
      <ul
        className="d-flex justify-content-between align-items-center list-unstyled flex-wrap"
        id="skills-list"
      >
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </ul>
    )
  }
}
