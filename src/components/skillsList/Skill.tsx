export const Skill = ({ skill }: { skill: string }) => {
    const image = require(`../../assets/${skill}.png`);
    
    return (
        <li key={skill} className="m-3 rounded-circle p-3 d-flex flex-column justify-content-center align-items-center col translucent img-hover" style={{maxWidth: "115px", maxHeight: "115px", backgroundColor: "rgba(255, 255, 255, 0.68)"}}>
           <img src={image} alt={`${skill} logo.`} className="mb-2 w-50 h-50 ratio ratio-1x1" />
           <p className="text-dark" >{skill}</p>
        </li>
    )
}