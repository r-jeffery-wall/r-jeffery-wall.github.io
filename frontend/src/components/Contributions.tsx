import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store'
import {
  getProfileInfo,
  getReposForUser,
  isProfileLoadFailed,
  isProfileLoading,
  isReposLoadFailed,
  isReposLoading,
  selectProfile,
  selectRepos,
} from '../features/gitHub/gitHubSlice'
import Section from './Section'
import moment from 'moment'

export default function Contributions() {
  const dispatch: AppDispatch = useDispatch()
  const profile = useSelector(selectProfile)
  const profileLoading = useSelector(isProfileLoading)
  const profileLoadFailed = useSelector(isProfileLoadFailed)
  const repos = useSelector(selectRepos)
  const reposLoading = useSelector(isReposLoading)
  const reposLoadFailed = useSelector(isReposLoadFailed)

  useEffect(() => {
    dispatch(getProfileInfo('r-jeffery-wall'))
    dispatch(getReposForUser('r-jeffery-wall'))
  }, [dispatch])

  return (
    <Section title="~/contributions.sh" subtitle="My open-source activity on GitHub.">
      {profileLoading ? (
        <p className="text-orange-400">$ loading profile...</p>
      ) : profileLoadFailed ? (
        <p>Failed to load GitHub profile. Please refresh the page.</p>
      ) : (
        <div className="my-4">
          <img
            src="https://ghchart.rshah.org/r-jeffery-wall"
            alt="r-jeffery-wall's GitHub contribution chart"
            className="mx-auto my-4 max-w-full"
          />
          <div className="flex justify-center items-center gap-3">
            <img
              src={profile.avatar_url}
              alt="GitHub profile picture"
              className="rounded-full border-2 border-dotted border-orange-400 w-16 h-16"
            />
            <h4>
              <a href={profile.html_url} target="_blank" rel="noreferrer">
                {profile.login}
              </a>
            </h4>
          </div>
          <p className="my-2">{profile.bio}</p>
          <p className="text-orange-400">
            public repos: {profile.public_repos.toString()} · followers:{' '}
            {profile.followers.toString()}
          </p>
        </div>
      )}
      {reposLoading ? (
        <p className="text-orange-400">$ loading repos...</p>
      ) : reposLoadFailed ? (
        <p>Failed to load GitHub repos. Please refresh the page.</p>
      ) : (
        <ul className="flex flex-wrap justify-center gap-6 list-none p-0">
          {repos.map((repo) => (
            <li
              key={repo.full_name}
              className="border-2 border-dotted border-orange-400 rounded p-4 w-full md:w-2/5"
            >
              <h4 className="border-b border-dotted border-orange-400 pb-2">
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h4>
              <p className="my-3">{repo.description}</p>
              <p className="text-sm text-gray-400">
                created: {moment(repo.created_at).format('DD MMM YYYY')} ·
                updated: {moment(repo.updated_at).format('DD MMM YYYY')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
