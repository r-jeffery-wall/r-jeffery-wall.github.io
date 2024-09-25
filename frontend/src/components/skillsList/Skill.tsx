export const Skill: React.FC<{ skill: string, image: string }> = ({ skill, image }) => {

  return (
    <li key={skill} className="m-2 p-2 img-hover rounded">
      <img
        src={image}
        alt={`${skill} logo.`}
        className="mb-2 skill-img"
      />
      <p>{skill}</p>
    </li>
  )
}
