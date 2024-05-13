import { useSelector } from "react-redux"
import { ProjectInterface, selectFilters, selectProjects } from "../../features/projects/projectsSlice"
import { Project } from "./Project"

const filterProjects = (projectList: ProjectInterface[], filtersList: String[]) => {
    return projectList.filter(project => {
        for (const skill of project.skills) {
            if (filtersList.includes(skill) || filtersList.length == 0) {
                return true
            }
        }
    })
}

export const ProjectsList = () => {
    const projects = useSelector(selectProjects);
    const filters = useSelector(selectFilters);
    
    return (
        <ul className="d-flex flex-column justify-content-between align-items-center list-unstyled gap-4 my-4">
            {filterProjects(projects, filters).map(project => <Project name={project.name} url={project.url} description={project.description} image={project.image} skills={project.skills} />)}
        </ul>
    )
}