import { RepoInterface } from "../../features/gitHub/gitHubSlice"

export const Repo: React.FC<RepoInterface> = ({ name, full_name, html_url, description, created_at, updated_at }) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h3><a href={html_url} target="_blank">{full_name}</a></h3>
            </div>
            <p>{description}</p>
            <div>
                <div>
                    <h5>Created at:</h5>
                    <p>{created_at}</p>
                </div>
                <div>
                    <h5>Updated at:</h5>
                    <p>{updated_at}</p>
                </div>
            </div>
        </div>
    )
}