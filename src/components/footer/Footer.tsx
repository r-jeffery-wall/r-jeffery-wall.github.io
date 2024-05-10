import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  selectSocials,
  SocialInterface,
} from '../../features/socials/SocialsSlice'
import { Social } from './Social'

export const Footer: React.FC = () => {
  const socials = useSelector(selectSocials)

  return (
    <Container
      fluid
      className="bg-body-tertiary sticky-bottom border-secondary border text-center"
    >
      <ul className='d-flex justify-content-around align-items-center list-unstyled'>
        {socials.map((social: SocialInterface) => (
          <Social name={social.name} url={social.url} icon={social.icon} />
        ))}
      </ul>
      <p className='text-secondary'>Designed and developed by Rowan Jeffery-Wall. Built with <a className='link-secondary' href='https://react.dev' target='_blank'>React</a>, <a className='link-secondary' href='https://redux.js.org' target='_blank'>Redux</a>, and <a className='link-secondary' href='https://reactrouter.com/en/main' target='_blank'>React-Router</a>. Icons from <a className='link-secondary' href='https://fontawesome.com' target='_blank'>Font Awesome</a>. Site repo at <a className='link-secondary' href='https://github.com/r-jeffery-wall/r-jeffery-wall.github.io' target='_blank'>GitHub</a>. All photos used are my own.</p>
    </Container>
  )
}
