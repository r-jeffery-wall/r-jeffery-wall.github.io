import { ProjectInterface } from '../../features/projects/projectsSlice'
import { ProjectSkillList } from './ProjectSkillList'

export const Project: React.FC<ProjectInterface> = ({
  name,
  url,
  description,
  image,
  skills,
}) => {
  const imageSrc = require(`../../assets/${image.path}.png`)
  return (
    <li className="container-lg bg-secondary border border-black rounded m-auto text-white">
      <h3 className='mt-3'>{url ? <a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href={url} target="_blank">{name}</a> : name}</h3>
      <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center">
        <img
          src={imageSrc}
          alt={image.alt}
          className="col-lg-3 img-fluid rounded border border-black my-2"
        />
        <p className="mx-4 col-lg-6">{description}</p>
      </div>
      <ProjectSkillList skills={skills} />
    </li>
  )
}
