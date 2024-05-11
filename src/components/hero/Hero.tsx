import { SkillsList } from "../skillsList/SkillsList"

export const Hero: React.FC = () => {
    return (
       <div id="site-hero" className="p-0 m-0 text-center d-flex flex-column justify-content-center align-items-center text-white fw-bold about-section border-top border-bottom border-black border-3">
            <h1 className="text-uppercase">A motivated and well-rounded junior full-stack developer.</h1>
            <h3 className="text-uppercase">Skilled in React front-end development and various back-end technologies.</h3>
            <h3 className="text-uppercase">My skills include:</h3>
            <SkillsList filter={false} />
       </div> 
    )
}