import { useDispatch } from "react-redux"
import { SkillsList } from "../skillsList/SkillsList"
import { Button } from "react-bootstrap"
import { clearFilters } from "../../features/projects/projectsSlice";

export const SkillsFilter: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="bg-secondary border border-black rounded w-75 m-auto text-white">
            <h2>Skills</h2>
            <p>Click on a technology to filter projects.</p>
            <SkillsList filter={true} />
            <Button variant="primary" onClick={() => dispatch(clearFilters())}>Clear Filters</Button>
        </div>
    )
}