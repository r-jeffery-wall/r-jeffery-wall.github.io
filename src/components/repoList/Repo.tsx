import { RepoInterface } from "../../features/gitHub/gitHubSlice"
import moment from "moment";

export const Repo: React.FC<RepoInterface> = ({ name, html_url, description, created_at, updated_at }) => {
    return (
        <div className="bg-secondary border border-black rounded col-sm-5 m-auto">
            <div className="border-bottom border-black text-center">
                <h3><a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href={html_url} target="_blank">{name}</a></h3>
            </div>
            <p className="my-3">{description}</p>
            <div>
                <div>
                    <h5>Created at:</h5>
                    <p>{moment(created_at).format("DD MMM YYYY hh:mm:ss")}</p>
                </div>
                <div>
                    <h5>Updated at:</h5>
                    <p>{moment(updated_at).format("DD MMM YYYY hh:mm:ss")}</p>
                </div>
            </div>
        </div>
    )
}