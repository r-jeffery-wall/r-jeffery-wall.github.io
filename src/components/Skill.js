function Skill( props ) {
    return (
        <li> 
            <img src={props.imageSrc} alt={`${props.name} logo`} class="lang-logo img-hover slider" id={props.name} />
            <p class="slider-text">{props.name}</p>
        </li> 
    )
}

export default Skill;