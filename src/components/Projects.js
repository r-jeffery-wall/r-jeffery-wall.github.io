import Skill from './Skill.js';

function Projects( props ) {
    return (
            <section id="projects">
                <div class="content-container">
                    <h2 class="section-heading">Skills</h2>
                    <ul class='skills-list'>
                    {props.skills.map(skill => <Skill name={skill.name} imageSrc={skill.logo} />)}
                    </ul>
                </div>
            </section>
    )
}

export default Projects;