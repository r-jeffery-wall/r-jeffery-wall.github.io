function Project({ image, url, name, text, skills, alignment }) {
    return (
        <div className={alignment === 'left' ? 'project-container' : 'project-container reverse' }>
            <img src={image.path} alt={image.alt} />
            <div className="content-container">
                <h3>{url ? <a href={url} target="_blank">{name}</a> : name}</h3>
                <p>{text}</p>
                <h4>Skills Used:</h4>
                <ul className="skills-list">
                    {skills.map(skill =>
                        <li><img className='img-hover' src={`../images/${skill}.png`} alt={`${skill} logo`} /></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Project;