import './my-projects.scss'
import useNavigationStore from '../../store/navigationStore';

export default function MyProjects() {
    const { showProjects } = useNavigationStore();

    return (
        showProjects && (
            <div className="greeting-container">
                <h2>My Projects</h2>
            </div>
        )
    )
}