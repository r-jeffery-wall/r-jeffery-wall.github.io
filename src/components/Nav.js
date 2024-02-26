function Nav({ bannerVisible }) {
    return (
        <nav class="content-container">
            {bannerVisible ? <h2 id="secondary-header"></h2> : <h2 id="secondary-header" className="active">Rowan Jeffery-Wall</h2>}
            <ul class="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contributions">Contributions</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;
