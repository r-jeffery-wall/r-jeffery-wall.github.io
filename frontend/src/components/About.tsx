import Section from './Section'

export default function About() {
  return (
    <Section title="~/about.sh" subtitle="Hi, I'm Rowan.">
      <p>
        Although I have always been interested in technology and coding, my
        coding journey began in earnest two years ago. I began with Python so
        that I could work on Raspberry Pi projects. I have since started with
        full-stack web development, learning JavaScript and moving on to
        front-end frameworks such as React and back-end technologies such as
        Express.
      </p>
      <p>
        I am motivated by a desire to learn new things and to learn by building
        things. There's no better way to learn than getting stuck in and
        working it out! I am also deeply interested in the free and open-source
        eco-system and would love to contribute to some projects as my skills
        grow. I am also trying to learn best practices as I go so that my code
        can be accessible and potentially useful for as many as possible.
      </p>
      <p>
        I am also interested in photography, cinema, gaming, urbanism, and
        history. Please feel free to explore my projects and contributions
        below, and consult the social links at the bottom of the page to see
        more and get in touch!
      </p>
      <p>
        The current iteration of this site is built using React, Redux, and
        Tailwind CSS, with Vite as the build tool. All content is served from a
        static config file, and contribution data is pulled from the GitHub
        API.
      </p>
      <p className="text-2xl font-bold">
        🌍 Currently based in: London, United Kingdom
      </p>
    </Section>
  )
}
