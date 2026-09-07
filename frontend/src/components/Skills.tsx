import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import {
  getSkillsList,
  selectSkills,
  selectSkillsLoadFailed,
  selectSkillsLoading,
} from '../features/skills/SkillsSlice'
import Section from './Section'

export default function Skills() {
  const dispatch: AppDispatch = useDispatch()
  const skills = useSelector(selectSkills)
  const loading = useSelector(selectSkillsLoading)
  const loadFailed = useSelector(selectSkillsLoadFailed)

  useEffect(() => {
    dispatch(getSkillsList())
  }, [dispatch])

  return (
    <Section title="~/skills.sh" subtitle="Technologies I have used and am learning.">
      {loading ? (
        <p className="text-orange-400">$ loading skills...</p>
      ) : loadFailed ? (
        <p>Failed to load skills. Please refresh the page.</p>
      ) : (
        <ul className="flex flex-wrap justify-center gap-2 list-none p-0">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="m-2 p-2 border-2 border-dotted border-orange-400 rounded"
            >
              <img
                src={skill.image}
                alt={`${skill.name} logo.`}
                className="mx-auto mb-2 w-12 h-12"
              />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
