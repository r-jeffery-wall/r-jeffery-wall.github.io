export const Skill = ({ skill }: { skill: string }) => {
  const image = require(`../../assets/${skill}.png`)

  return (
    <li
      key={skill}
      className="m-2 p-2 img-hover rounded"
    >
      <img src={image} alt={`${skill} logo.`} className="mb-2" style={{width: "50px", height: "50px"}}/>
      <p>{skill}</p>
    </li>
  )
}
