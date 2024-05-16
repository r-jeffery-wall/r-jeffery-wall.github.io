import { GitHubInfo } from "../components/gitHubInfo/gitHubInfo"
import { ReposList } from "../components/repoList/RepoList"

export const Contributions: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className="p-3">My Contributions</h1>
            <GitHubInfo />
            <ReposList />
        </div>
    )
}