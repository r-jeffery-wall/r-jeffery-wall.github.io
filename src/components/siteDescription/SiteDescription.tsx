export const SiteDescription: React.FC = () => {
  return (
    <div
      id="site-description"
      className="p-3 m-0 text-center about-section d-flex flex-column justify-content-center align-items-center text-white text-center fw-bold border-top border-bottom border-black border-3"
    >
      <div
        className="container-lg border border-secondary rounded p-2"
        style={{ backgroundColor: 'rgba(199, 199, 199, 0.651)' }}
      >
        <h2 className="mb-5">About this Site</h2>
        <p>
          This site is intended to be a showcase of my skills, projects I have
          worked on, and a way to link to my socials. As my skills grow I will
          update and iterate on this site as I pick up new technologies and best
          practices.
        </p>
        <p>
          The current iteration of this site is built using React 18, Redux, and
          React-Router. Currently, the data fed into Redux is mostly static, but
          as my back-end skills grow I intend to build out a back-end that will
          allow me to update the list of skills and projects on this site using
          an admin dashboard and API calls. I am currently learning{' '}
          <a href="https://expressjs.com/" target="_blank">
            Express
          </a>
          , but I may also explore other back-end technologies such as{' '}
          <a href="https://www.djangoproject.com/" target="_blank">
            Django
          </a>
          .
        </p>
        <p>
          This site is the first project that I have used TypeScript for. I have
          enjoyed learning TypeScript as I go, and have found it interesting to
          discover the differences between TS and vanilla JavaScript. As I go
          forward, I will try to use TypeScript as standard.
        </p>
      </div>
    </div>
  )
}
