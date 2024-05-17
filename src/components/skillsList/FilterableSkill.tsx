import { useDispatch } from 'react-redux'
import { updateFilters } from '../../features/projects/projectsSlice'

export const FilterableSkill: React.FC<{
  skill: string
  filtered: boolean
}> = ({ skill, filtered }) => {
  const dispatch = useDispatch()
  const image = require(`../../assets/${skill}.png`)

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
