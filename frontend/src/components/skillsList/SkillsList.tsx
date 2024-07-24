import { useDispatch, useSelector } from 'react-redux'
import {
  getSkillsList,
  selectSkills,
  selectSkillsLoadFailed,
  selectSkillsLoading,
} from '../../features/skills/SkillsSlice'
import { Skill } from './Skill'
import { FilterableSkill } from './FilterableSkill'
import { selectFilters } from '../../features/projects/projectsSlice'
import { AppDispatch } from '../../store'
import { useEffect } from 'react'

export const SkillsList: React.FC<{ filter: boolean }> = ({ filter }) => {
  const dispatch: AppDispatch = useDispatch()
  const skills = useSelector(selectSkills)
  const filters = useSelector(selectFilters)
  const loading = useSelector(selectSkillsLoading)
  const loadFailed = useSelector(selectSkillsLoadFailed)

  useEffect(() => {
    dispatch(getSkillsList())
  }, [])

  if (loading) {
    return <h2 className="text-info">Skills loading!</h2>
  } else if (loadFailed) {
    return (
      <h2 className="text-danger">
        Failed to load skills. Please refresh the page.
      </h2>
    )
  } else if (filter) {
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
