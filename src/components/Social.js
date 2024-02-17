function Social(props) {
    return (
        <li class="social">
            <a href={props.url} target="_blank"><img class="img-hover social-logo slider" src={`../images/${props.name}.png`} alt={`${props.name} Logo`} onMouseOver={event => props.sliderHover(event.target)} onMouseOut={event => props.sliderHoverOff(event.target)}/>
            <p class="slider-text">{props.name}</p>
            </a>
        </li>
    )
}

export default Social;