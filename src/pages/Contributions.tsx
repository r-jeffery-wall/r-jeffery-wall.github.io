import { GitHubInfo } from "../components/gitHubInfo/gitHubInfo"

export const Contributions: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className="p-3">My Contributions</h1>
            <GitHubInfo />
        </div>
    )
}