function Skill( { name, sliderHover, sliderHoverOff, filtered, updateFilters } ) {
    return (
        <li className={filtered ? '' : 'translucent'}  onClick={() => updateFilters(name)}> 
            <img src={`../images/${name}.png`} alt={`${name} logo`} class="lang-logo img-hover slider" id={name} onMouseOver={event => sliderHover(event.target)} onMouseOut={event => sliderHoverOff(event.target)} />
            <p class="slider-text">{name}</p>
        </li> 
    )
}

export default Skill;
