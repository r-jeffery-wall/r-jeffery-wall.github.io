export const Skill = ({ skill }: { skill: string }) => {
    const image = require(`../../assets/${skill}.png`);
    
    return (
        <li key={skill} className="m-3">
           <img src={image} alt={`${skill} logo.`} className="img-hover mb-2" style={{width: "75px", height: "75px"}} />
           <p>{skill}</p>
        </li>
    )
}