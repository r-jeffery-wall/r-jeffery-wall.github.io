import { useDispatch, useSelector } from 'react-redux'
import {
  getProjectList,
  ProjectInterface,
  selectFilters,
  selectProjects,
  selectProjectsLoadFailed,
  selectProjectsLoading,
} from '../../features/projects/projectsSlice'
import { Project } from './Project'
import { useEffect } from 'react'
import { AppDispatch } from '../../store'

const filterProjects = (
  projectList: ProjectInterface[],
  filtersList: String[]
) => {
  return projectList.filter((project) => {
    for (const skill of project.skills) {
      if (filtersList.includes(skill) || filtersList.length == 0) {
        return true
      }
    }
  })
}

export const ProjectsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const projects = useSelector(selectProjects)
  const filters = useSelector(selectFilters)
  const loading = useSelector(selectProjectsLoading)
  const loadFailed = useSelector(selectProjectsLoadFailed)

  useEffect(() => {
    dispatch(getProjectList())
  }, [])

  if (loading) {
    return <h1>Projects Loading...</h1>
  } else if (loadFailed) {
    return <h1>Projects failed to load. Please refresh the page!</h1>
  } else {
    return (
      <ul className="d-flex flex-column justify-content-between align-items-center list-unstyled gap-4 my-4">
        {filterProjects(projects, filters).map((project) => (
          <Project
            name={project.name}
            url={project.url}
            description={project.description}
            image={project.image}
            skills={project.skills}
          />
        ))}
      </ul>
    )
  }
}
