function Skill( props ) {
    return (
        <li> 
            <img src={`../images/${props.name}.png`} alt={`${props.name} logo`} class="lang-logo img-hover slider" id={props.name} onMouseOver={event => props.sliderHover(event.target)} onMouseOut={event => props.sliderHoverOff(event.target)} />
            <p class="slider-text">{props.name}</p>
        </li> 
    )
}

export default Skill;