import Skill from './Skill.js';
import Project from './Project.js';

function Projects( props ) {
    return (
            <section id="projects">
                <div class="content-container">
                    <h2 class="section-heading">Projects</h2>
                </div>
                <div class="content-container">
                    <h2 class="section-heading">Skills</h2>
                    <p>Click on any of the below skills to filter the projects list.</p>
                    <ul class='skills-list'>
                    {props.skills.map(skill => <Skill name={skill} />)}
                    </ul>
                </div>
                {props.projects.map(project => <Project name={project.name} url={project.url} text={project.description} image={project.image} skills={project.skills} />)}
            </section>
    )
}

export default Projects;