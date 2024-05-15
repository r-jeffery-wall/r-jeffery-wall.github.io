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
      <div className="bg-secondary border border-black rounded w-75 m-auto text-white">
        <h2>GitHub Stats</h2>
        <figure>
          <img
            id="github-contributions"
            src="http://ghchart.rshah.org/r-jeffery-wall"
            alt="r-jeffery-wall's Github chart"
          />
          <figcaption>My GitHub contributions.</figcaption>
        </figure>
        <div>
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
