import { ProjectInterface } from '../../features/projects/projectsSlice'
import { ProjectSkillList } from './ProjectSkillList'

export const Project = ({
  name,
  url,
  description,
  image,
  skills,
}: ProjectInterface) => {
  const imageSrc = require(`../../assets/${image.path}.png`)
  return (
    <li className="bg-secondary border border-black rounded w-75 m-auto text-white">
      <a href={url} target="_blank">
        <h3 className='position-absolute start-50 translate-middle mt-5' >{name}</h3>
      </a>
      <div className="d-flex justify-content-between align-items-center">
        <img src={imageSrc} alt={image.alt} className="col-3" />
        <p className='mx-4 col-6'>{description}</p>
        <ProjectSkillList skills={skills} />
      </div>
    </li>
  )
}
