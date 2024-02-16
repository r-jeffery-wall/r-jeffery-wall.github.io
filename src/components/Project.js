function Project(props) {
    return (
        <div class="project-container">
            <img src={props.image.path} alt={props.image.alt} class="img-left" />
                <div class="content-container">
                    <h3>{props.name}</h3>
                    <p>{props.text}</p>
                </div>
        </div>
    )
}

export default Project;