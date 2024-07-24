import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSocialsList,
  selectSocials,
  selectSocialsLoadFailed,
  selectSocialsLoading,
  SocialInterface,
} from '../../features/socials/SocialsSlice'
import { Social } from './Social'
import { useEffect } from 'react'
import { AppDispatch } from '../../store'

export const Footer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const socials = useSelector(selectSocials)
  const loading = useSelector(selectSocialsLoading)
  const loadFailed = useSelector(selectSocialsLoadFailed)

  useEffect(() => {
    dispatch(getSocialsList())
  }, [])

  if (loading) {
    return <h2>Socials loading...</h2>
  } else if (loadFailed) {
    return (
      <h2 className="text-danger text-center">
        Failed to load socials. Please refresh the page
      </h2>
    )
  } else {
    return (
      <Container
        fluid
        className="bg-body-tertiary border-secondary border text-center mt-3"
      >
        <ul className="d-flex justify-content-around align-items-center list-unstyled">
          {socials.map((social: SocialInterface) => (
            <Social name={social.name} url={social.url} icon={social.icon} />
          ))}
        </ul>
        <p className="text-secondary">
          Designed and developed by Rowan Jeffery-Wall. Built with{' '}
          <a
            className="link-secondary"
            href="https://react.dev"
            target="_blank"
          >
            React
          </a>
          ,{' '}
          <a
            className="link-secondary"
            href="https://redux.js.org"
            target="_blank"
          >
            Redux
          </a>
          , and{' '}
          <a
            className="link-secondary"
            href="https://reactrouter.com/en/main"
            target="_blank"
          >
            React-Router
          </a>
          . Icons from{' '}
          <a
            className="link-secondary"
            href="https://fontawesome.com"
            target="_blank"
          >
            Font Awesome
          </a>{' '}
          and{' '}
          <a href="https://icons8.com/" target="_blank">
            icons8
          </a>
          . Site repo at{' '}
          <a
            className="link-secondary"
            href="https://github.com/r-jeffery-wall/r-jeffery-wall.github.io"
            target="_blank"
          >
            GitHub
          </a>
          . All photos used are my own.
        </p>
      </Container>
    )
  }
}
