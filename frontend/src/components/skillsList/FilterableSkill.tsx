import { useDispatch } from 'react-redux'
import { updateFilters } from '../../features/projects/projectsSlice'

export const FilterableSkill: React.FC<{
  skill: string
  image: string
  filtered: boolean
}> = ({ skill, image, filtered }) => {
  const dispatch = useDispatch()

  return (
    <li
      key={skill}
      className={
        'm-2 p-2 col-m-1 img-hover rounded ' +
        (filtered ? 'fw-bold' : 'translucent')
      }
      onClick={() => dispatch(updateFilters(skill))}
    >
      <img
        src={image}
        alt={`${skill} logo.`}
        className="mb-2 skill-img"
      />
      <p>{skill}</p>
    </li>
  )
}
