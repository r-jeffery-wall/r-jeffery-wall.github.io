import { useSelector } from 'react-redux'
import {
  getProfileInfo,
  isProfileLoadFailed,
  isProfileLoading,
  selectProfile,
} from '../../features/gitHub/gitHubSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'

export const GitHubInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const profileLoading = useSelector(isProfileLoading)
  const profileLoadFailed = useSelector(isProfileLoadFailed)
  const profile = useSelector(selectProfile)

  useEffect(() => {
    dispatch(getProfileInfo('r-jeffery-wall'))
  }, [])

  if (profileLoading) {
    return (
      <div className="bg-secondary border border-black rounded w-75 m-auto text-white">
        <h1>Profile Loading!</h1>
      </div>
    )
  } else if (profileLoadFailed) {
    return (
      <div className="bg-secondary border border-black rounded w-75 m-auto text-white">
        <h1>Profile Load Failed!</h1>
      </div>
    )
  } else {
    return (
      <div className="container-lg bg-secondary border border-black rounded m-auto text-white my-3">
        <h2>GitHub Stats</h2>
        <figure>
          <img
            id="github-contributions"
            className="bg-dark-subtle border border-black img-fluid"
            src="http://ghchart.rshah.org/r-jeffery-wall"
            alt="r-jeffery-wall's Github chart"
          />
          <figcaption>My GitHub contributions.</figcaption>
        </figure>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="rounded-circle border border-secondary me-3"
            style={{ width: '75px', height: '75px' }}
            src={profile.avatar_url}
            alt="gitHub profile picture"
          />
          <h5>
            <a
              href={profile.html_url}
              target="_blank"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >
              {profile.login}
            </a>
          </h5>
        </div>
        <p className="mt-2">{profile.bio}</p>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <h5>Public Repos: </h5>
            <p>{profile.public_repos.toString()}</p>
          </div>
          <div>
            <h5>Followers: </h5>
            <p>{profile.followers.toString()}</p>
          </div>
        </div>
      </div>
    )
  }
}
