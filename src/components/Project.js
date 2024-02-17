function Project(props) {
    return (
        <div class="project-container">
            <img src={props.image.path} alt={props.image.alt} class="img-left" />
            <div class="content-container">
                <h3>{props.url ? <a href={props.url} target="_blank">{props.name}</a> : props.name}</h3>
                <p>{props.text}</p>
                <h4>Skills Used:</h4>
                <ul className="skills-list">
                    {props.skills.map(skill =>
                        <li><img className='img-hover' src={`../images/${skill}.png`} alt={`${skill} logo`} /></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Project;