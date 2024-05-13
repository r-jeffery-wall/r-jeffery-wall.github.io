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
      <a href={url} target="_blank" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' >
        <h3 className='my-3'>{name}</h3>
      </a>
      <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center">
        <img src={imageSrc} alt={image.alt} className="col-lg-3 img-fluid rounded border border-black my-2" />
        <p className='mx-4 col-lg-6'>{description}</p>
      </div>
      <ProjectSkillList skills={skills} />
    </li>
  )
}
