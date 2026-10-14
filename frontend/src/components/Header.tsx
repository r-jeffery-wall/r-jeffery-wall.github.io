import Title from './Title'

export default function Header() {
  return (
    <div>
      <Title text="~/Rowan_Jeffery-Wall.sh" size="text-5xl" />
      <div className="border-b-4 border-ctp-peach border-dotted my-2">
        <p className="my-6 px-8">
          Welcome to my personal website!
        </p>
        <p className="my-6 px-8">
          This site is intended to be a showcase of my skills, projects I have
          worked on, and a way to link to my socials. As my skills grow I will
          update and iterate on this site as I pick up new technologies and
          best practices.
        </p>
      </div>
    </div>
  )
}
