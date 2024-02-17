import Social from "./Social";

function Socials( props ) {
    return (
        <footer class="content-container" id="contact">
            <h2 class="section-heading">Contact</h2>
            <ul class="social-links">
                {props.socials.map(social => <Social name={social.name}  url={social.url} sliderHover={props.sliderHover} sliderHoverOff={props.sliderHoverOff}/>)}
            </ul>
        </footer>
    )
}

export default Socials;