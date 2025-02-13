import './my-projects.scss'
import useNavigationStore from '../../store/navigationStore';

export default function MyProjects() {
    const { showProjects } = useNavigationStore();

    return (
        showProjects && (
            <div className="page-container">
                <h2 className='util-title'>Projects</h2>
            </div>
        )
    )
}