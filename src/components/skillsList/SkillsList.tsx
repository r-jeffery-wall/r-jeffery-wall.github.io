import { useDispatch, useSelector } from 'react-redux'
import { getSkillsList, selectSkills } from '../../features/skills/SkillsSlice'
import { Skill } from './Skill'
import { FilterableSkill } from './FilterableSkill'
import { selectFilters } from '../../features/projects/projectsSlice'
import { AppDispatch } from '../../store'
import { useEffect } from 'react'

export const SkillsList: React.FC<{ filter: boolean }> = ({ filter }) => {
  const dispatch: AppDispatch = useDispatch()
  const skills = useSelector(selectSkills)
  const filters = useSelector(selectFilters)

  useEffect(() => {
    dispatch(getSkillsList())
  })

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
