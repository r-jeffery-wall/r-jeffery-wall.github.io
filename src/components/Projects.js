import Skill from './Skill.js';
import Project from './Project.js';

function Projects(props) {
    return (
        <section id="projects">
            <div class="content-container">
                <h2 class="section-heading">Projects</h2>
            </div>
            <div class="content-container">
                <h2 class="section-heading">Skills</h2>
                <p>Click on any of the below skills to filter the projects list.</p>
                <ul class='skills-list'>
                    {props.skills.map(skill => <Skill name={skill} sliderHover={props.sliderHover} sliderHoverOff={props.sliderHoverOff} filtered={props.filters.includes(skill) ? true : false} updateFilters={props.updateFilters} />)}
                </ul>
                <button id='clear-filters' onClick={() => props.clearFilters()}>Clear Filters</button>
            </div>
            {props.projects.filter(project => {
                for (const skill of project.skills) {
                    if (props.filters.includes(skill)) {
                        return true
                    }
                }
            }).map((project, index) => <Project name={project.name} url={project.url} text={project.description} image={project.image} skills={project.skills} alignment={index % 2 === 0 ? 'left' : 'right'} />)}
            <div class="content-container">
                <h2 class="section-heading">More Projects</h2>
                <p>Below you can find some other places where you can browse more projects that I have worked on.</p>
            </div>
            <div class="grid-container">
                <div class="external-projects content-container">
                    <h3><a href="https://www.frontendmentor.io/profile/DeckRickard" target="_blank">Frontend Mentor</a></h3>
                    <p>Frontend Mentor is where I have worked on a number of frontend development challenges, utilising HTML, CSS, and JS to produce frontend elements and pages from design specifications.</p>
                </div>
                <div class="external-projects content-container">
                    <h3><a href="https://codepen.io/rowjw" target="_blank">Codepen</a></h3>
                    <p>Codepen provides an easy way to make and deploy small frontend projects. All of the projects here were made whilst I was working through the <a href="https://www.freecodecamp.org/learn/" target="_blank">Freecodecamp</a> curriculum in 2021/22.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;
