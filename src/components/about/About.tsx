export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="p-3 m-0 text-center about-section d-flex flex-column justify-content-center align-items-center text-white text-center fw-bold border-top border-bottom border-black border-3"
    >
      <div
        className="container-lg border border-secondary rounded p-2"
        style={{ backgroundColor: 'rgba(199, 199, 199, 0.651)' }}
      >
        <h2 className="mb-5">Hi 👋, I'm Rowan.</h2>
        <p>
          Although I have always been interested in technology and coding, my
          coding journey began in earnest two years ago. I began with Python so
          that I could work on Raspberry Pi projects. I have since started with
          full-stack web development, learning JavaScript and moving on to
          front-end frameworks such as React and back-end technolgies such as
          Express.
        </p>
        <p>
          I am motivated by a desire to learn new things and to learn by
          building things. There's no better way to learn than getting stuck in
          and working it out! I am also deeply interested in the free and
          open-source eco-system and would love to contribute to some projects
          as my skills grow. I am also trying to learn best practices as I go so
          that my code can be accessible and potentially useful for as many as
          possible. This website is intended to be a showcase of my skills and
          projects. I will update the site as I learn new technologies and my
          skills improve.
        </p>
        <p>
          I am also interested in photography (also showcased on this site),
          cinema, gaming, urbanism, and history. Please feel free to explore
          projects I have worked on through this site, and consult the social
          links down below to see more and get in touch!
        </p>
      </div>
    </div>
  )
}
