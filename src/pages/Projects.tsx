import { ProjectsList } from '../components/projectsList/ProjectsList'
import { SkillsFilter } from '../components/skillsFilter/SkillsFilter'

export const Projects: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="p-3">My Projects</h1>
      <SkillsFilter />
      <ProjectsList />
    </div>
  )
}
