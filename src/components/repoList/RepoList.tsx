import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  getReposForUser,
  isReposLoadFailed,
  isReposLoading,
  selectRepos,
} from '../../features/gitHub/gitHubSlice'
import { AppDispatch } from '../../store'
import { useEffect } from 'react'
import { Repo } from './Repo'

export const ReposList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const reposLoading = useSelector(isReposLoading)
  const reposLoadFailed = useSelector(isReposLoadFailed)
  const repos = useSelector(selectRepos)

  useEffect(() => {
    dispatch(getReposForUser('r-jeffery-wall'))
  }, [])

  if (reposLoading) {
    return <h1>Repos Loading!</h1>
  } else if (reposLoadFailed) {
    return <h1>Repo Load Failed!</h1>
  } else {
    return (
      <>
        <h2>Public Repos:</h2>
        <div className="container">
          {repos.map((repo) => (
            <Repo
              name={repo.name}
              full_name={repo.full_name}
              html_url={repo.html_url}
              description={repo.description}
              created_at={repo.created_at}
              updated_at={repo.updated_at}
            />
          ))}
        </div>
      </>
    )
  }
}
