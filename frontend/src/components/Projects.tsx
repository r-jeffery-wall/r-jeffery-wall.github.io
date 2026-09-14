import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import {
  getProjectList,
  selectProjects,
  selectProjectsLoadFailed,
  selectProjectsLoading,
} from '../features/projects/projectsSlice'
import Section from './Section'

export default function Projects() {
  const dispatch: AppDispatch = useDispatch()
  const projects = useSelector(selectProjects)
  const loading = useSelector(selectProjectsLoading)
  const loadFailed = useSelector(selectProjectsLoadFailed)

  useEffect(() => {
    dispatch(getProjectList())
  }, [dispatch])

  return (
    <Section title="~/projects.sh" subtitle="A selection of things I have built.">
      {loading ? (
        <p className="text-orange-400">$ loading projects...</p>
      ) : loadFailed ? (
        <p>Failed to load projects. Please refresh the page.</p>
      ) : (
        <ul className="flex flex-col gap-6 list-none p-0">
          {projects.map((project) => (
            <li
              key={project.name}
              className="border-2 border-dotted border-ctp-peach rounded p-4 mx-auto w-full max-w-3xl"
            >
              <h3 className="text-2xl">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-3">
                <img
                  src={project.image.path}
                  alt={project.image.alt}
                  className="w-48 rounded border-2 border-dotted border-ctp-peach"
                />
                <p className="md:w-1/2">{project.description}</p>
              </div>
              <p className="text-orange-400">{project.skills.join(' · ')}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
