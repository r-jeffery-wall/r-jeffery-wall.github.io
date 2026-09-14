import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import {
  getSocialsList,
  selectSocials,
  selectSocialsLoadFailed,
  selectSocialsLoading,
} from '../features/socials/SocialsSlice'
import Section from './Section'

export default function Footer() {
  const dispatch: AppDispatch = useDispatch()
  const socials = useSelector(selectSocials)
  const loading = useSelector(selectSocialsLoading)
  const loadFailed = useSelector(selectSocialsLoadFailed)

  useEffect(() => {
    dispatch(getSocialsList())
  }, [dispatch])

  return (
    <footer className="my-6 border-t-4 border-dotted border-ctp-peach pt-4">
      <Section title="~/socials.sh" subtitle="Find me elsewhere on the internet.">
        {loading ? (
          <p className="text-orange-400">$ loading socials...</p>
        ) : loadFailed ? (
          <p>Failed to load socials. Please refresh the page.</p>
        ) : (
          <ul className="flex justify-center gap-6 list-none p-0">
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  [{social.name}]
                </a>
              </li>
            ))}
          </ul>
        )}
      </Section>
      <p className="my-4 px-8 text-sm">
        Designed and developed by Rowan Jeffery-Wall. Built with{' '}
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          Vite
        </a>{' '}
        . Icons from{' '}
        <a href="https://icons8.com" target="_blank" rel="noreferrer">
          Icons8
        </a>
        . Site repo at{' '}
        <a
          href="https://github.com/r-jeffery-wall/r-jeffery-wall.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}
